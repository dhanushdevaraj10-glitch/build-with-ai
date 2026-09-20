/* ==========================================================================
   PSG COLLEGE OF ARTS & SCIENCE - INTERACTIVE APP ENGINE
   Contains: Mock Database, Routing, Wizard Engines, TN Map Builder,
             Chart Controller, 360 Explorer, and Calculator functions.
   ========================================================================== */

/* ==========================================
   1. MOCK DATABASE STORE
   ========================================== */

const DISTRICTS_DB = [
    { id: "coimbatore", name: "Coimbatore", x: 120, y: 210, count: 8500, scholars: 420, isHub: true, companies: "Robert Bosch, PricewaterhouseCoopers, TCS, Cognizant, ELGI", quote: "The industrial ecosystem in Coimbatore paired with PSGCAS's practical curriculum helped me establish my own robotics consulting firm.", author: "Rajesh K., Founder & CEO" },
    { id: "chennai", name: "Chennai", x: 290, y: 50, count: 4200, scholars: 180, isHub: false, companies: "Goldman Sachs, Deloitte, CTS, Infosys, Zoho", quote: "Studying in PSGCAS opened up doors in core finance that I didn't think were accessible outside Chennai. The alumni network here is massive.", author: "Deepika R., Investment Analyst" },
    { id: "madurai", name: "Madurai", x: 180, y: 270, count: 2800, scholars: 140, isHub: false, companies: "HCL Technologies, Honeywell, TCS, Zoho, Federal Bank", quote: "The transition from Madurai to Coimbatore was made seamless by the welcoming culture of PSGCAS. The campus resources are top-notch.", author: "Manoj Kumar P., Software Lead" },
    { id: "trichy", name: "Tiruchirappalli", x: 215, y: 210, count: 2400, scholars: 110, isHub: false, companies: "BHEL, Wipro, CTS, Accenture, IDBI Bank", quote: "PSGCAS's reputation in delta districts is phenomenal. Coming here for my M.Sc. was the best career decision I ever made.", author: "Suresh Sundaram, Research Scientist" },
    { id: "tirunelveli", name: "Tirunelveli", x: 145, y: 375, count: 1900, scholars: 95, isHub: false, companies: "Zoho Corporation, Tech Mahindra, CTS, Muthoot Finance", quote: "The scholarships at PSGCAS made it possible for me to pursue my computer application dreams without burdening my family.", author: "Muthuvel S., Systems Engineer" },
    { id: "salem", name: "Salem", x: 190, y: 160, count: 2200, scholars: 105, isHub: false, companies: "Jindal Steel, TCS, Wipro, L&T, Axis Bank", quote: "The laboratory infrastructure at PSGCAS is superior. It gave me the experimental foundation needed for my research fellowships.", author: "Dr. Anbarasan G., Biotech Researcher" },
    { id: "erode", name: "Erode", x: 150, y: 170, count: 3100, scholars: 160, isHub: false, companies: "Texmo Industries, Wipro, Cognizant, ICICI Bank", quote: "Erode's proximity to Coimbatore makes PSGCAS the absolute premier destination for commerce and management students from our district.", author: "Karthikeyan S., Chartered Accountant" },
    { id: "tiruppur", name: "Tiruppur", x: 150, y: 210, count: 3900, scholars: 195, isHub: false, companies: "Eastman Exports, Poppys Group, TCS, HSBC, Amazon", quote: "The B.Com. Entrepreneurship course helped me modernize my family's apparel manufacturing unit in Tiruppur with global supply chain systems.", author: "Arjun N., Managing Director" },
    { id: "kanyakumari", name: "Kanyakumari", x: 135, y: 410, count: 1200, scholars: 70, isHub: false, companies: "CTS, Infosys, Federal Bank, Standard Chartered", quote: "Traveling from the southernmost tip of Tamil Nadu to PSGCAS was daunting, but the legacy and ranking of this college made every kilometer worth it.", author: "Jenifer A., HR Consultant" },
    { id: "thanjavur", name: "Thanjavur", x: 250, y: 220, count: 1700, scholars: 90, isHub: false, companies: "Zoho, TCS, City Union Bank, Wipro", quote: "The cultural heritage at PSGCAS is wonderful. Being a part of the fine arts club allowed me to represent my traditional roots on state platforms.", author: "Prasanna Devi, Professional Artist" },
    { id: "vellore", name: "Vellore", x: 220, y: 70, count: 1500, scholars: 65, isHub: false, companies: "Cognizant, TCS, L&T Infotech, SBI", quote: "PSGCAS blends values and technology perfectly. The placement training programs here are rigorous and industry-focused.", author: "Ramesh Prasanna, Data Engineer" },
    { id: "nilgiris", name: "Nilgiris", x: 110, y: 175, count: 1100, scholars: 80, isHub: false, companies: "Tata Consumer Products, Wipro, Taj Hotels, Accenture", quote: "As a student from a hill community, the scholarship support and equal opportunities at PSGCAS paved the way for my corporate journey.", author: "Shalini K., Hospitality Manager" },
    { id: "cuddalore", name: "Cuddalore", x: 270, y: 160, count: 1350, scholars: 60, isHub: false, companies: "NLC India, Wipro, TCS, CTS", quote: "The research atmosphere in PG departments is outstanding. The guidance for CSIR-NET exams is highly commendable.", author: "Venkatesan M., Assistant Professor" },
    { id: "dharmapuri", name: "Dharmapuri", x: 175, y: 120, count: 950, scholars: 75, isHub: false, companies: "TCS, Zoho, Wipro, Lakshmi Machine Works", quote: "First graduate scholarship program at PSG College enabled me to pursue my higher studies and secure a software job.", author: "Prakash R., Systems Architect" },
    { id: "krishnagiri", name: "Krishnagiri", x: 170, y: 85, count: 1150, scholars: 70, isHub: false, companies: "TVS Motors, Ashok Leyland, Ola Electric, Infosys", quote: "PSG CAS connects us directly to emerging manufacturing and tech hubs. The industrial exposure here is second to none.", author: "Deepak S., Operations Lead" },
    { id: "namakkal", name: "Namakkal", x: 185, y: 185, count: 1850, scholars: 85, isHub: false, companies: "Ramco Cements, CTS, Wipro, Axis Bank", quote: "The focus on practical accounting in B.Com. courses at PSG prepared me directly for corporate standards.", author: "Priya Murugan, Finance Manager" },
    { id: "dindigul", name: "Dindigul", x: 170, y: 240, count: 1600, scholars: 75, isHub: false, companies: "TCS, City Union Bank, Wipro, HDFC Bank", quote: "The sports facilities and training provided at PSG helped me represent the college in national level tournaments.", author: "Satheesh Kumar, Sports Coach" },
    { id: "theni", name: "Theni", x: 135, y: 270, count: 1100, scholars: 65, isHub: false, companies: "Zoho, TCS, Wipro, Muthoot Finance", quote: "My college days at PSGCAS instilled confidence in me to take up agricultural entrepreneurship in my home district.", author: "Ganesh R., Agri-Entrepreneur" },
    { id: "virudhunagar", name: "Virudhunagar", x: 165, y: 305, count: 1450, scholars: 70, isHub: false, companies: "TCS, Wipro, Cognizant, IDFC First Bank", quote: "The college placement cell ensures that even students from rural districts get equal cracks at premium companies.", author: "Karthiga M., HR Executive" },
    { id: "ramanathapuram", name: "Ramanathapuram", x: 220, y: 315, count: 900, scholars: 60, isHub: false, companies: "Zoho, Wipro, Federal Bank, TCS", quote: "PSG's scholarship portal is completely transparent. It helped fund my research in marine biotechnology.", author: "Siddiq A., Marine Scholar" },
    { id: "thoothukudi", name: "Thoothukudi", x: 175, y: 355, count: 1300, scholars: 65, isHub: false, companies: "SPIC, Sterlite, V.O. Chidambaranar Port, TCS", quote: "The quality of chemistry education at PSGCAS has prepared me for industrial lab management positions.", author: "Antony Cruz, Chemical Analyst" },
    { id: "tenkasi", name: "Tenkasi", x: 125, y: 355, count: 1150, scholars: 60, isHub: false, companies: "Zoho, TCS, Cognizant, South Indian Bank", quote: "Moving from Tenkasi to PSG changed my perspective. The global exposure and guest lectures are highly enriching.", author: "Meenakshi S., Business Development" },
    { id: "sivaganga", name: "Sivaganga", x: 210, y: 275, count: 1050, scholars: 55, isHub: false, companies: "TCS, Wipro, Zoho, City Union Bank", quote: "PSG's library is a goldmine for competitive exam aspirants. It supported my preparation for government services.", author: "Alagappan M., Deputy Collector" },
    { id: "pudukkottai", name: "Pudukkottai", x: 230, y: 245, count: 1250, scholars: 70, isHub: false, companies: "City Union Bank, TCS, Zoho, CTS", quote: "The focus on corporate ethics and communication skills at PSG builds a strong foundation for any career path.", author: "Geetha K., Public Relations" },
    { id: "nagapattinam", name: "Nagapattinam", x: 290, y: 225, count: 850, scholars: 50, isHub: false, companies: "TCS, Zoho, Wipro, Standard Chartered", quote: "Sincere gratitude to the placement coordinators who guided me through technical and HR rounds of interviews.", author: "Anandan S., Cyber Security Expert" },
    { id: "tiruvarur", name: "Tiruvarur", x: 270, y: 225, count: 950, scholars: 55, isHub: false, companies: "TCS, CTS, Wipro, Axis Bank", quote: "The Tamil literary events and debate forums at PSG helped me polish my communication and leadership skills.", author: "Elango T., Media Journalist" },
    { id: "karur", name: "Karur", x: 185, y: 210, count: 1750, scholars: 80, isHub: false, companies: "Karur Vysya Bank, TCS, Wipro, Amazon", quote: "Getting placed in a reputed bank directly after my BBA was a dream come true, thanks to PSG Campus Placements.", author: "Vignesh A., Bank Officer" },
    { id: "viluppuram", name: "Viluppuram", x: 250, y: 140, count: 1300, scholars: 65, isHub: false, companies: "CTS, TCS, Infosys, Zoho", quote: "The campus infrastructure, particularly computer labs, are accessible 24/7 for researchers.", author: "Nandhini P., Data Analyst" },
    { id: "kallakurichi", name: "Kallakurichi", x: 220, y: 150, count: 900, scholars: 60, isHub: false, companies: "TCS, Wipro, Zoho, L&T", quote: "First graduate concession and hostel grants helped me complete my PG education in social work.", author: "Sakthivel M., Social Coordinator" },
    { id: "tiruvannamalai", name: "Tiruvannamalai", x: 230, y: 110, count: 1100, scholars: 60, isHub: false, companies: "Infosys, TCS, Wipro, Axis Bank", quote: "The spiritual peace of my town and academic focus of PSG shaped my personality positively.", author: "Arunagiri N., HR Specialist" },
    { id: "kanchipuram", name: "Kanchipuram", x: 260, y: 70, count: 1400, scholars: 70, isHub: false, companies: "Deloitte, TCS, Wipro, Zoho", quote: "We have a strong network of PSG alumni in the Chennai/Kanchipuram industrial corridor assisting juniors.", author: "Sowmya V., Senior Lead" },
    { id: "chengalpattu", name: "Chengalpattu", x: 280, y: 85, count: 1550, scholars: 75, isHub: false, companies: "Zoho, Infosys, Wipro, TCS, Deloitte", quote: "PSG's innovation hub is the ideal place for tech prototyping and pitching ideas to angel investors.", author: "Nithin Kumar, Tech Founder" },
    { id: "ranipet", name: "Ranipet", x: 240, y: 65, count: 1050, scholars: 55, isHub: false, companies: "BHEL, TCS, CTS, Wipro", quote: "The faculty guidance for publishing research papers in international journals is exceptional.", author: "Hariharan R., Ph.D. scholar" },
    { id: "tirupathur", name: "Tirupathur", x: 200, y: 90, count: 920, scholars: 50, isHub: false, companies: "TCS, Wipro, Zoho, HDFC Bank", quote: "The mentorship programs at PSGCAS help students from interior districts catch up with modern industry demands.", author: "Sindhu J., QA Analyst" },
    { id: "thiruvallur", name: "Thiruvallur", x: 260, y: 40, count: 1250, scholars: 65, isHub: false, companies: "Caterpillar, TCS, Wipro, Cognizant", quote: "Academic curriculum matches industry benchmarks, making students job-ready from Day 1.", author: "Balaji V., Product Owner" },
    { id: "ariyalur", name: "Ariyalur", x: 240, y: 180, count: 800, scholars: 50, isHub: false, companies: "Ramco Cements, Ultratech, TCS, Wipro", quote: "Coming from Ariyalur, receiving financial aid from PSG trust allowed me to study tension-free.", author: "Elavarasan K., Operations Analyst" },
    { id: "perambalur", name: "Perambalur", x: 220, y: 175, count: 850, scholars: 55, isHub: false, companies: "MRF Tyres, TCS, Zoho, Axis Bank", quote: "The industry visits arranged during the course gave us practical views of corporate environments.", author: "Revathi S., Quality Lead" },
    { id: "mayiladuthurai", name: "Mayiladuthurai", x: 285, y: 190, count: 1000, scholars: 50, isHub: false, companies: "City Union Bank, TCS, Wipro, Zoho", quote: "Highly experienced professors and a vast collection of library books support active learning here.", author: "Vaidehi R., Content Creator" }
];

