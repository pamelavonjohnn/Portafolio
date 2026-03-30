// Menú Hamburguesa para móviles (a prueba de fallos)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Cerrar menú al clickear enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}));

// Animaciones al hacer scroll
const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('h3, #sobre-mi p, .timeline-item, .skill-card, .lang-item, .academic-item, .other-exp-card, .contact-form form, .detail-section').forEach(el => {
    fadeInObserver.observe(el);
});

// Animación de barras de idiomas
const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.lang-bar-fill');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const languagesSection = document.querySelector('.languages');
if (languagesSection) {
    skillObserver.observe(languagesSection);
}

// Efecto del Navbar al hacer Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.nav-logo');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(217, 224, 229, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            if (logo) logo.style.display = 'block';
        } else {
            navbar.style.background = 'var(--bg-header)';
            navbar.style.boxShadow = 'none';
            if (window.innerWidth > 768 && logo) logo.style.display = 'none';
        }
    }
});

// --- SISTEMA MULTI-IDIOMA (ES / DE / EN) ---
const translations = {
    es: {
        "nav_about": "Sobre Mí",
        "nav_exp": "Experiencia",
        "nav_skills": "Habilidades",
        "nav_edu": "Formación",
        "nav_other": "Otras Experiencias",
        "nav_contact": "Contacto",
        "header_subtitle": "ESTUDIANTE DE INGENIERÍA CIVIL INDUSTRIAL",
        "about_title": "Sobre Mí",
        "about_text": "Estudiante de último año de Ingeniería Civil Industrial en la Universidad de La Frontera, comprometida y responsable. Mi formación académica y experiencia práctica me han permitido trabajar con múltiples herramientas, lo que me confiere una gran versatilidad para abordar diversas problemáticas y encontrar las mejores soluciones. Disfruto trabajar en diferentes áreas con equipos multidisciplinarios, donde mis habilidades de comunicación y dominio de idiomas me permiten desenvolverme en múltiples escenarios. Estoy siempre abierta a aprender cosas nuevas, afrontar desafíos y valoro profundamente recibir retroalimentación para mejorar continuamente mi trabajo.",
        "btn_cv": "Descargar CV en PDF",
        "exp_title": "Experiencia Laboral",
        "date_actual_2025": "2025 - Actualidad",
        
        "exp_role1": "Ayudante Gestión de operaciones",
        "exp_desc1": "Guía de sección práctica de curso utilizando software RobotStudio.",
        "exp_role2": "Ayudante de Logística y cadenas de suministro",
        "exp_desc2": "Revisión de Talleres y desarrollo de material complementario.",
        "exp_role3": "Práctica de Estudios",
        "exp_desc3": "Asesoría técnica, estructuración de costos y desarrollo de estrategias comerciales para el crecimiento de MYPES.",
        "exp_role4": "Ayudante Introducción al análisis de datos",
        "exp_desc4": "Preparación de material y apoyo durante clases.",
        "exp_role5": "Gestión y Mantenimiento",
        "exp_desc5": "Gestión de inventario, mantenimiento técnico en sucursales y atención a público.",
        "exp_role6": "Práctica de Estudios",
        "exp_desc6": "Descripción de perfiles de cargo y uso avanzado de Excel.",
        "exp_role7": "Práctica Internacional",
        "exp_desc7": "Práctica como asistente de médico pediatra en Alemania (A través del Colegio Alemán de Temuco).",

        "skills_title": "Habilidades Técnicas y Herramientas",
        "skill1": "Análisis de Datos",
        "skill2": "RobotStudio",
        "skill3": "Gestión de Inventario y Logística",
        "skill4": "Microsoft Excel Avanzado",
        "skill5": "Estrategias Comerciales y Costos",
        "skill6": "Atención a Público y Comunicación",

        "lang_title": "Idiomas",
        "lang_es": "Español",
        "lang_de": "Alemán",
        "lang_en": "Inglés",
        "lang_level_native": "Nativo",
        "lang_level_med": "Intermedio",
        
        "edu_title": "Formación Académica",
        "edu_degree1": "Ingeniería Civil Industrial",
        "edu_minor": "Minor en Análisis de Datos",
        "edu_degree2": "Licenciado en Ciencias de la Ingeniería",
        "edu_degree3": "Bachillerato de Ciencias y Humanidades",
        "edu_highschool": "Enseñanza Media y Básica",
        "status_current_2021": "(2021 - Actualidad)",
        "status_current_2025": "(2025 - Actualidad)",
        "btn_cert": "Ver Certificado",
        
        "other_title": "Formación Complementaria y Congresos",
        "other_desc1": "Presentación y Taller en el Congreso de Ingeniería Transdisciplinaria e Innovación Consciente (Universidad de La Frontera).",
        "other_desc2": "Participación en Workshop de Calidad 360 (Universidad de La Frontera).",
        "other_desc3": "14ª Escuela de Invierno en Sistemas de Ingeniería (Universidad de Chile).",
        "other_desc4": "Asistencia al Congreso de Ingeniería Global y Taller 'Optimizando rutas de despacho para vehículos de reparto'.",
        "other_desc5": "Programa del Diploma del Bachillerato Internacional (2017-2019) y Proyecto CAS (2018) en el Colegio Alemán de Temuco.",
        
        "contact_title": "Contacto",
        "contact_name_ph": "Tu nombre",
        "contact_email_ph": "Tu email",
        "contact_msg_ph": "Tu mensaje",
        "contact_btn": "Enviar Mensaje",
        "footer_rights": "Todos los derechos reservados.",
        "btn_more_info": "Más información",
        "msg_success": "¡Mensaje enviado con éxito!",
        "msg_error": "Hubo un problema. Intenta de nuevo.",
        "nav_back": "Volver al Portafolio"
    },
    de: {
        "nav_about": "Über mich",
        "nav_exp": "Erfahrung",
        "nav_skills": "Fähigkeiten",
        "nav_edu": "Ausbildung",
        "nav_other": "Weitere Erfahrungen",
        "nav_contact": "Kontakt",
        "header_subtitle": "STUDENTIN DES WIRTSCHAFTSINGENIEURWESENS",
        "about_title": "Über mich",
        "about_text": "Studentin im letzten Jahr des Wirtschaftsingenieurwesens an der Universidad de La Frontera, engagiert und verantwortungsbewusst. Meine akademische Ausbildung und praktische Erfahrung haben es mir ermöglicht, mit verschiedenen Werkzeugen zu arbeiten, was mir eine große Vielseitigkeit bei der Lösung diverser Probleme verleiht. Ich arbeite gerne in multidisziplinären Teams, wo meine Kommunikations- und Sprachkenntnisse es mir ermöglichen, mich in verschiedenen Szenarien zu beweisen. Ich bin immer offen dafür, Neues zu lernen, mich neuen Herausforderungen zu stellen und schätze konstruktives Feedback zur kontinuierlichen Verbesserung.",
        "btn_cv": "Lebenslauf als PDF herunterladen",
        "exp_title": "Berufserfahrung",
        "date_actual_2025": "2025 - Heute",
        
        "exp_role1": "Tutorin für Operations Management",
        "exp_desc1": "Leitung praktischer Übungen unter Verwendung der RobotStudio-Software.",
        "exp_role2": "Tutorin für Logistik und Supply Chain",
        "exp_desc2": "Überprüfung von Workshops und Entwicklung von ergänzendem Lehrmaterial.",
        "exp_role3": "Praktikum",
        "exp_desc3": "Technische Beratung, Kostenstrukturierung und Entwicklung kommerzieller Strategien für das Wachstum von Kleinunternehmen (MYPES).",
        "exp_role4": "Tutorin für Einführung in die Datenanalyse",
        "exp_desc4": "Vorbereitung von Lehrmaterialien und Unterstützung während des Unterrichts.",
        "exp_role5": "Verwaltung und Instandhaltung",
        "exp_desc5": "Bestandsverwaltung, technische Instandhaltung in Filialen und Kundenservice.",
        "exp_role6": "Praktikum",
        "exp_desc6": "Beschreibung von Stellenprofilen und fortgeschrittene Nutzung von Excel.",
        "exp_role7": "Internationales Praktikum",
        "exp_desc7": "Praktikum als Assistenz in einer Kinderarztpraxis in Deutschland (Praxis Dr. Kiehne und Dr. Eberhard).",

        "skills_title": "Technische Fähigkeiten und Werkzeuge",
        "skill1": "Datenanalyse",
        "skill2": "RobotStudio",
        "skill3": "Bestandsmanagement und Logistik",
        "skill4": "Fortgeschrittenes Microsoft Excel",
        "skill5": "Handelsstrategien und Kosten",
        "skill6": "Kundenservice und Kommunikation",

        "lang_title": "Sprachen",
        "lang_es": "Spanisch",
        "lang_de": "Deutsch",
        "lang_en": "Englisch",
        "lang_level_native": "Muttersprache",
        "lang_level_med": "Mittelstufe",
        
        "edu_title": "Ausbildung",
        "edu_degree1": "Wirtschaftsingenieurwesen",
        "edu_minor": "Minor in Datenanalyse",
        "edu_degree2": "Bachelor of Science in den Ingenieurwissenschaften",
        "edu_degree3": "Abitur in Natur- und Geisteswissenschaften",
        "edu_highschool": "Grund- und weiterführende Schule",
        "status_current_2021": "(2021 - Heute)",
        "status_current_2025": "(2025 - Heute)",
        "btn_cert": "Zertifikat ansehen",
        
        "other_title": "Zusatzausbildung und Kongresse",
        "other_desc1": "Präsentation und Workshop beim Kongress für transdisziplinäre Ingenieurwissenschaften (CITIC).",
        "other_desc2": "Teilnahme am Qualität 360 Workshop.",
        "other_desc3": "14. Winterschule für Ingenieursysteme (Universidad de Chile).",
        "other_desc4": "Teilnahme am Global Engineering Congress (CIG) und Workshop zur Optimierung von Lieferrouten.",
        "other_desc5": "International Baccalaureate (IB) Diplomprogramm und CAS-Projekt am Colegio Alemán de Temuco.",
        
        "contact_title": "Kontakt",
        "contact_name_ph": "Ihr Name",
        "contact_email_ph": "Ihre E-Mail",
        "contact_msg_ph": "Ihre Nachricht",
        "contact_btn": "Nachricht senden",
        "footer_rights": "Alle Rechte vorbehalten.",
        "btn_more_info": "Weitere Informationen",
        "msg_success": "Nachricht erfolgreich gesendet!",
        "msg_error": "Es gab ein Problem. Bitte versuchen Sie es erneut.",
        "nav_back": "Zurück zum Portfolio"
    },
    en: {
        "nav_about": "About Me",
        "nav_exp": "Experience",
        "nav_skills": "Skills",
        "nav_edu": "Education",
        "nav_other": "Other Experiences",
        "nav_contact": "Contact",
        "header_subtitle": "INDUSTRIAL CIVIL ENGINEERING STUDENT",
        "about_title": "About Me",
        "about_text": "Final-year Industrial Civil Engineering student at the Universidad de La Frontera, committed and responsible. My academic background and practical experience have allowed me to work with multiple tools, giving me great versatility to tackle diverse problems and find the best solutions. I enjoy working in multidisciplinary teams, where my communication and language skills allow me to perform well in multiple scenarios. I am always open to learning new things, facing challenges, and I deeply value receiving feedback to continuously improve my work.",
        "btn_cv": "Download CV in PDF",
        "exp_title": "Work Experience",
        "date_actual_2025": "2025 - Present",
        
        "exp_role1": "Teaching Assistant: Operations Management",
        "exp_desc1": "Guided practical course sections using RobotStudio software.",
        "exp_role2": "Teaching Assistant: Logistics and Supply Chain",
        "exp_desc2": "Reviewed workshops and developed supplementary materials.",
        "exp_role3": "Internship",
        "exp_desc3": "Technical consulting, cost structuring, and development of commercial strategies for small business growth.",
        "exp_role4": "Teaching Assistant: Introduction to Data Analysis",
        "exp_desc4": "Preparation of materials and support during classes.",
        "exp_role5": "Management and Maintenance",
        "exp_desc5": "Inventory management, technical maintenance in branches, and customer service.",
        "exp_role6": "Internship",
        "exp_desc6": "Description of job profiles and advanced use of Excel.",
        "exp_role7": "International Internship",
        "exp_desc7": "Internship as a pediatrician assistant in Germany (Praxis Dr. Kiehne und Dr. Eberhard).",

        "skills_title": "Technical Skills and Tools",
        "skill1": "Data Analysis",
        "skill2": "RobotStudio",
        "skill3": "Inventory Management and Logistics",
        "skill4": "Advanced Microsoft Excel",
        "skill5": "Commercial Strategies and Costs",
        "skill6": "Customer Service and Communication",

        "lang_title": "Languages",
        "lang_es": "Spanish",
        "lang_de": "German",
        "lang_en": "English",
        "lang_level_native": "Native",
        "lang_level_med": "Intermediate",
        
        "edu_title": "Academic Background",
        "edu_degree1": "Industrial Civil Engineering",
        "edu_minor": "Minor in Data Analysis",
        "edu_degree2": "Bachelor of Science in Engineering",
        "edu_degree3": "High School Baccalaureate in Sciences and Humanities",
        "edu_highschool": "Primary and High School Education",
        "status_current_2021": "(2021 - Present)",
        "status_current_2025": "(2025 - Present)",
        "btn_cert": "View Certificate",
        
        "other_title": "Complementary Education & Congresses",
        "other_desc1": "Presentation and Workshop at the Congress of Transdisciplinary Engineering and Conscious Innovation (CITIC).",
        "other_desc2": "Participation in the Quality 360 Workshop.",
        "other_desc3": "14th Winter School in Engineering Systems (Universidad de Chile).",
        "other_desc4": "Attendance at the Global Engineering Congress (CIG) and Dispatch Route Optimization Workshop.",
        "other_desc5": "International Baccalaureate (IB) Diploma Program and CAS Project at Colegio Alemán de Temuco.",
        
        "contact_title": "Contact",
        "contact_name_ph": "Your name",
        "contact_email_ph": "Your email",
        "contact_msg_ph": "Your message",
        "contact_btn": "Send Message",
        "footer_rights": "All rights reserved.",
        "btn_more_info": "More information",
        "msg_success": "Message sent successfully!",
        "msg_error": "There was a problem. Please try again.",
        "nav_back": "Back to Portfolio"
    }
};

