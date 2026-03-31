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
            // NUEVO COLOR: Durazno transparente para el scroll
            navbar.style.background = 'rgba(248, 229, 221, 0.98)'; 
            navbar.style.boxShadow = '0 2px 10px rgba(53, 92, 125, 0.1)';
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
        "btn_cert": "Ver Certificado",
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
        "nav_back": "Volver al Portafolio",
        // --- (EN ESPAÑOL) TEXTOS PARA PÁGINAS DE DETALLE ---
        "nav_back": "Volver al Portafolio",
        "gallery_title": "Galería de Proyectos",
        "pame_op_title": "Ayudantía: Gestión de Operaciones",
        "pame_op_subtitle": "Guía de sección práctica con RobotStudio",
        "pame_op_detail": "Lideré las sesiones prácticas del curso, enseñando a los estudiantes el uso del software de simulación RobotStudio para el diseño y programación de celdas robóticas industriales.",
        "pame_log_title": "Ayudantía: Logística y Cadenas de Suministro",
        "pame_log_subtitle": "Revisión de talleres y material complementario",
        "pame_log_detail": "Encargada de la revisión de talleres prácticos y del desarrollo de material de apoyo para facilitar el aprendizaje de los conceptos clave en la gestión de la cadena de suministro.",
        "pame_sinergia_title": "Práctica de Estudios: Sinergia SPA",
        "pame_sinergia_subtitle": "Asesoría técnica y estrategias comerciales",
        "pame_sinergia_detail": "Brindé asesoría técnica enfocada en la estructuración de costos y participé en el desarrollo de estrategias comerciales diseñadas específicamente para impulsar el crecimiento de MYPES.",
        "pame_datos_title": "Ayudantía: Introducción al Análisis de Datos",
        "pame_datos_subtitle": "Preparación de material y apoyo docente",
        "pame_datos_detail": "Desarrollé material didáctico y brindé apoyo directo durante las clases, ayudando a los alumnos a dar sus primeros pasos en el análisis de datos y la estadística.",
        "pame_bruma_title": "Experiencia: Bruma Limitada",
        "pame_bruma_subtitle": "Gestión de inventario y mantenimiento",
        "pame_bruma_detail": "Responsable de la gestión integral del inventario, realización de mantenimiento técnico en diversas sucursales y atención directa al público, asegurando la calidad del servicio.",
        "pame_tokosova_title": "Práctica de Estudios: CZ Tokosova",
        "pame_tokosova_subtitle": "Perfiles de cargo y análisis en Excel",
        "pame_tokosova_detail": "Realicé la descripción y levantamiento de perfiles de cargo de la empresa. Además, utilicé Microsoft Excel a nivel avanzado para la gestión y análisis de información interna.",
        "pame_alemania_title": "Práctica Internacional: Alemania",
        "pame_alemania_subtitle": "Asistente en Praxis Dr. Kiehne und Dr. Eberhard",
        "pame_alemania_detail": "Realicé una práctica internacional asistiendo en una clínica pediátrica en Alemania, lo que me permitió perfeccionar mi dominio del idioma alemán y ganar experiencia intercultural invaluable."
        // -----------------------------------------------------
    },
    de: {
        "nav_about": "Über mich",
        "btn_cert": "Zertifikat ansehen",
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
        "nav_back": "Zurück zum Portfolio",
        // --- (EN ALEMÁN) TEXTOS PARA PÁGINAS DE DETALLE ---
        // (Añade esto dentro del bloque "de: { ... }")
        "nav_back": "Zurück zum Portfolio",
        "gallery_title": "Projektgalerie",
        "pame_op_title": "Tutorium: Operations Management",
        "pame_op_subtitle": "Praktische Anleitung mit RobotStudio",
        "pame_op_detail": "Leitung der praktischen Sitzungen des Kurses, in denen den Studierenden die Nutzung der Simulationssoftware RobotStudio für das Design und die Programmierung industrieller Roboterzellen vermittelt wurde.",
        "pame_log_title": "Tutorium: Logistik und Supply Chain",
        "pame_log_subtitle": "Überprüfung von Workshops und Zusatzmaterial",
        "pame_log_detail": "Verantwortlich für die Überprüfung praktischer Workshops und die Entwicklung von Unterstützungsmaterial, um das Erlernen von Schlüsselkonzepten im Supply Chain Management zu erleichtern.",
        "pame_sinergia_title": "Praktikum: Sinergia SPA",
        "pame_sinergia_subtitle": "Technische Beratung und kommerzielle Strategien",
        "pame_sinergia_detail": "Ich bot technische Beratung mit Schwerpunkt auf Kostenstrukturierung und beteiligte mich an der Entwicklung kommerzieller Strategien, die speziell zur Förderung des Wachstums von Kleinunternehmen (MYPES) entwickelt wurden.",
        "pame_datos_title": "Tutorium: Einführung in die Datenanalyse",
        "pame_datos_subtitle": "Vorbereitung von Material und Lehrunterstützung",
        "pame_datos_detail": "Ich entwickelte Lehrmaterial und leistete direkte Unterstützung während des Unterrichts, um den Studierenden bei ihren ersten Schritten in der Datenanalyse und Statistik zu helfen.",
        "pame_bruma_title": "Erfahrung: Bruma Limitada",
        "pame_bruma_subtitle": "Bestandsmanagement und Instandhaltung",
        "pame_bruma_detail": "Verantwortlich für die ganzheitliche Bestandsverwaltung, die Durchführung technischer Wartungsarbeiten in verschiedenen Filialen und den direkten Kundenservice zur Sicherstellung der Servicequalität.",
        "pame_tokosova_title": "Praktikum: CZ Tokosova",
        "pame_tokosova_subtitle": "Stellenprofile und Excel-Analyse",
        "pame_tokosova_detail": "Ich erstellte die Beschreibung und Erhebung von Stellenprofilen des Unternehmens. Darüber hinaus nutzte ich Microsoft Excel auf fortgeschrittenem Niveau für das Management und die Analyse interner Informationen.",
        "pame_alemania_title": "Internationales Praktikum: Deutschland",
        "pame_alemania_subtitle": "Assistenz in der Praxis Dr. Kiehne und Dr. Eberhard",
        "pame_alemania_detail": "Ich absolvierte ein internationales Praktikum als Assistenz in einer Kinderarztpraxis in Deutschland, was mir ermöglichte, meine Deutschkenntnisse zu perfektionieren und unschätzbare interkulturelle Erfahrungen zu sammeln."
        // -----------------------------------------------------
    },
    en: {
        "nav_about": "About Me",
        "btn_cert": "View Certificate",
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
        "nav_back": "Back to Portfolio",
        // --- (EN INGLÉS) TEXTOS PARA PÁGINAS DE DETALLE ---
        // (Añade esto dentro del bloque "en: { ... }")
        "nav_back": "Back to Portfolio",
        "gallery_title": "Project Gallery",
        "pame_op_title": "Teaching Assistant: Operations Management",
        "pame_op_subtitle": "Practical guidance with RobotStudio",
        "pame_op_detail": "Led the practical sessions of the course, teaching students the use of RobotStudio simulation software for the design and programming of industrial robotic cells.",
        "pame_log_title": "Teaching Assistant: Logistics and Supply Chain",
        "pame_log_subtitle": "Workshop review and supplementary material",
        "pame_log_detail": "Responsible for reviewing practical workshops and developing support material to facilitate the learning of key concepts in supply chain management.",
        "pame_sinergia_title": "Internship: Sinergia SPA",
        "pame_sinergia_subtitle": "Technical consulting and commercial strategies",
        "pame_sinergia_detail": "Provided technical consulting focused on cost structuring and participated in the development of commercial strategies specifically designed to drive the growth of small businesses (MYPES).",
        "pame_datos_title": "Teaching Assistant: Introduction to Data Analysis",
        "pame_datos_subtitle": "Material preparation and teaching support",
        "pame_datos_detail": "Developed teaching materials and provided direct support during classes, helping students take their first steps in data analysis and statistics.",
        "pame_bruma_title": "Experience: Bruma Limitada",
        "pame_bruma_subtitle": "Inventory management and maintenance",
        "pame_bruma_detail": "Responsible for comprehensive inventory management, technical maintenance across various branches, and direct customer service, ensuring service quality.",
        "pame_tokosova_title": "Internship: CZ Tokosova",
        "pame_tokosova_subtitle": "Job profiles and Excel analysis",
        "pame_tokosova_detail": "Carried out the description and profiling of company job roles. Additionally, used advanced Microsoft Excel for internal information management and analysis.",
        "pame_alemania_title": "International Internship: Germany",
        "pame_alemania_subtitle": "Assistant at Praxis Dr. Kiehne und Dr. Eberhard",
        "pame_alemania_detail": "Completed an international internship assisting in a pediatric clinic in Germany, allowing me to perfect my German language skills and gain invaluable intercultural experience."
        // -----------------------------------------------------
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