const COURSES_DB = [
    // Sciences
    { id: "bsc-cs", name: "B.Sc. Computer Science", level: "UG", stream: "science", duration: "3 Years", highlights: "Core computing, Cloud Architecture, AI Lab access", eligibility: "12th Std with Math/Computer Science", fee: 40000, outcome: "Software Engineer / Web Dev" },
    { id: "bsc-biotech", name: "B.Sc. Biotechnology", level: "UG", stream: "science", duration: "3 Years", highlights: "Advanced gene-mapping labs, industrial internships", eligibility: "12th Std with Biology", fee: 45000, outcome: "Research Analyst / Bio-Tech Officer" },
    { id: "bsc-physics", name: "B.Sc. Physics", level: "UG", stream: "science", duration: "3 Years", highlights: "Quantum mechanics labs, preparation for IIT-JAM", eligibility: "12th Std with Physics & Math", fee: 35000, outcome: "Scientific Assistant / Research Scholar" },
    { id: "bsc-psychology", name: "B.Sc. Psychology", level: "UG", stream: "science", duration: "3 Years", highlights: "Clinical counseling modules, mental health projects", eligibility: "12th Std (Any Stream)", fee: 38000, outcome: "HR Specialist / Counselor" },
    { id: "msc-cyber", name: "M.Sc. Cyber Security", level: "PG", stream: "science", duration: "2 Years", highlights: "Threat assessment lab, ethical hacking bootcamps", eligibility: "B.Sc. CS / BCA / Allied degrees", fee: 65000, outcome: "Security Consultant / Cyber Analyst" },
    { id: "msc-data", name: "M.Sc. Data Science", level: "PG", stream: "science", duration: "2 Years", highlights: "Big Data computation, AI algorithms, industry collaboration", eligibility: "B.Sc. CS / Maths / Statistics", fee: 70000, outcome: "Data Scientist / ML Engineer" },

    // Commerce
    { id: "bcom", name: "B.Com. (General)", level: "UG", stream: "commerce", duration: "3 Years", highlights: "Chartered Accountant (CA) foundations coaching", eligibility: "12th Std with Commerce & Accountancy", fee: 42000, outcome: "Financial Consultant / Audit Associate" },
    { id: "bcom-pa", name: "B.Com. Professional Accounting", level: "UG", stream: "commerce", duration: "3 Years", highlights: "Mapped to CA/CMA guidelines, case-study based exams", eligibility: "12th Std with Commerce & Accountancy", fee: 48000, outcome: "Corporate Accountant / Audit Lead" },
    { id: "bcom-ib", name: "B.Com. International Business", level: "UG", stream: "commerce", duration: "3 Years", highlights: "Exim operations, global logistics modules", eligibility: "12th Std with Commerce & Accountancy", fee: 52000, outcome: "Export Manager / Logistics Lead" },
    { id: "mcom", name: "M.Com. (International Business)", level: "PG", stream: "commerce", duration: "2 Years", highlights: "International trade simulations, port visits", eligibility: "B.Com. / BBA or allied business degrees", fee: 60000, outcome: "Trade Consultant / Forex Analyst" },

    // Arts & Humanities
    { id: "ba-english", name: "B.A. English Literature", level: "UG", stream: "arts", duration: "3 Years", highlights: "Creative writing, theatre workshops, journalism tracks", eligibility: "12th Std (Any Stream)", fee: 28000, outcome: "Content Strategist / Journalist" },
    { id: "ba-tamil", name: "B.A. Tamil Literature", level: "UG", stream: "arts", duration: "3 Years", highlights: "Epigraphy workshops, local heritage studies, speech writing", eligibility: "12th Std with Tamil", fee: 20000, outcome: "Translator / State Services Officer" },
    { id: "ma-journalism", name: "M.A. Journalism & Mass Communication", level: "PG", stream: "arts", duration: "2 Years", highlights: "In-house recording studio, digital production pipelines", eligibility: "Graduation (Any Stream)", fee: 50000, outcome: "News Anchor / PR Manager" },

    // Management & Tech
    { id: "bba", name: "BBA (Bachelor of Business Administration)", level: "UG", stream: "management", duration: "3 Years", highlights: "Business incubator programs, venture building models", eligibility: "12th Std (Any Stream)", fee: 46000, outcome: "Management Trainee / Tech Startup Founder" },
    { id: "bca", name: "BCA (Bachelor of Computer Applications)", level: "UG", stream: "management", duration: "3 Years", highlights: "Full-stack development labs, mobile application engineering", eligibility: "12th Std with Mathematics", fee: 44000, outcome: "Software Developer / IT Consultant" },

    // Research
    { id: "phd-cs", name: "Ph.D. Computer Science", level: "Research", stream: "management", duration: "3-5 Years", highlights: "Funded research projects, international journal publishing support", eligibility: "M.Sc. CS / MCA with UGC-NET/SET", fee: 30000, outcome: "Associate Professor / R&D Scientist" },
    { id: "phd-biotech", name: "Ph.D. Biotechnology", level: "Research", stream: "science", duration: "3-5 Years", highlights: "Access to state-funded phytochemistry and genetics core hubs", eligibility: "M.Sc. Biotech / Microbiology with NET/SET", fee: 32000, outcome: "Biotech Director / Senior Advisor" }
];

