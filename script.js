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

// Animaciones al hacer scroll (Aparecer suavemente)
const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.1 });

// Seleccionar elementos para animar
document.querySelectorAll('h3, #sobre-mi p, .timeline-item, .skill-card, .lang-item, .academic-item, .other-exp-card, .contact-form form, .detail-section').forEach(el => {
    fadeInObserver.observe(el);
});

// Animación específica para las barras de idiomas
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
        "about_text": "Ingeniero Civil Industrial, con un fuerte enfoque en la optimización de procesos y el análisis de datos. Busco aplicar metodologías ágiles y soluciones tecnológicas para resolver problemas organizacionales complejos. Cuento con capacidad para trabajar en equipos multidisciplinarios y adaptarme a distintos entornos, con el objetivo actual de proyectar mi carrera a nivel internacional y aplicar mis conocimientos profesionales.",
        "btn_cv": "Descargar CV en PDF",
        "exp_title": "Experiencia Laboral",
        "date_actual": "Agosto 2024 - Actual",
        "date_actual_2025": "2025 - Actual",
        "exp_role1": "Ayudante de Investigación y Operaciones",
        "exp_desc1": "Desarrollo de Talleres y realización de clases practicas",
        "exp_role2": "Ayudante de Termodinámica",
        "exp_desc2": "Desarrollo de material complementario",
        "exp_role3": "Práctica de estudios",
        "exp_desc3_1": "Implementación de un banco de pruebas.",
        "exp_desc3_2": "Desarrollo de laboratorio de electrónica.",
        "exp_role4": "Práctica de estudios",
        "exp_desc4": "Desarrollo de un banco de pruebas.",
        "exp_role5": "Práctica de estudios",
        "exp_desc5": "Programación PLC de sistema semi-automático de llenado de gases.",
        
        "exp_role6": "Ayudante de Logística y Cadena de Suministros",
        "exp_desc6": "Desarrollo de Talleres y realización de clases prácticas",
        "exp_role7": "Ayudante de Formulación y Evaluación de Proyectos",
        "exp_desc7": "Desarrollo de Talleres y realización de clases prácticas",

        "skills_title": "Habilidades Técnicas y Herramientas",
        "skill1": "Mejora Continua (Lean Six Sigma)",
        "skill2": "Análisis de Datos",
        "skill3": "Automatización y PLC",
        "skill4": "Programación (Java, Python)",
        "skill5": "Diseño 3D (Catia v5, SolidWorks)",
        "skill6": "Comunicación Visual (Adobe Photoshop)",
        
        "skill7": "Simulación (AnyLogic, Arena)",
        "skill8": "Gemelos Digitales (Digital Twins)",

        "lang_title": "Idiomas",
        "lang_es": "Español",
        "lang_de": "Alemán",
        "lang_en": "Inglés",
        "lang_level_native": "Nivel Nativo",
        "lang_level_high": "Nivel Alto",
        "lang_level_med": "Nivel Medio",
        
        "edu_title": "Datos Académicos",
        "edu_degree": "Licenciatura en Ciencias de la Ingeniería",
        "edu_minor": "Minor en Análisis de Datos", // NUEVA CLAVE
        "status_current": "(En curso)", // NUEVA CLAVE
        "edu_highschool": "Enseñanza media",
        "btn_cert": "Ver Certificado",
        "other_title": "Otras Experiencias",
        "other_desc1": "Participación en taller de optimización de rutas de despacho para vehículos de reparto.",
        "other_desc_cig": "Asistencia al Congreso de Ingeniería Global 2024.",
        "other_desc2": "Participación en Congreso Latinoamericano de Estudiantes e Ingenieros Industriales y Afines (México).",
        "other_desc3": "Participación en taller de Lean Six Sigma White Belt y Lean Six Sigma Yellow Belt.",
        "contact_title": "Contacto",
        "contact_name_ph": "Tu nombre",
        "contact_email_ph": "Tu email",
        "contact_msg_ph": "Tu mensaje",
        "contact_btn": "Enviar Mensaje",
        "footer_rights": "Todos los derechos reservados.",
        "btn_more_info": "Más información",
        
        // Mensajes del formulario
        "msg_success": "¡Mensaje enviado con éxito!",
        "msg_error": "Hubo un problema. Intenta de nuevo.",
        
         // --- TEXTOS PARA PÁGINAS DE DETALLE ---
        "nav_back": "Volver al Portafolio",
        "gallery_title": "Galería de Proyectos",
        
        "coax_title": "Práctica: CO-AX Válvulas S.L.",
        "coax_subtitle": "Gestión integral de la cadena de suministro y ventas mediante SAP ERP",
        "coax_detail_text": "La eficiencia en la cadena de suministro y la identificación proactiva de oportunidades de mercado son los motores del crecimiento corporativo. Durante esta experiencia, operé en el núcleo logístico y comercial utilizando el ERP SAP para el control integral de pedidos de clientes y la gestión de inventarios, garantizando un flujo de operaciones ininterrumpido y la satisfacción del cliente final. En paralelo, impulsé el desarrollo de negocios mediante la búsqueda estratégica y el análisis exhaustivo de licitaciones en portales de contratación pública, particularmente de RENFE. Esta doble función consolidó mi perfil analítico y mi capacidad para alinear la eficiencia operativa interna con la expansión comercial estratégica, demostrando un manejo sólido de herramientas empresariales de primer nivel para maximizar la competitividad.",
        
       "ufro_inv_title": "Ayudantía: Investigación y Operaciones",
        "ufro_inv_subtitle": "Apoyo en investigación y desarrollo de talleres",
        "ufro_inv_detail_text": "La Investigación de Operaciones es el motor analítico que permite a las industrias minimizar costos, optimizar recursos y tomar decisiones estratégicas para la gestión de sistemas complejos. Como Ayudante de la sección práctica de esta asignatura, mi objetivo fue conectar esta capacidad analítica con la realidad operativa. Fui responsable del diseño y evaluación de casos de estudio aplicados , guiando a los alumnos en la traducción de problemas industriales como la optimización de rutas de transporte o la mejora de procesos productivos —en modelos matemáticos. A través de la instrucción en software de optimización avanzado LINGO, AMPL/CPlex y Gurobi, lideré la resolución de estos desafíos. Esta experiencia no solo me permitió formar equipos de trabajo , sino que consolidó mi propia capacidad para transformar datos en soluciones concretas que impulsan la eficacia y eficiencia en las organizaciones.",
        
        "ufro_termo_title": "Ayudantía: Termodinámica",
        "ufro_termo_subtitle": "Desarrollo de material complementario",
        "ufro_termo_detail_text": "La Termodinámica es el pilar fundamental para la eficiencia energética y la optimización de costos en cualquier proceso industrial que involucre transferencia de calor o energía. Como Ayudante de la sección práctica de esta asignatura, mi objetivo fue aterrizar estos principios teóricos a la realidad operativa. Fui responsable de guiar y evaluar a los estudiantes en el análisis de casos de estudio y experiencias de laboratorio, donde aplicaron balances de materia y energía para optimizar sistemas termodinámicos y procesos productivos. Lideré actividades enfocadas en evaluar la factibilidad técnica de estas mejoras mediante el uso de herramientas científico-tecnológicas y de gestión de proyectos. Esta experiencia no solo fortaleció mi capacidad para dirigir equipos técnicos, sino que consolidó mi habilidad para traducir leyes físicas complejas en propuestas de mejora continua, eficiencia y sustentabilidad para la industria.",
        
        "coax_ene_title": "Práctica: CO-AX Válvulas S.L.",
        "coax_ene_subtitle": "Desarrollo de banco de pruebas",
        "coax_ene_detail_text": "El diseño riguroso y el estricto cumplimiento normativo son la base para garantizar la fiabilidad, precisión y seguridad en cualquier entorno de validación industrial. Como responsable del diseño conceptual y mecánico de un banco de pruebas, lideré el proceso desde la investigación de viabilidad hasta el ensamble digital. Mi trabajo comenzó con un análisis crítico de catálogos de piezas para la selección exacta de componentes y una rigurosa revisión de los estándares técnicos y de seguridad aplicables. Posteriormente, traduje estos requerimientos en un prototipo digital de alta precisión utilizando CATIA V5, ejecutando el modelado 3D y el ensamblaje completo del sistema. Esta experiencia fortaleció mi capacidad para integrar la investigación técnica, las normativas internacionales y el diseño asistido por computadora (CAD), entregando soluciones de ingeniería estructuradas, seguras y completamente preparadas para su fabricación.",
        
        "mtech_title": "Práctica: m-tech gmbh",
        "mtech_subtitle": "Programación PLC y Automatización",
        "mtech_detail_text": "La automatización precisa es el núcleo de la seguridad operativa y la eficiencia. Como Desarrollador de Software de Control, estuve a cargo de la programación y documentación de un sistema semiautomático de llenado de gases operado mediante PLCs Unitronics. Mi trabajo abarcó desde la configuración de hardware y redes de comunicación Modbus TCP/IP, hasta el desarrollo de lógica de control compleja con lazos PID para la gestión exacta de presión y temperatura. Diseñé una Interfaz Hombre-Máquina (HMI) multilingüe e intuitiva, incorporando visualización dinámica de P&ID, modos de operación manual/automático y un sistema robusto de gestión de alarmas. Además, redacté toda la documentación técnica y manuales de operación. Esta experiencia consolidó mi capacidad para integrar hardware y software en soluciones industriales fiables, priorizando siempre la seguridad, la precisión milimétrica y la experiencia del usuario final.",

        "ufro_log_title": "Ayudantía: Logística y Cadena de Suministros",
        "ufro_log_subtitle": "Desarrollo de Talleres y clases prácticas",
        "ufro_log_detail_text": "La Logística y la Cadena de Suministro conforman la columna vertebral operativa que permite a las empresas entregar valor al cliente final, optimizando redes de distribución y reduciendo costos estructurales a nivel global. Como Ayudante de la sección práctica, mi rol fue conectar esta visión estratégica con la ejecución analítica. Fui responsable de guiar y evaluar el componente práctico, el cual representó el 70% de la calificación de los estudiantes. Lideré talleres y proyectos aplicados con empresas reales donde los alumnos resolvieron desafíos complejos de ruteo de transporte, modelos de inventario y localización de instalaciones. Apoyado en la instrucción de software especializado en diseño logístico, asesoré a los equipos en la optimización de procesos de abastecimiento. Esta experiencia fortaleció mi capacidad para modelar sistemas a gran escala, liderar equipos técnicos y transformar cuellos de botella operativos en redes de suministro eficientes, rentables y resilientes.",

        "ufro_proy_title": "Ayudantía: Formulación y Evaluación de Proyectos",
        "ufro_proy_subtitle": "Desarrollo de Talleres y clases prácticas",
        "ufro_proy_detail_text": "La Formulación y Evaluación de Proyectos es el puente crítico entre una idea innovadora y una inversión rentable, permitiendo a las organizaciones minimizar riesgos antes de comprometer capital. Como Ayudante de la sección práctica, lideré la mentoría de equipos en la estructuración de proyectos de inversión reales. Fui responsable de guiar y evaluar el desarrollo integral de estos proyectos, abarcando desde estudios de mercado e ingeniería técnica hasta la modelación financiera de flujos de caja y análisis de sensibilidad utilizando Microsoft Excel. Evalué talleres y presentaciones de perfiles de negocio que representaron el 50% de la calificación final , asegurando que las propuestas integraran criterios de rentabilidad económica, viabilidad técnica y responsabilidad socioambiental. Esta experiencia potenció mi capacidad para evaluar oportunidades de negocio, gestionar el riesgo y fundamentar decisiones estratégicas de inversión basadas en datos duros."
    },
    de: {
        "nav_about": "Über mich",
        "nav_exp": "Erfahrung",
        "nav_skills": "Fähigkeiten",
        "nav_edu": "Ausbildung",
        "nav_other": "Weitere Erfahrungen",
        "nav_contact": "Kontakt",
        "header_subtitle": "STUDENT DER WIRTSCHAFTSINGENIEURWESEN",
        "about_title": "Über mich",
        "about_text": "Wirtschaftsingenieur mit starkem Fokus auf Prozessoptimierung und Datenanalyse. Ich setze agile Methoden und technologische Lösungen ein, um komplexe organisatorische Herausforderungen zu bewältigen. Ich bin teamfähig, arbeite gerne in interdisziplinären Umgebungen und passe mich schnell an. Mein aktuelles Ziel ist es, meine Karriere international auszurichten und meine Fachkenntnisse gezielt einzubringen.",
        "btn_cv": "Lebenslauf als PDF herunterladen",
        "exp_title": "Berufserfahrung",
        "date_actual": "August 2024 - Heute",
        "date_actual_2025": "2025 - Heute",
        "exp_role1": "Wissenschaftlicher Mitarbeiter für Forschung und Operations",
        "exp_desc1": "Entwicklung von Workshops und Durchführung von praktischem Unterricht",
        "exp_role2": "Tutor für Thermodynamik",
        "exp_desc2": "Entwicklung von ergänzenden Lehrmaterialien",
        "exp_role3": "Praktikum",
        "exp_desc3_1": "Implementierung eines Prüfstands.",
        "exp_desc3_2": "Entwicklung eines Elektroniklabors.",
        "exp_role4": "Praktikum",
        "exp_desc4": "Entwicklung eines Prüfstands.",
        "exp_role5": "Praktikum",
        "exp_desc5": "SPS-Programmierung eines halbautomatischen Gasabfüllsystems.",
        
        "exp_role6": "Tutor für Logistik und Supply Chain Management",
        "exp_desc6": "Entwicklung von Workshops und Durchführung von praktischem Unterricht",
        "exp_role7": "Tutor für Projektentwicklung und -bewertung",
        "exp_desc7": "Entwicklung von Workshops und Durchführung von praktischem Unterricht",

        "skills_title": "Technische Fähigkeiten und Werkzeuge",
        "skill1": "Kontinuierliche Verbesserung (Lean Six Sigma)",
        "skill2": "Datenanalyse",
        "skill3": "Automatisierung und SPS",
        "skill4": "Programmierung (Java, Python)",
        "skill5": "3D-Design (Catia v5, SolidWorks)",
        "skill6": "Visuelle Kommunikation (Adobe Photoshop)",
        
        "skill7": "Simulation (AnyLogic, Arena)",
        "skill8": "Digitale Zwillinge (Digital Twins)",

        "lang_title": "Sprachen",
        "lang_es": "Spanisch",
        "lang_de": "Deutsch",
        "lang_en": "Englisch",
        "lang_level_native": "Muttersprache",
        "lang_level_high": "Hohes Niveau",
        "lang_level_med": "Mittleres Niveau",
        
        "edu_title": "Ausbildung",
        "edu_degree": "Bachelor of Science in den Ingenieurwissenschaften",
        "edu_minor": "Minor in Datenanalyse", // NUEVA CLAVE
        "status_current": "(In Ausbildung)", // NUEVA CLAVE
        "edu_highschool": "Abitur / Sekundarstufe",
        "btn_cert": "Zertifikat ansehen",
        "other_title": "Weitere Erfahrungen",
        "other_desc1": "Teilnahme an einem Workshop zur Routenoptimierung für Lieferfahrzeuge.",
        "other_desc_cig": "Teilnahme am Global Engineering Congress 2024.",
        "other_desc2": "Teilnahme am lateinamerikanischen Kongress für Studenten und Ingenieure im Wirtschaftsingenieurwesen (Mexiko).",
        "other_desc3": "Teilnahme am Lean Six Sigma White Belt und Yellow Belt Workshop.",
        "contact_title": "Kontakt",
        "contact_name_ph": "Ihr Name",
        "contact_email_ph": "Ihre E-Mail",
        "contact_msg_ph": "Ihre Nachricht",
        "contact_btn": "Nachricht senden",
        "footer_rights": "Alle Rechte vorbehalten.",
        "btn_more_info": "Weitere Informationen",

        // Mensajes del formulario
        "msg_success": "Nachricht erfolgreich gesendet!",
        "msg_error": "Es gab ein Problem. Bitte versuchen Sie es erneut.",
        
         // --- TEXTOS PARA PÁGINAS DE DETALLE ---
        "nav_back": "Zurück zum Portfolio",
        "gallery_title": "Projektgalerie",
        
        "coax_title": "Praktikum: CO-AX Válvulas S.L.",
        "coax_subtitle": "Ganzheitliches Supply-Chain- und Vertriebsmanagement über SAP ERP",
        "coax_detail_text": "Effizienz in der Lieferkette und die proaktive Identifizierung von Marktchancen sind die Motoren des Unternehmenswachstums. Während dieser Erfahrung arbeitete ich im logistischen und kaufmännischen Kernbereich und nutzte das ERP-System SAP für die umfassende Steuerung von Kundenaufträgen und die Bestandsverwaltung. So garantierte ich einen reibungslosen Betriebsablauf und höchste Kundenzufriedenheit. Parallel dazu trieb ich die Geschäftsentwicklung durch die strategische Suche und detaillierte Analyse von Ausschreibungen auf öffentlichen Vergabeportalen, insbesondere von RENFE, voran. Diese Doppelfunktion festigte mein analytisches Profil und meine Fähigkeit, interne operative Effizienz mit strategischer Geschäftsexpansion in Einklang zu bringen und erstklassige Unternehmenswerkzeuge zur Maximierung der Wettbewerbsfähigkeit einzusetzen.",
        
        "ufro_inv_title": "Wissenschaftliche Hilfskraft: Forschung & Betrieb",
        "ufro_inv_subtitle": "Unterstützung bei Forschung und Workshops",
        "ufro_inv_detail_text": "Operations Research ist der analytische Motor, der es der Industrie ermöglicht, Kosten zu minimieren, Ressourcen zu optimieren und strategische Entscheidungen für das Management komplexer Systeme zu treffen. Als Tutor für den praktischen Teil dieses Kurses war es mein Ziel, diese analytische Fähigkeit mit der operativen Realität zu verbinden. Ich war verantwortlich für die Konzeption und Bewertung angewandter Fallstudien und leitete die Studierenden an, industrielle Probleme – wie die Optimierung von Transportrouten oder die Verbesserung von Produktionsprozessen – in mathematische Modelle zu übersetzen. Durch die Anleitung in fortschrittlicher Optimierungssoftware wie LINGO, AMPL/CPlex und Gurobi habe ich die Lösung dieser Herausforderungen geführt. Diese Erfahrung hat es mir nicht nur ermöglicht, Teams zu bilden, sondern auch meine eigene Fähigkeit gefestigt, Daten in konkrete Lösungen umzuwandeln, die die Effektivität und Effizienz in Organisationen vorantreiben.",
        
        "ufro_termo_title": "Tutor: Thermodynamik",
        "ufro_termo_subtitle": "Entwicklung von Lehrmaterialien",
        "ufro_termo_detail_text": "Die Thermodynamik ist ein Grundpfeiler für Energieeffizienz und Kostenoptimierung in jedem industriellen Prozess, der mit Wärme- oder Energieübertragung verbunden ist. Als Tutor für den praktischen Teil dieses Kurses war es mein Ziel, diese theoretischen Prinzipien in der operativen Realität zu verankern. Ich war verantwortlich für die Anleitung und Bewertung der Studierenden bei der Analyse von Fallstudien und Laborerfahrungen, bei denen sie Stoff- und Energiebilanzen anwandten, um thermodynamische Systeme und Produktionsprozesse zu optimieren. Ich leitete Aktivitäten, die darauf abzielten, die technische Machbarkeit dieser Verbesserungen durch den Einsatz wissenschaftlich-technologischer und Projektmanagement-Werkzeuge zu bewerten. Diese Erfahrung stärkte nicht nur meine Fähigkeit, technische Teams zu leiten, sondern festigte auch meine Kompetenz, komplexe physikalische Gesetze in Vorschläge für kontinuierliche Verbesserung, Effizienz und Nachhaltigkeit für die Industrie zu übersetzen.",
        
        "coax_ene_title": "Praktikum: CO-AX Válvulas S.L.",
        "coax_ene_subtitle": "Entwicklung einer Prüfbank",
        "coax_ene_detail_text": "Ein rigoroses Design und die strikte Einhaltung von Normen sind die Grundlage für die Gewährleistung von Zuverlässigkeit, Präzision und Sicherheit in jeder industriellen Validierungsumgebung. Als Verantwortlicher für das konzeptionelle und mechanische Design eines Prüfstandes leitete ich den Prozess von der Machbarkeitsstudie bis zur digitalen Baugruppe. Meine Arbeit begann mit einer kritischen Analyse von Teilekatalogen zur genauen Auswahl von Komponenten und einer strengen Überprüfung der geltenden technischen und sicherheitsrelevanten Standards. Anschließend übertrug ich diese Anforderungen in einen hochpräzisen digitalen Prototyp mittels CATIA V5, indem ich die 3D-Modellierung und die komplette Montage des Systems durchführte. Diese Erfahrung stärkte meine Fähigkeit, technische Forschung, internationale Normen und computergestütztes Design (CAD) zu integrieren und strukturierte, sichere und vollständig fertigungsgerechte Ingenieurlösungen zu liefern.",
        
        "mtech_title": "Praktikum: m-tech gmbh",
        "mtech_subtitle": "SPS-Programmierung und Automatisierung",
        "mtech_detail_text": "Präzise Automatisierung ist das Herzstück für Betriebssicherheit und Effizienz. Als Entwickler für Steuerungssoftware war ich für die Programmierung und Dokumentation eines halbautomatischen Gasabfüllsystems auf Basis von Unitronics-SPS (Speicherprogrammierbare Steuerungen) verantwortlich. Meine Arbeit reichte von der Hardware- und Modbus-TCP/IP-Netzwerkkonfiguration bis hin zur Entwicklung komplexer Steuerungslogik mit PID-Reglern für exaktes Druck- und Temperaturmanagement. Ich entwarf eine intuitive, mehrsprachige Mensch-Maschine-Schnittstelle (HMI), die eine dynamische P&ID-Visualisierung, manuelle/automatische Betriebsmodi und ein robustes Alarmmanagementsystem integrierte. Darüber hinaus verfasste ich die gesamte technische Dokumentation und die Bedienungsanleitungen. Diese Erfahrung festigte meine Fähigkeit, Hardware und Software zu zuverlässigen industriellen Lösungen zu integrieren, bei denen Sicherheit, höchste Präzision und Benutzerfreundlichkeit stets an erster Stelle stehen.",

        "ufro_log_title": "Tutorium: Logistik und Supply Chain Management",
        "ufro_log_subtitle": "Entwicklung von Workshops und praktischem Unterricht",
        "ufro_log_detail_text": "Logistik und Supply Chain Management bilden das operative Rückgrat, das es Unternehmen ermöglicht, dem Endkunden einen Mehrwert zu liefern, indem sie Vertriebsnetze optimieren und strukturelle Kosten weltweit senken. Als Tutor für den praktischen Teil bestand meine Rolle darin, diese strategische Vision mit der analytischen Umsetzung zu verbinden. Ich war verantwortlich für die Anleitung und Bewertung des praktischen Teils, der 70 % der Endnote der Studierenden ausmachte. Ich leitete Workshops und angewandte Projekte mit realen Unternehmen, in denen die Studierenden komplexe Herausforderungen in den Bereichen Transportroutenplanung, Bestandsmodelle und Standortwahl von Anlagen lösten. Gestützt auf die Unterweisung in spezialisierter Logistikdesign-Software  beriet ich die Teams bei der Optimierung von Beschaffungsprozessen. Diese Erfahrung hat meine Fähigkeit gestärkt, großflächige Systeme zu modellieren, technische Teams zu leiten und operative Engpässe in effiziente, profitable und widerstandsfähige Versorgungsnetzwerke umzuwandeln.",

        "ufro_proy_title": "Tutorium: Projektentwicklung und -bewertung",
        "ufro_proy_subtitle": "Entwicklung von Workshops und praktischem Unterricht",
        "ufro_proy_detail_text": "Die Projektformulierung und -bewertung ist die entscheidende Brücke zwischen einer innovativen Idee und einer profitablen Investition, die es Organisationen ermöglicht, Risiken zu minimieren, bevor sie Kapital binden. Als Tutor für den praktischen Teil habe ich Teams bei der Strukturierung realer Investitionsprojekte betreut. Ich war verantwortlich für die Anleitung und Bewertung der umfassenden Entwicklung dieser Projekte, von Markt- und Technikstudien bis hin zur Finanzmodellierung von Cashflows und Sensitivitätsanalysen unter Verwendung von Microsoft Excel. Ich bewertete Workshops und Präsentationen von Geschäftsprofilen, die 50 % der Endnote ausmachten , und stellte sicher, dass die Vorschläge Kriterien der wirtschaftlichen Rentabilität, der technischen Machbarkeit sowie der sozialen und ökologischen Verantwortung integrierten. Diese Erfahrung hat meine Fähigkeit gestärkt, Geschäftschancen zu bewerten, Risiken zu managen und strategische Investitionsentscheidungen auf der Grundlage harter Daten zu fundieren."
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
        "about_text": "Industrial Civil Engineer with a strong focus on process optimization and data analysis. I seek to apply agile methodologies and technological solutions to solve complex organizational problems. I have the ability to work in multidisciplinary teams and adapt to different environments, with the current goal of projecting my career internationally and applying my professional knowledge.",
        "btn_cv": "Download CV in PDF",
        "exp_title": "Work Experience",
        "date_actual": "August 2024 - Present",
        "date_actual_2025": "2025 - Present",
        "exp_role1": "Research and Operations Assistant",
        "exp_desc1": "Development of workshops and conducting practical classes",
        "exp_role2": "Thermodynamics Teaching Assistant",
        "exp_desc2": "Development of supplementary materials",
        "exp_role3": "Internship",
        "exp_desc3_1": "Implementation of a test bench.",
        "exp_desc3_2": "Development of an electronics laboratory.",
        "exp_role4": "Internship",
        "exp_desc4": "Development of a test bench.",
        "exp_role5": "Internship",
        "exp_desc5": "PLC programming of a semi-automatic gas filling system.",
        
        "exp_role6": "Teaching Assistant: Logistics and Supply Chain",
        "exp_desc6": "Development of workshops and conducting practical classes",
        "exp_role7": "Teaching Assistant: Project Formulation and Evaluation",
        "exp_desc7": "Development of workshops and conducting practical classes",

        "skills_title": "Technical Skills and Tools",
        "skill1": "Continuous Improvement (Lean Six Sigma)",
        "skill2": "Data Analysis",
        "skill3": "Automation and PLC",
        "skill4": "Programming (Java, Python)",
        "skill5": "3D Design (Catia v5, SolidWorks)",
        "skill6": "Visual Communication (Adobe Photoshop)",
        
        "skill7": "Simulation (AnyLogic, Arena)",
        "skill8": "Digital Twins",

        "lang_title": "Languages",
        "lang_es": "Spanish",
        "lang_de": "German",
        "lang_en": "English",
        "lang_level_native": "Native",
        "lang_level_high": "Advanced",
        "lang_level_med": "Intermediate",
        
        "edu_title": "Education",
        "edu_degree": "Bachelor of Science in Engineering",
        "edu_minor": "Minor in Data Analysis", // NUEVA CLAVE
        "status_current": "(In progress)", // NUEVA CLAVE
        "edu_highschool": "High School Diploma",
        "btn_cert": "View Certificate",
        "other_title": "Other Experiences",
        "other_desc1": "Participation in a dispatch route optimization workshop for delivery vehicles.",
        "other_desc_cig": "Attendance at the Global Engineering Congress 2024.",
        "other_desc2": "Participation in the Latin American Congress of Industrial Engineering Students and Professionals (Mexico).",
        "other_desc3": "Participation in Lean Six Sigma White Belt and Yellow Belt workshop.",
        "contact_title": "Contact",
        "contact_name_ph": "Your name",
        "contact_email_ph": "Your email",
        "contact_msg_ph": "Your message",
        "contact_btn": "Send Message",
        "footer_rights": "All rights reserved.",
        "btn_more_info": "More information",

        // Mensajes del formulario
        "msg_success": "Message sent successfully!",
        "msg_error": "There was a problem. Please try again.",
        
         // --- TEXTOS PARA PÁGINAS DE DETALLE ---
        "nav_back": "Back to Portfolio",
        "gallery_title": "Project Gallery",
        
        "coax_title": "Internship: CO-AX Válvulas S.L.",
        "coax_subtitle": "Comprehensive supply chain and sales management via SAP ERP",
        "coax_detail_text": "Supply chain efficiency and the proactive identification of market opportunities are the engines of corporate growth. During this experience, I operated in the logistical and commercial core, utilizing the SAP ERP system for the comprehensive control of customer orders and inventory management, ensuring uninterrupted operations and end-customer satisfaction. In parallel, I drove business development through the strategic search and exhaustive analysis of tenders on public procurement portals, particularly from RENFE. This dual role consolidated my analytical profile and my ability to align internal operational efficiency with strategic commercial expansion, demonstrating solid proficiency in top-tier enterprise tools to maximize competitiveness.",
        
        "ufro_inv_title": "Assistant: Research and Operations",
        "ufro_inv_subtitle": "Research support and workshop development",
        "ufro_inv_detail_text": "Operations Research is the analytical engine that allows industries to minimize costs, optimize resources, and make strategic decisions for the management of complex systems. As a Teaching Assistant for the practical section of this course, my goal was to connect this analytical capability with operational reality. I was responsible for the design and evaluation of applied case studies, guiding students in translating industrial problems—such as transport route optimization or the improvement of production processes—into mathematical models. Through instruction in advanced optimization software like LINGO, AMPL/CPlex, and Gurobi, I led the resolution of these challenges. This experience not only allowed me to build and guide teams but also consolidated my own ability to transform data into concrete solutions that drive effectiveness and efficiency in organizations.",
        
        "ufro_termo_title": "Teaching Assistant: Thermodynamics",
        "ufro_termo_subtitle": "Development of supplementary materials",
        "ufro_termo_detail_text": "Thermodynamics is the fundamental pillar for energy efficiency and cost optimization in any industrial process involving heat or energy transfer. As a Teaching Assistant for the practical section of this course, my goal was to ground these theoretical principles in operational reality. I was responsible for guiding and evaluating students in the analysis of case studies and laboratory experiences, where they applied mass and energy balances to optimize thermodynamic systems and production processes. I led activities focused on evaluating the technical feasibility of these improvements through the use of scientific-technological and project management tools. This experience not only strengthened my ability to manage technical teams but also consolidated my skill in translating complex physical laws into proposals for continuous improvement, efficiency, and sustainability for the industry.",
        
        "coax_ene_title": "Internship: CO-AX Válvulas S.L.",
        "coax_ene_subtitle": "Test bench development",
        "coax_ene_detail_text": "Rigorous design and strict regulatory compliance are the foundation for ensuring reliability, precision, and safety in any industrial validation environment. As the person responsible for the conceptual and mechanical design of a test bench, I led the process from feasibility research to digital assembly. My work began with a critical analysis of parts catalogs for the exact selection of components and a rigorous review of applicable technical and safety standards. Subsequently, I translated these requirements into a high-precision digital prototype using CATIA V5, executing the 3D modeling and complete assembly of the system. This experience strengthened my ability to integrate technical research, international regulations, and computer-aided design (CAD), delivering structured, safe, and fully manufacturing-ready engineering solutions.",
        
        "mtech_title": "Internship: m-tech gmbh",
        "mtech_subtitle": "PLC Programming and Automation",
        "mtech_detail_text": "Precise automation is the core of operational safety and efficiency. As a Control Software Developer, I was in charge of programming and documenting a semi-automatic gas filling system operated by Unitronics PLCs. My work ranged from hardware and Modbus TCP/IP communication network configuration to the development of complex control logic using PID loops for exact pressure and temperature management. I designed an intuitive, multi-language Human-Machine Interface (HMI), incorporating dynamic P&ID visualization, manual/automatic operation modes, and a robust alarm management system. Furthermore, I authored all technical documentation and operation manuals. This experience consolidated my ability to integrate hardware and software into reliable industrial solutions, always prioritizing safety, pinpoint accuracy, and the end-user experience.",

        "ufro_log_title": "Assistantship: Logistics and Supply Chain",
        "ufro_log_subtitle": "Workshop development and practical classes",
        "ufro_log_detail_text": "Logistics and Supply Chain Management form the operational backbone that enables companies to deliver value to the end customer, optimizing distribution networks and reducing structural costs globally. As a Teaching Assistant for the practical section, my role was to connect this strategic vision with analytical execution. I was responsible for guiding and evaluating the practical component, which accounted for 70% of the students' final grade. I led workshops and applied projects with real companies where students solved complex challenges in transport routing, inventory models, and facility location. Supported by instruction in specialized logistics design software, I advised teams on the optimization of procurement processes. This experience strengthened my ability to model large-scale systems, lead technical teams, and transform operational bottlenecks into efficient, profitable, and resilient supply networks.",

        "ufro_proy_title": "Assistantship: Project Formulation and Evaluation",
        "ufro_proy_subtitle": "Workshop development and practical classes",
        "ufro_proy_detail_text": "Project Formulation and Evaluation is the critical bridge between an innovative idea and a profitable investment, allowing organizations to minimize risks before committing capital. As a Teaching Assistant for the practical section, I mentored teams in structuring real investment projects. I was responsible for guiding and evaluating the comprehensive development of these projects, ranging from market and technical engineering studies to financial modeling of cash flows and sensitivity analysis using Microsoft Excel. I evaluated workshops and business profile presentations that accounted for 50% of the final grade , ensuring the proposals integrated economic profitability, technical feasibility, and socio-environmental responsibility criteria. This experience enhanced my ability to assess business opportunities, manage risk, and substantiate strategic investment decisions based on hard data."
    }
};

// Formulario de Contacto Funcional con Formspree (CORREGIDO PARA TRADUCCIONES)
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
                // Asignamos el data-key para que cambie de idioma dinámicamente
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

// Archivos de CV correspondientes a cada idioma
const cvFiles = {
    es: "curriculum_walter_kocher_es.pdf",
    de: "curriculum_walter_kocher_de.pdf",
    en: "curriculum_walter_kocher_en.pdf"
};

function changeLanguage(lang) {
    // 1. Cambiar los textos normales
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

    // 2. Cambiar los placeholders del formulario
    const placeholders = document.querySelectorAll('[data-placeholder-key]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-placeholder-key');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // 3. Cambiar el archivo del CV a descargar (solo si existe el botón)
    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
        cvLink.href = cvFiles[lang];
    }

    // 4. Actualizar la clase "active" en los botones
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    
    // Solo intentar añadir la clase si el botón existe en la página actual
    const currentBtn = document.getElementById('btn-' + lang);
    if(currentBtn) {
        currentBtn.classList.add('active');
    }

    // 5. Guardar preferencia en el navegador
    localStorage.setItem('preferredLanguage', lang);
}

// Inicializar idioma al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(savedLang);
});
