const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'psgcas_secret_key_2026';
const DB_PATH = path.join(__dirname, 'database.json');

// Middleware
app.use(cors({
    origin: '*', // For local dev server access
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Database load/save helpers
function readDB() {
    try {
        const raw = fs.readFileSync(DB_PATH, 'utf8');
        return JSON.parse(raw);
    } catch (err) {
        console.error("Database read error:", err);
        return { users: [], reviews: [], events: [], courses: [], districts: [] };
    }
}

function writeDB(data) {
    try {
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error("Database write error:", err);
    }
}

// Authentication Middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied. Token missing." });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid or expired token." });
        }
        req.user = user;
        next();
    });
}

/* ==========================================
   REST API ROUTING
   ========================================== */

// 1. Authentication Endpoints
app.post('/api/auth/register', (req, res) => {
    const { username, password, email, role } = req.body; // role: 'student', 'faculty', 'admin'
    
    if (!username || !password || !email) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const db = readDB();
    const existing = db.users.find(u => u.username === username || u.email === email);
    if (existing) {
        return res.status(400).json({ message: "Username or Email already registered." });
    }

    // Hash password and store user
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = {
        id: db.users.length + 1,
        username,
        email,
        password: hashedPassword,
        role: role || 'student'
    };

    db.users.push(newUser);
    writeDB(db);

    res.status(201).json({ message: "User registered successfully." });
});

app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }

    const db = readDB();
    const user = db.users.find(u => u.username === username);
    if (!user) {
        return res.status(400).json({ message: "Invalid credentials." });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        return res.status(400).json({ message: "Invalid credentials." });
    }

    // Generate JWT token
    const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        JWT_SECRET,
        { expiresIn: '2h' }
    );

    res.json({
        token,
        user: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        }
    });
});

app.get('/api/auth/verify', authenticateToken, (req, res) => {
    res.json({ valid: true, user: req.user });
});

// 2. Course Catalog Endpoints
app.get('/api/courses', (req, res) => {
    const db = readDB();
    const { stream, level, search } = req.query;

    let list = db.courses;

    if (stream && stream !== 'all') {
        list = list.filter(c => c.stream === stream);
    }
    if (level && level !== 'all') {
        list = list.filter(c => c.level === level);
    }
    if (search) {
        const query = search.toLowerCase();
        list = list.filter(c => 
            c.name.toLowerCase().includes(query) || 
            c.highlights.toLowerCase().includes(query) ||
            c.outcome.toLowerCase().includes(query)
        );
    }

    res.json(list);
});

// Admin-only course addition
app.post('/api/courses', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin' && req.user.role !== 'faculty') {
        return res.status(403).json({ message: "Unauthorized operation." });
    }

    const { id, name, level, stream, duration, highlights, eligibility, fee, outcome } = req.body;

    if (!id || !name || !level || !stream || !duration || !fee || !outcome) {
        return res.status(400).json({ message: "Missing required course fields." });
    }

    const db = readDB();
    const existing = db.courses.find(c => c.id === id);
    if (existing) {
        return res.status(400).json({ message: "Course ID already exists." });
    }

    const newCourse = { id, name, level, stream, duration, highlights, eligibility, fee: Number(fee), outcome };
    db.courses.push(newCourse);
    writeDB(db);

    res.status(201).json({ message: "Course added successfully.", course: newCourse });
});

// 3. Placements Endpoint
app.get('/api/placements', (req, res) => {
    // Placement analytics stats packages
    res.json({
        metrics: {
            placementRate: "94.2%",
            highestLpa: "14.5",
            averageLpa: "5.8",
            recruiters: 220
        },
        salaryTrends: {
            years: ['2021', '2022', '2023', '2024', '2025 (Projected)'],
            highest: [9.5, 11.2, 12.8, 14.5, 16.0],
            average: [4.2, 4.8, 5.1, 5.8, 6.2]
        },
        industrySectors: {
            labels: ['IT & SaaS Services', 'Banking & Finance', 'Biotech & Pharma', 'Corporate & Advisory', 'Media & Arts'],
            shares: [42, 23, 15, 12, 8]
        },
        departmentRates: {
            departments: ['Comp Science', 'Commerce', 'Biotech', 'Business Mgmt', 'Psychology', 'Literature'],
            rates: [98, 96, 90, 94, 88, 85]
        }
    });
});

// 4. District Alumni Endpoints
app.get('/api/districts', (req, res) => {
    const db = readDB();
    res.json(db.districts);
});

// 5. Legacy Timeline Milestones
app.get('/api/milestones', (req, res) => {
    const db = readDB();
    res.json(db.milestones);
});

// 6. Campus Events Endpoints
app.get('/api/events', (req, res) => {
    const db = readDB();
    res.json(db.events);
});

app.post('/api/events', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin' && req.user.role !== 'faculty') {
        return res.status(403).json({ message: "Unauthorized operation." });
    }

    const { title, category, desc, date, metric } = req.body;
    if (!title || !category || !desc || !date) {
        return res.status(400).json({ message: "Missing required event fields." });
    }

    const db = readDB();
    const newEvent = {
        id: db.events.length + 1,
        title,
        category,
        desc,
        date,
        metric: metric || "Active Event"
    };

    db.events.unshift(newEvent); // Add to the top of list
    writeDB(db);

    res.status(201).json({ message: "Campus event added successfully.", event: newEvent });
});

// 7. Student Feedback / Reviews Endpoints
app.get('/api/feedback', (req, res) => {
    const db = readDB();
    res.json(db.reviews);
});

app.post('/api/feedback', authenticateToken, (req, res) => {
    // Only logged-in students or faculty can leave feedback reviews
    const { score, text } = req.body;

    if (!score || !text) {
        return res.status(400).json({ message: "Rating score and review comment are required." });
    }

    const db = readDB();
    const newReview = {
        id: db.reviews.length + 1,
        author: `${req.user.username}, Student`,
        score: Number(score).toFixed(1),
        text
    };

    db.reviews.unshift(newReview);
    writeDB(db);

    res.status(201).json({ message: "Thank you for your feedback!", review: newReview });
});

// Start Server
app.listen(PORT, () => {
    console.log(`PSGCAS API Backend listening on http://localhost:${PORT}`);
});