const LEGACY_Milestones = [
    { year: "1947", tag: "FOUNDATION YEAR", title: "Dawn of a Legacy", desc: "PSG College of Arts & Science was established by the PSG & Sons Charities Trust with a vision to provide quality education and foster research. Founded on the values of empowerment, the college started operations on the very year India gained independence, symbolizing a national rebirth in educational standard.", bullet1: "🏛️ Commenced with 3 key departments", bullet2: "📍 Housed in heritage stone buildings" },
    { year: "1978", tag: "AUTONOMOUS STATUS", title: "Pioneers in Academic Autonomy", desc: "PSG College of Arts & Science was one of the first few colleges in India to be conferred with Autonomous status by the UGC. This autonomy empowered the institution to design its own curriculum matching global trends, introduce revolutionary evaluation models, and launch custom job-oriented courses.", bullet1: "📜 Flexible Choice Based Credit System (CBCS)", bullet2: "🤝 Dynamic industry-focused syllabi" },
    { year: "1999", tag: "ACCREDITATION TRIUMPH", title: "First NAAC Validation", desc: "Setting national benchmarks, the college became the first arts and science college in the region to submit to NAAC accreditation. It was immediately rewarded with Five Star Status, highlighting the world-class library, laboratory setups, and community engagement models.", bullet1: "⭐ Awarded Five Star rating (highest then)", bullet2: "💻 Introduction of campus-wide network systems" },
    { year: "2010", tag: "COLLEGE WITH POTENTIAL FOR EXCELLENCE", title: "UGC Landmark Recognition", desc: "The University Grants Commission recognized PSGCAS as a 'College with Potential for Excellence' (CPE). This landmark recognition came with significant grants that allowed the building of high-end research incubators, smart classrooms, and state-of-the-art sports facilities.", bullet1: "💰 UGC Grants worth crores for infrastructure development", bullet2: "🔬 Construction of advanced central research lab" },
    { year: "2019", tag: "ACCELERATED GROWTH CYCLE", title: "NAAC 4th Cycle A++ Grade", desc: "In the 4th cycle of NAAC accreditation, PSGCAS secured the highest possible grade of A++ with an outstanding CGPA of 3.63 out of 4. This positioned it in the top 1% of higher education institutions in India.", bullet1: "🏆 CGPA of 3.63/4.00, placing it at the national peak", bullet2: "💼 Launch of GRD Innovation & Startup Incubator" },
    { year: "Present", tag: "GLOBAL EDUCATIONAL ENGINE", title: "Connecting Tamil Nadu's Talent", desc: "Today, PSGCAS serves as a premier education center with over 15,000 students coming from all 38 districts of Tamil Nadu. Boasting top NIRF rankings and placement records with 220+ recruiters annually, the college continues its mission of transforming talent into global leaders.", bullet1: "📈 Ranked among the top Arts & Science colleges nationally", bullet2: "🤝 92%+ placement rate with peak package of ₹14.5 LPA" }
];