// Formulario de Contacto Funcional con Formspree
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        const data = new FormData(contactForm);
        const currentLang = localStorage.getItem('preferredLanguage') || 'es';
        
        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                formStatus.setAttribute('data-key', 'msg_success');
                formStatus.textContent = translations[currentLang]['msg_success'];
                formStatus.style.display = "block";
                contactForm.reset();
            } else {
                formStatus.setAttribute('data-key', 'msg_error');
                formStatus.textContent = translations[currentLang]['msg_error'];
                formStatus.style.display = "block";
            }
        } catch (error) {
            formStatus.setAttribute('data-key', 'msg_error');
            formStatus.textContent = translations[currentLang]['msg_error'];
            formStatus.style.display = "block";
        }
    });
}

// Año actual dinámico en el footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Archivos de CV correspondientes a cada idioma (Asegúrate de tener estos archivos o ajustar los nombres)
const cvFiles = {
    es: "CV_PamelaVonJohnn_2026_ES.pdf",
    de: "CV_PamelaVonJohnn_2026_DE.pdf",
    en: "CV_PamelaVonJohnn_2026_EN.pdf"
};

function changeLanguage(lang) {
    // Cambiar los textos normales
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if(element.children.length === 0) {
                element.textContent = translations[lang][key];
            } else {
                 element.innerHTML = element.innerHTML.replace(element.textContent.trim(), translations[lang][key]);
            }
        }
    });

    // Cambiar los placeholders del formulario
    const placeholders = document.querySelectorAll('[data-placeholder-key]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-placeholder-key');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Cambiar el archivo del CV a descargar
    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
        cvLink.href = cvFiles[lang];
    }

    // Actualizar la clase "active" en los botones
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const currentBtn = document.getElementById('btn-' + lang);
    if(currentBtn) {
        currentBtn.classList.add('active');
    }

    // Guardar preferencia en el navegador
    localStorage.setItem('preferredLanguage', lang);
}

// Inicializar idioma al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(savedLang);
});