const CAMPUS_FEED_DB = [
    { title: "CAS FEST 2026: Intercollegiate Cultural Fiesta", category: "festivals", desc: "Over 50 colleges across South India participated in the annual arts and dance extravaganza. Traditional Tamil folk forms met modern fusion beats, showcasing student creativity.", date: "June 14, 2026", metric: "5,000+ Attendees" },
    { title: "PSG CAS Wins State Athletic Championship Trophy", category: "sports", desc: "The college sports squad bagged 14 gold medals at the Tamil Nadu Intercollegiate Athletics Meet held in Chennai, securing the overall team championship trophy.", date: "June 08, 2026", metric: "14 Gold Medals" },
    { title: "National Workshop on Quantum Computing Architectures", category: "workshops", desc: "The Department of Computer Science, in collaboration with IBM Research, hosted a 3-day bootcamp on Qiskit programming, training 120 postgraduate scholars.", date: "May 28, 2026", metric: "120 Scholars Trained" },
    { title: "Five Student Startups Incubated at GRD Hub", category: "innovation", desc: "Five student-led innovations, including a smart water irrigation sensor and a regional logistics app, were awarded seed funds of ₹2 Lakhs each for commercial prototype development.", date: "May 15, 2026", metric: "₹10L Seed Capital Distributed" },
    { title: "Agri-Tech Expo 2026 organized by Bio-Tech Department", category: "workshops", desc: "A rural outreach program where students demonstrated eco-friendly organic pesticides and soil testing kits to farmers visiting from Western districts.", date: "April 20, 2026", metric: "400+ Farmers Benefitted" },
    { title: "Hostel Cultural Day & Traditional Food Festival", category: "festivals", desc: "An evening dedicated to hostellers, representing cuisines from all Tamil Nadu districts. Traditional kolam competitions and folk art performances were highlights.", date: "April 05, 2026", metric: "12 Traditional Food Stalls" }
];

const TOUR_DB = {
    library: {
        bgGradient: "linear-gradient(135deg, rgba(8,11,17,0.7) 0%, rgba(128,15,47,0.85) 100%)",
        hotspots: [
            { x: 30, y: 40, title: "Digital Research Gateway", desc: "Equipped with 100+ high-end computer terminals providing access to IEEE, Scopus, and international digital journals." },
            { x: 75, y: 35, title: "Heritage Archive Vault", desc: "Preserving rare manuscripts, ancient editions, and regional historical records dating back to the late 19th century." },
            { x: 50, y: 70, title: "Collaborative Study Lounge", desc: "An open, glass-walled discussion arena where students brainstorm projects, practice presentations, and collaborate in teams." }
        ]
    },
    lab: {
        bgGradient: "linear-gradient(135deg, rgba(8,11,17,0.7) 0%, rgba(10,147,150,0.85) 100%)",
        hotspots: [
            { x: 25, y: 50, title: "Gas Chromatography-Mass Spectrometry (GC-MS)", desc: "State-of-the-art analytical chemistry setup utilized for advanced phytochemical and genetics research." },
            { x: 60, y: 30, title: "Clean Room Incubator", desc: "Strictly regulated environment for microbiological cell cultures, DNA sequencing, and enzyme engineering." },
            { x: 80, y: 65, title: "AI Modeling Station", desc: "High-performance GPU rigs utilized by research scholars for deep learning model training and big data analytics." }
        ]
    },
    sports: {
        bgGradient: "linear-gradient(135deg, rgba(8,11,17,0.7) 0%, rgba(251,133,0,0.8) 100%)",
        hotspots: [
            { x: 20, y: 45, title: "Indoor Wooden Basketball Arena", desc: "Constructed to international standards, hosting state and national intercollegiate championships." },
            { x: 50, y: 35, title: "Synthetic Athletics Track", desc: "400m Olympic-standard rubberized track, training elite athletes representing Tamil Nadu." },
            { x: 80, y: 55, title: "Hi-Tech Fitness Gym", desc: "Equipped with state-of-the-art strength training machinery and professional sports physiotherapists on duty." }
        ]
    },
    hostel: {
        bgGradient: "linear-gradient(135deg, rgba(8,11,17,0.7) 0%, rgba(89,13,34,0.9) 100%)",
        hotspots: [
            { x: 35, y: 30, title: "Heritage Stone Courtyard", desc: "Cozy open-air courtyard in the senior hostel, perfect for evening discussions and recreational games." },
            { x: 65, y: 45, title: "Multi-Cuisine Hygiene Mess", desc: "Highly automated kitchen preparing nutritious South Indian food from local farm-fresh ingredients." },
            { x: 50, y: 75, title: "Solar Water Plant & Wi-Fi Node", desc: "Eco-friendly infrastructure providing hot water and high-speed campus Wi-Fi access in hostel rooms." }
        ]
    }
};

const REVIEWS_DB = [
    { author: "Kishore, B.Sc. Biotech", score: "4.8", text: "The research lab is incredible. We got to handle actual GC-MS equipment in our third year, which is rare in other colleges." },
    { author: "Gayathri, M.A. Journalism", score: "5.0", text: "The central library is huge! With quiet study cubicles and online journal access, I spent half my PG life preparing there." },
    { author: "Arun, B.Com. PA", score: "4.6", text: "Senior hostel mess is super clean. The traditional food festival organized every semester is a highlight!" },
    { author: "Vikram, B.Sc. CS", score: "4.9", text: "The basketball court and synthetic running tracks are superb. Trainers are very supportive of national aspirations." }
];

/* ==========================================
   2. APP INITIALIZATION & VIEW CONTROLLER
   ========================================== */

let placementsChart = null;
let selectedInterestCards = [];

document.addEventListener("DOMContentLoaded", () => {
    // Populate dropdowns
    populateDistrictsDropdown();
    
    // Switch Views initially based on hash
    handleHashRouting();
    window.addEventListener("hashchange", handleHashRouting);

    // Timeline listener setup
    initTimelineEvents();

    // Render default campus feed
    renderCampusFeed("all");
    initFeedFilters();

    // Render course catalog
    renderCoursesCatalog();
    initCourseFilters();

    // Render Interactive Alumni Map
    renderAlumniMap();

    // Setup Pathway Wizard step cards
    initWizardInterests();

    // Load Default 360 Tour Scene
    loadTourScene("library");

    // Load reviews
    renderReviews();
});

// Routing logic
function handleHashRouting() {
    const hash = window.location.hash || "#home";
    if (hash === "#home") {
        toggleView("home");
    } else if (hash === "#dashboard") {
        toggleView("dashboard");
    }
}

function toggleView(viewName) {
    // Nav link visual updates
    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("data-view") === viewName) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Content view transitions
    const views = ["home", "dashboard"];
    views.forEach(v => {
        const viewEl = document.getElementById(`view-${v}`);
        if (v === viewName) {
            viewEl.classList.add("active");
        } else {
            viewEl.classList.remove("active");
        }
    });

    // If dashboard is activated, initialize chart and map sizing
    if (viewName === "dashboard") {
        setTimeout(() => {
            initPlacementCharts("salary");
        }, 100);
    }
}

function openDashboardTab(tabId) {
    // Tab links visual update
    document.querySelectorAll(".menu-item").forEach(item => {
        if (item.getAttribute("data-tab") === tabId) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Tab content panel updates
    document.querySelectorAll(".dashboard-tab-content").forEach(panel => {
        if (panel.id === `tab-${tabId}`) {
            panel.classList.add("active");
        } else {
            panel.classList.remove("active");
        }
    });

    // Specific chart setups
    if (tabId === "placements") {
        setTimeout(() => {
            initPlacementCharts("salary");
        }, 100);
    }
}

// Side tab link listeners
document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
        const tabId = item.getAttribute("data-tab");
        openDashboardTab(tabId);
    });
});

// Scroll helper
function scrollToElement(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}

/* ==========================================
   3. LEGACY TIMELINE ENGINE
   ========================================== */

function initTimelineEvents() {
    const yearButtons = document.querySelectorAll(".timeline-year-btn");
    const sliderContainer = document.querySelector(".timeline-content-slider");

    yearButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.getAttribute("data-index");
            
            // Set active buttons
            yearButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Fetch milestone data
            const data = LEGACY_Milestones[index];

            // Render slide content
            sliderContainer.innerHTML = `
                <div class="timeline-slide active">
                    <div class="slide-visual">
                        <div class="visual-placeholder heritage-bg">
                            <div class="gopuram-watermark"></div>
                            <span class="big-year">${data.year}</span>
                        </div>
                    </div>
                    <div class="slide-info">
                        <span class="slide-tag">${data.tag}</span>
                        <h3>${data.title}</h3>
                        <p>${data.desc}</p>
                        <div class="slide-milestones">
                            <span>${data.bullet1}</span>
                            <span>${data.bullet2}</span>
                        </div>
                    </div>
                </div>
            `;
        });
    });
}

/* ==========================================
   4. CAMPUS FEED ENGINE
   ========================================== */

function initFeedFilters() {
    const filterButtons = document.querySelectorAll(".feed-tab");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const category = btn.getAttribute("data-category");
            renderCampusFeed(category);
        });
    });
}

function renderCampusFeed(category) {
    const grid = document.getElementById("campusFeedGrid");
    grid.innerHTML = "";

    const filtered = category === "all" 
        ? CAMPUS_FEED_DB 
        : CAMPUS_FEED_DB.filter(f => f.category === category);

    filtered.forEach(feed => {
        // Build modern placeholder background matching the event type
        let cardBg = "rgba(128, 15, 47, 0.4)";
        let iconEmoji = "🎉";
        if (feed.category === "sports") { cardBg = "rgba(251, 133, 0, 0.3)"; iconEmoji = "🏆"; }
        if (feed.category === "workshops") { cardBg = "rgba(0, 95, 115, 0.3)"; iconEmoji = "🔬"; }
        if (feed.category === "innovation") { cardBg = "rgba(10, 147, 150, 0.3)"; iconEmoji = "⚡"; }

        const card = document.createElement("div");
        card.className = "feed-card";
        card.innerHTML = `
            <div class="feed-img-holder" style="background: linear-gradient(135deg, rgba(8,11,17,0.85) 0%, ${cardBg} 100%);">
                <span class="feed-tag-badge">${feed.category}</span>
                <span style="font-size: 4rem;">${iconEmoji}</span>
            </div>
            <div class="feed-body">
                <h4>${feed.title}</h4>
                <p>${feed.desc}</p>
                <div class="feed-meta">
                    <span>📅 ${feed.date}</span>
                    <span class="text-gold">✨ ${feed.metric}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* ==========================================
   5. ACADEMIC COURSE CATALOG ENGINE
   ========================================== */

function initCourseFilters() {
    document.getElementById("courseSearchInput").addEventListener("input", filterCourses);
    document.getElementById("degreeLevelFilter").addEventListener("change", filterCourses);
    document.getElementById("streamFilter").addEventListener("change", filterCourses);
}

function renderCoursesCatalog(filteredData = COURSES_DB) {
    const container = document.getElementById("coursesGridContainer");
    container.innerHTML = "";

    document.getElementById("filteredCoursesCount").innerText = filteredData.length;

    filteredData.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card glass-panel";
        card.innerHTML = `
            <div class="course-card-top">
                <span class="course-level">${course.level} • ${course.stream}</span>
                <h4>${course.name}</h4>
                <p class="course-highlight">✨ ${course.highlights}</p>
            </div>
            <div class="course-card-bottom">
                <span class="course-duration">⏳ ${course.duration}</span>
                <span class="course-outcome-tag">${course.outcome}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterCourses() {
    const query = document.getElementById("courseSearchInput").value.toLowerCase();
    const level = document.getElementById("degreeLevelFilter").value;
    const stream = document.getElementById("streamFilter").value;

    const filtered = COURSES_DB.filter(c => {
        const matchQuery = c.name.toLowerCase().includes(query) || c.highlights.toLowerCase().includes(query) || c.outcome.toLowerCase().includes(query);
        const matchLevel = level === "all" ? true : c.level === level;
        const matchStream = stream === "all" ? true : c.stream === stream;
        return matchQuery && matchLevel && matchStream;
    });

    renderCoursesCatalog(filtered);
}

/* ==========================================
   6. INTERACTIVE TAMIL NADU ALUMNI MAP
   ========================================== */

function renderAlumniMap() {
    const svgMap = document.getElementById("tnGeoMap");

    // Clear existing dynamic nodes (leave lines alone)
    svgMap.querySelectorAll(".map-node").forEach(node => node.remove());

    DISTRICTS_DB.forEach(district => {
        const node = document.createElementNS("http://www.w3.org/2000/svg", "g");
        node.setAttribute("class", `map-node ${district.isHub ? "hub-node" : ""}`);
        node.setAttribute("id", `map-node-${district.id}`);
        
        // Node circle
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", district.x);
        circle.setAttribute("cy", district.y);
        circle.setAttribute("r", district.isHub ? 7.5 : 5.5);
        circle.setAttribute("fill", district.isHub ? "#ffb703" : "#0a9396");
        circle.setAttribute("stroke", district.isHub ? "rgba(255, 183, 3, 0.4)" : "rgba(255, 255, 255, 0.5)");
        
        node.appendChild(circle);

        // Small text label for hubs or key cities
        if (district.isHub || district.id === "chennai" || district.id === "madurai" || district.id === "trichy" || district.id === "tirunelveli") {
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", district.x + 8);
            text.setAttribute("y", district.y + 4);
            text.setAttribute("fill", "#adb5bd");
            text.setAttribute("font-size", "8.5px");
            text.setAttribute("font-weight", "600");
            text.setAttribute("font-family", "Outfit");
            text.textContent = district.name;
            node.appendChild(text);
        }

        // Attach listeners
        node.addEventListener("click", () => selectDistrict(district.id));
        node.addEventListener("mouseenter", () => hoverDistrict(district.id));

        svgMap.appendChild(node);
    });

    // Select Coimbatore by default
    selectDistrict("coimbatore");
}

function selectDistrict(districtId) {
    const svgMap = document.getElementById("tnGeoMap");
    
    // Clear selected class
    svgMap.querySelectorAll(".map-node").forEach(n => n.classList.remove("selected"));

    // Set selected
    const selectedNode = document.getElementById(`map-node-${districtId}`);
    if (selectedNode) {
        selectedNode.classList.add("selected");
    }

    // Populate info card
    const district = DISTRICTS_DB.find(d => d.id === districtId);
    if (district) {
        document.getElementById("info-district-name").innerText = district.name;
        document.getElementById("info-alumni-count").innerText = `${district.count.toLocaleString()}+`;
        document.getElementById("info-scholar-count").innerText = district.scholars;
        document.getElementById("info-top-companies").innerText = district.companies;
        document.getElementById("info-district-quote").innerText = `"${district.quote}"`;
        document.getElementById("info-district-author").innerText = `- ${district.author}`;

        // Badge update
        const badge = document.getElementById("info-district-badge");
        if (district.isHub) {
            badge.innerText = "Main Campus Hub";
            badge.className = "badge badge-gold";
        } else {
            badge.innerText = "Alumni Hub";
            badge.className = "badge badge-cyan";
        }
    }
}

function hoverDistrict(districtId) {
    // Optional: trigger tooltip or dynamic color shifts
}

/* ==========================================
   7. PLACEMENTS PLOT CHART (CHART.JS)
   ========================================== */

function initPlacementCharts(type) {
    const ctx = document.getElementById("placementChartsCanvas").getContext("2d");

    // Destroy existing
    if (placementsChart) {
        placementsChart.destroy();
    }

    let config = {};

    if (type === "salary") {
        config = {
            type: 'bar',
            data: {
                labels: ['2021', '2022', '2023', '2024', '2025 (Projected)'],
                datasets: [
                    {
                        label: 'Highest CTC (LPA)',
                        data: [9.5, 11.2, 12.8, 14.5, 16.0],
                        backgroundColor: '#ffb703',
                        borderColor: '#ffb703',
                        borderWidth: 1,
                        borderRadius: 4
                    },
                    {
                        label: 'Average CTC (LPA)',
                        data: [4.2, 4.8, 5.1, 5.8, 6.2],
                        backgroundColor: '#800f2f',
                        borderColor: '#800f2f',
                        borderWidth: 1,
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#adb5bd', font: { family: 'Inter' } } }
                },
                scales: {
                    x: { ticks: { color: '#adb5bd' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } },
                    y: { ticks: { color: '#adb5bd' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } }
                }
            }
        };
    } else if (type === "industry") {
        config = {
            type: 'doughnut',
            data: {
                labels: ['IT & SaaS Services', 'Banking & Finance', 'Biotech & Pharma', 'Corporate & Advisory', 'Media & Arts'],
                datasets: [{
                    data: [42, 23, 15, 12, 8],
                    backgroundColor: ['#0a9396', '#ffb703', '#800f2f', '#fb8500', '#d946ef'],
                    borderWidth: 2,
                    borderColor: '#080b11'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right', labels: { color: '#adb5bd', font: { family: 'Inter' } } }
                }
            }
        };
    } else if (type === "department") {
        config = {
            type: 'bar',
            data: {
                labels: ['Comp Science', 'Commerce', 'Biotech', 'Business Mgmt', 'Psychology', 'Literature'],
                datasets: [{
                    label: 'Placement Success %',
                    data: [98, 96, 90, 94, 88, 85],
                    backgroundColor: 'rgba(10, 147, 150, 0.75)',
                    borderColor: '#0a9396',
                    borderWidth: 1.5,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { ticks: { color: '#adb5bd' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } },
                    y: { max: 100, ticks: { color: '#adb5bd' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } }
                }
            }
        };
    }

    placementsChart = new Chart(ctx, config);
}

function switchPlacementChart(type) {
    document.querySelectorAll(".chart-toggle-btn").forEach(btn => {
        if (btn.getAttribute("onclick").includes(type)) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    initPlacementCharts(type);
}

/* ==========================================
   8. INTERACTIVE STUDENT PATHWAY & AI PREDICTOR
   ========================================== */

function populateDistrictsDropdown() {
    const dropdown = document.getElementById("student-district");
    if (!dropdown) return;
    dropdown.innerHTML = "";

    // Sort districts alphabetically for user ease
    const sorted = [...DISTRICTS_DB].sort((a,b) => a.name.localeCompare(b.name));
    
    sorted.forEach(d => {
        const option = document.createElement("option");
        option.value = d.id;
        option.textContent = `${d.name} District`;
        dropdown.appendChild(option);
    });
}

function initWizardInterests() {
    const cards = document.querySelectorAll(".interest-checkbox-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const val = card.getAttribute("data-val");
            if (card.classList.contains("selected")) {
                card.classList.remove("selected");
                selectedInterestCards = selectedInterestCards.filter(v => v !== val);
            } else {
                if (selectedInterestCards.length >= 3) {
                    // Limit to 3 choices
                    alert("Please select up to 3 interest areas that excite you most!");
                    return;
                }
                card.classList.add("selected");
                selectedInterestCards.push(val);
            }
        });
    });
}

function wizardNextStep(stepNum) {
    // Hide all steps
    document.querySelectorAll(".wizard-step").forEach(s => s.classList.remove("active"));
    
    // Show selected step
    document.getElementById(`step-${stepNum}`).classList.add("active");

    // Update step progress bar
    document.querySelectorAll(".step-indicator").forEach((ind, index) => {
        if (index < stepNum) {
            ind.classList.add("active");
        } else {
            ind.classList.remove("active");
        }
    });
}

function generatePathway() {
    const districtId = document.getElementById("student-district").value;
    const background = document.getElementById("student-stream").value;
    const ambition = document.getElementById("student-ambition").value;

    const district = DISTRICTS_DB.find(d => d.id === districtId);
    
    // Set custom welcome banner message
    document.getElementById("pathway-welcome-msg").innerHTML = `
        Hey ambitious student from <strong>${district.name} District</strong>! Welcome to your digital guided pathway. 
        PSGCAS has hosted <strong>${district.count.toLocaleString()}+ students</strong> from your region, providing 
        financial aid to <strong>${district.scholars} scholars</strong>. Here is how your upcoming years in Coimbatore will look:
    `;

    // Filter courses matching the background and interests
    let recCourses = [];
    if (background.includes("science")) {
        recCourses = COURSES_DB.filter(c => c.stream === "science" || c.id === "bca");
    } else if (background.includes("commerce")) {
        recCourses = COURSES_DB.filter(c => c.stream === "commerce" || c.stream === "management");
    } else {
        recCourses = COURSES_DB.filter(c => c.stream === "arts" || c.id === "bsc-psychology");
    }

    // Narrow down to top 3 recommendations
    recCourses = recCourses.slice(0, 3);

    // Build recommended programs HTML
    const coursesList = document.getElementById("rec-programs-list");
    coursesList.innerHTML = "";
    recCourses.forEach(c => {
        coursesList.innerHTML += `
            <div class="rec-item">
                <h5>${c.name}</h5>
                <p>⏳ ${c.duration} | Fees: ~₹${c.fee.toLocaleString()}/yr</p>
                <div class="rec-item-meta">
                    <span>Target Outcome: ${c.outcome}</span>
                </div>
            </div>
        `;
    });

    // Map clubs recommendation based on selected interests
    const clubsList = document.getElementById("rec-clubs-list");
    clubsList.innerHTML = "";

    const clubMapping = {
        coding: { icon: "💻", name: "CAS Cyber Tech Club" },
        business: { icon: "📈", name: "Entrepreneurship Development Forum" },
        science: { icon: "🔬", name: "Sir C.V. Raman Science Forum" },
        writing: { icon: "✍️", name: "Tamil Mandram & Debate Club" },
        social: { icon: "🌱", name: "Rotaract & ECO Club" },
        art: { icon: "🎨", name: "Fine Arts & Dramatics Club" }
    };

    if (selectedInterestCards.length === 0) {
        // Default clubs
        selectedInterestCards = ["writing", "social"];
    }

    selectedInterestCards.forEach(interest => {
        const club = clubMapping[interest];
        if (club) {
            clubsList.innerHTML += `
                <div class="rec-club-badge">
                    <span class="icon">${club.icon}</span>
                    <span class="title">${club.name}</span>
                </div>
            `;
        }
    });

    // AI Career forecast mappings
    const aiPredictorResults = document.getElementById("ai-prediction-results");
    aiPredictorResults.innerHTML = "";

    let careerPredictions = [];
    if (ambition === "corporate") {
        careerPredictions = [
            { sector: "FinTech & SaaS", role: "Full-Stack Software Engineers", growth: "32% growth in Coimbatore tech corridor" },
            { sector: "Advisory & Corporate Finance", role: "Financial risk officers / Investment Analyst", growth: "High demand across Chennai commercial hubs" }
        ];
    } else if (ambition === "entrepreneur") {
        careerPredictions = [
            { sector: "Agri-Tech & E-commerce", role: "Venture Builder / Operations head", growth: "PSG Incubator provides ₹5L direct seed funding" },
            { sector: "Apparel Export & Logistics", role: "Supply Chain Director", growth: "Coimbatore-Tiruppur textile corridor exports" }
        ];
    } else if (ambition === "civil") {
        careerPredictions = [
            { sector: "Public Policy & Administration", role: "UPSC IAS/IPS officers, TNPSC State leaders", growth: "PSG IAS Academy provides free study material and coaching" },
            { sector: "Social Development NGOs", role: "Policy Advisor / Social Program Manager", growth: "Direct campus linkages with Central projects" }
        ];
    } else if (ambition === "academia") {
        careerPredictions = [
            { sector: "Bio-Sciences & Research Labs", role: "Microbiology Scholar / Research Scientist", growth: "Ph.D. funding options with CSIR fellowships" },
            { sector: "R&D Industrial Development", role: "Analytical Chemist / Clinical trials evaluator", growth: "PSG collaborates directly with national research labs" }
        ];
    } else {
        // Creative
        careerPredictions = [
            { sector: "Digital Media & Copywriting", role: "PR Executive / Creative Writer", growth: "Fastest growing sector in Indian startup space" },
            { sector: "Creative Production & Design", role: "UX Designer / Media Producer", growth: "Massive demand in SaaS product design" }
        ];
    }

    careerPredictions.forEach(pred => {
        aiPredictorResults.innerHTML += `
            <div class="ai-outcome-box">
                <div class="ai-outcome-item">
                    <h5>${pred.role}</h5>
                    <p>🎯 Sector: ${pred.sector} | <strong>Forecast: ${pred.growth}</strong></p>
                </div>
            </div>
        `;
    });

    // Reveal results panel
    document.getElementById("pathwayResults").style.display = "block";
    scrollToElement("pathwayResults");
}

/* ==========================================
   9. INFRASTRUCTURE 360 EXPLORER ENGINE
   ========================================== */

function loadTourScene(sceneId) {
    // Button states
    document.querySelectorAll(".tour-nav-btn").forEach(btn => {
        if (btn.getAttribute("onclick").includes(sceneId)) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    const scene = TOUR_DB[sceneId];
    const canvas = document.getElementById("panoramaCanvas");
    
    // Set simulated panorama gradients/imagery background
    canvas.style.backgroundImage = scene.bgGradient;

    // Clear existing hotspots
    canvas.querySelectorAll(".tour-hotspot").forEach(h => h.remove());

    // Add new hotspots
    scene.hotspots.forEach((hs, idx) => {
        const hsEl = document.createElement("div");
        hsEl.className = "tour-hotspot";
        hsEl.style.left = `${hs.x}%`;
        hsEl.style.top = `${hs.y}%`;

        // Click handler to open overlay
        hsEl.addEventListener("click", () => {
            const overlay = document.getElementById("hotspotOverlay");
            document.getElementById("hotspot-title").innerText = hs.title;
            document.getElementById("hotspot-desc").innerText = hs.desc;
            overlay.style.display = "block";
        });

        canvas.appendChild(hsEl);
    });

    // Close overlay initially
    closeHotspotOverlay();
}

function closeHotspotOverlay() {
    document.getElementById("hotspotOverlay").style.display = "none";
}

function renderReviews() {
    const container = document.getElementById("reviewsContainer");
    container.innerHTML = "";

    REVIEWS_DB.forEach(rev => {
        const div = document.createElement("div");
        div.className = "review-item";
        div.innerHTML = `
            <div class="review-item-header">
                <span class="author">${rev.author}</span>
                <span class="score">⭐ ${rev.score}/5</span>
            </div>
            <p>${rev.text}</p>
        `;
        container.appendChild(div);
    });
}

/* ==========================================
   10. SCHOLARSHIP CALCULATOR ENGINE
   ========================================== */

function calculateScholarship() {
    const marks = parseFloat(document.getElementById("calc-marks").value);
    const sports = document.getElementById("calc-sports").value;
    const firstgen = document.getElementById("calc-firstgen").value;
    const income = document.getElementById("calc-income").value;

    if (isNaN(marks) || marks < 50 || marks > 100) {
        alert("Please enter a valid percentage score between 50 and 100!");
        return;
    }

    // Default base fee benchmark
    const baseFee = 45000;
    let totalAid = 0;
    let details = [];

    // Merit AID
    if (marks >= 95) {
        let meritCut = baseFee * 0.5; // 50% cut
        totalAid += meritCut;
        details.push({ name: "PSG Merit Scholarship (95%+ Board Score)", val: meritCut });
    } else if (marks >= 90) {
        let meritCut = baseFee * 0.25; // 25% cut
        totalAid += meritCut;
        details.push({ name: "PSG Merit Scholarship (90%+ Board Score)", val: meritCut });
    }

    // Sports AID
    if (sports === "national") {
        let sportsCut = baseFee * 0.6; // 60% cut
        totalAid += sportsCut;
        details.push({ name: "PSG Sports Excellence Scholarship (National Rank)", val: sportsCut });
    } else if (sports === "state") {
        let sportsCut = baseFee * 0.3; // 30% cut
        totalAid += sportsCut;
        details.push({ name: "PSG Sports Excellence Scholarship (State Rank)", val: sportsCut });
    }

    // First Graduate Subsidy
    if (firstgen === "yes") {
        let fgSubsidy = 15000;
        totalAid += fgSubsidy;
        details.push({ name: "TN State First Graduate Tuition Concession", val: fgSubsidy });
    }

    // Income-Based Economic AID
    if (income === "below-2l") {
        let ecoGrant = 10000;
        totalAid += ecoGrant;
        details.push({ name: "PSG Trust Economic Welfare Grant", val: ecoGrant });
    }

    // Cap total aid to base tuition
    if (totalAid > baseFee) {
        totalAid = baseFee;
    }

    const netFee = baseFee - totalAid;

    // Render results
    document.getElementById("calcResultsBlank").style.display = "none";
    document.getElementById("calcResultsPanel").style.display = "block";

    document.getElementById("gross-tuition").innerText = `₹${baseFee.toLocaleString()}`;
    document.getElementById("total-aid").innerText = `₹${totalAid.toLocaleString()}`;
    document.getElementById("net-fee").innerText = `₹${netFee.toLocaleString()}`;

    // Fill list details
    const list = document.getElementById("scholarshipBreakdownList");
    list.innerHTML = "";

    if (details.length === 0) {
        list.innerHTML = "<li><span>No direct scholarship matched. Government post-matric support may apply.</span></li>";
    } else {
        details.forEach(item => {
            list.innerHTML += `
                <li>
                    <span>${item.name}</span>
                    <span class="aid-val">- ₹${item.val.toLocaleString()}</span>
                </li>
            `;
        });
    }

    // Update Comparison Bar width and tags
    const barFill = document.getElementById("psgcas-bar-fill");
    const barVal = document.getElementById("psgcas-bar-val");

    // Map net fee relative width (base max is deemed university fee 2,50,000 = 100%)
    let pct = (netFee / 250000) * 100;
    if (pct < 8) pct = 8; // min visible bar
    
    barFill.style.width = `${pct}%`;
    barVal.innerText = `₹${netFee.toLocaleString()}`;
}
