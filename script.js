// 1. تشغيل أيقونات Lucide
lucide.createIcons();

// 2. منطق قائمة الموبايل
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

// 3. قاموس الترجمة العالمي المشترك (6 لغات)
const translations = {
    ar: {
        navHome: "الرئيسية", navAbout: "من أنا", navProjects: "أعمالي", navContact: "اتصلي بي",
        btnDirect: "تواصل فوري", btnBrowse: "تصفحِ المشاريع مستقبلاً", btnContact: "تواصلِ معي الآن",
        heroTitle: 'مرحباً، أنا مهندسة كمبيوتر <br> <span class="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-200 bg-clip-text text-transparent">أصنع حلولاً برمجية ذكية</span>',
        heroDesc: "مرحباً بكِ في مساحتي الرقمية الخاصة. هنا أدمج شغفي بالهندسة وتطوير الأنظمة لبناء واجهات برمجية وتطبيقات متكاملة تتسم بالقوة والجمال مستوحاة من الدقة اللامتناهية.",
        aboutHeading: "هويتي المهنية", aboutSub: "// شغف بالبرمجة، دقة في الهندسة",
        aboutBox1Title: "01. من هي المهندسة؟", aboutBox1Text: "أعمل في مجال هندسة وتطوير الحاسب الآلي، حيث ينصب تركيزي على كتابة أكواد نظيفة وقابلة للتطوير، وتصميم وإدارة قواعد البيانات، وبناء حلول الويب والتطبيقات المتكاملة التي تحل المشكلات الواقعية بكفاءة.",
        aboutBox2Title: "02. المهارات التقنية", projectsHeading: "معرض أعمالي", projectsSub: "قريباً.. سيتم إضافة أقوى المشاريع البرمجية والهندسية هنا",
        pBoxTitle: "مشروع مستقبلي", pBoxDesc: "مساحة جاهزة لاستقبال لقطات وتفاصيل مشروعك القادم.",
        contactHeading: "ابدأ مشروعك معي", contactSub: "يسعدني دائماً تواصلك لمناقشة الأفكار الهندسية المبتكرة.",
        cPhone: "رقم الهاتف", cEmail: "البريد الإلكتروني", formName: "الاسم", formEmail: "البريد الإلكتروني", formMsg: "تفاصيل الرسالة",
        btnSubmit: "إرسال الرسالة الرقمية", 
        footerText: "&copy; 2026 ENG/Jaceka Samih. جميع الحقوق محفوظة.",
        langName: "العربية", pName: "الاسم الكريم", pMsg: "اكتبِ هنا تفاصيل المشروع...",
        // Rolex Showcase Translation
        rolexTitle: "معرض رولكس الفاخر",
        rolexDesc: "موقع ويب متجاوب بتصميم فاخر يعرض ساعات رولكس مع تجربة مستخدم مميزة وتأثيرات حركية انسيابية. تم تطوير سكربت مخصص بالـ JS لدعم 7 لغات مختلفة بشكل كامل.",
        // JS Educational Platform Translation
        eduTitle: "منصة JS التعليمية",
        eduDesc: "منصة تعليمية حديثة ومتجاوبة، تضم لوحة تحكم لتصفية الكورسات ديناميكيًا، تبديل خطط الأسعار، وقوائم أسئلة شائعة انسيابية مع دعم كامل لـ 7 لغات.",
        // JS Store Translation
        storeTitle: "متجر JS Store الإلكتروني الفاخر",
        storeDesc: "متجر إلكتروني متكامل بتصميم داكن فاخر. يتميز بدعم تلقائي ثنائي اللغة، نظام ذكي لتبديل المظهر (Dark / Light Mode)، وسلة تسوق تفاعلية مع مفضلة تعتمد على LocalStorage."
    },
    en: {
        navHome: "Home", navAbout: "About Me", navProjects: "Projects", navContact: "Contact",
        btnDirect: "Quick Contact", btnBrowse: "Browse Projects", btnContact: "Contact Me Now",
        heroTitle: 'Hello, I\'m a Computer Engineer <br> <span class="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-200 bg-clip-text text-transparent">Crafting Smart Software Solutions</span>',
        heroDesc: "Welcome to my digital space. Here, I merge my passion for engineering and systems development to build robust, beautiful web interfaces and applications inspired by ultimate precision.",
        aboutHeading: "Professional Identity", aboutSub: "// Passion for coding, precision in engineering",
        aboutBox1Title: "01. Who is the Engineer?", aboutBox1Text: "I work in the field of computer engineering and development, focusing on writing clean, scalable code, designing databases, and building full-stack web solutions.",
        aboutBox2Title: "02. Technical Skills", projectsHeading: "My Portfolio", projectsSub: "Coming soon.. The most powerful engineering projects will be added here",
        pBoxTitle: "Future Project", pBoxDesc: "Ready space to host your upcoming project details.",
        contactHeading: "Start Your Project With Me", contactSub: "I am always happy to connect and discuss innovative engineering ideas.",
        cPhone: "Phone Number", cEmail: "Email Address", formName: "Name", formEmail: "Email", formMsg: "Message Details",
        btnSubmit: "Send Digital Message", 
        footerText: "&copy; 2026 ENG/Jaceka Samih. All Rights Reserved.",
        langName: "English", pName: "Your Full Name", pMsg: "Write project details here...",
        // Rolex Showcase Translation
        rolexTitle: "Rolex Luxury Showcase",
        rolexDesc: "A luxury-themed responsive website showcasing Rolex timepieces with a premium user experience and smooth CSS animations. Built a custom JS script supporting 7 different languages seamlessly.",
        // JS Educational Platform Translation
        eduTitle: "JS Educational Platform",
        eduDesc: "A modern, responsive educational dashboard featuring dynamic course filtering, a pricing toggle, and smooth FAQ accordions with full multilingual support.",
        // JS Store Translation
        storeTitle: "JS Store Premium E-Commerce",
        storeDesc: "A complete luxury e-commerce store. Features dual-language support, a smart theme switcher (Dark / Light Mode), an interactive cart, and a wishlist powered by LocalStorage."
    },
    es: { 
        navHome: "Inicio", navAbout: "Sobre Mí", navProjects: "Proyectos", navContact: "Contacto",
        btnDirect: "Contacto Rápido", btnBrowse: "Explorar Proyectos", btnContact: "Contáctame Ahora",
        heroTitle: 'Hola, soy Ingeniera de Computación <br> <span class="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-200 bg-clip-text text-transparent">Creando Soluciones de Software Inteligentes</span>',
        heroDesc: "Bienvenido a mi espacio digital. Aquí, fusiono mi pasión por la ingeniería y el desarrollo de sistemas para construir interfaces web y aplicaciones robustas y hermosas, inspiradas en la máxima precisión.",
        aboutHeading: "Identidad Profesional", aboutSub: "// Pasión por el código, precisión en la ingeniería",
        aboutBox1Title: "01. ¿Quién es la Ingeniera?", aboutBox1Text: "Trabajo en el campo de la ingeniería y el desarrollo de computación, enfocándome en escribir código limpio y escalable, diseñar bases de datos y construir soluciones web integrales.",
        aboutBox2Title: "02. Habilidades Técnicas", projectsHeading: "Mi Portafolio", projectsSub: "Próximamente.. Se añadirán aquí los proyectos de ingeniería más potentes",
        pBoxTitle: "Proyecto Futuro", pBoxDesc: "Espacio listo para albergar los detalles de tu próximo proyecto.",
        contactHeading: "Comienza Tu Proyecto Conmigo", contactSub: "Siempre estoy feliz de conectar y discutir ideas de ingeniería innovadoras.",
        cPhone: "Número de Teléfono", cEmail: "Correo Electrónico", formName: "Nombre", formEmail: "Correo", formMsg: "Detalles del Mensaje",
        btnSubmit: "Enviar Mensaje Digital", 
        footerText: "&copy; 2026 ENG/Jaceka Samih. Todos los Derechos Reservados.",
        langName: "Español", pName: "Tu Nombre Completo", pMsg: "Escribe los detalles del proyecto aquí...",
        // Rolex Showcase Translation
        rolexTitle: "Vitrina de Lujo Rolex",
        rolexDesc: "Un sitio web receptivo de temática de lujo que muestra relojes Rolex con una experiencia de usuario premium y animaciones CSS fluidas. Desarrolló un script JS personalizado que admite 7 idiomas.",
        // JS Educational Platform Translation
        eduTitle: "Plataforma Educativa JS",
        eduDesc: "Un panel educativo moderno y adaptativo con filtrado dinámico de cursos, cambio de planes de precios y acordeones de preguntas frecuentes fluidos.",
        // JS Store Translation
        storeTitle: "Tienda Electrónica JS Store",
        storeDesc: "Una tienda online de lujo con soporte bilingüe automático, selector de modo claro/oscuro y carrito de compras interactivo con LocalStorage."
    },
    de: { 
        navHome: "Startseite", navAbout: "Über Mich", navProjects: "Projekte", navContact: "Kontakt",
        btnDirect: "Direktkontakt", btnBrowse: "Projekte Durchsuchen", btnContact: "Kontaktiere Mich Jetzt",
        heroTitle: 'Hallo, ich bin Computer-Ingenieurin <br> <span class="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-200 bg-clip-text text-transparent">Intelligente Softwarelösungen Entwickeln</span>',
        heroDesc: "Willkommen in meinem digitalen Raum. Hier verbinde ich meine Leidenschaft für Technik und Systementwicklung, um robuste, schöne Weboberflächen und Anwendungen zu erstellen, die von ultimativer Präzision inspiriert sind.",
        aboutHeading: "Professionelle Identität", aboutSub: "// Leidenschaft fürs Codieren, Präzision in der Technik",
        aboutBox1Title: "01. Wer ist die Ingenieurin?", aboutBox1Text: "Ich arbeite im Bereich der Computertechnik und -entwicklung und konzentriere mich auf das Schreiben von sauberem, skalierbarem Code, das Entwerfen von Datenbanken und das Erstellen von Full-Stack-Weblösungen.",
        aboutBox2Title: "02. Technische Fähigkeiten", projectsHeading: "Mein Portfolio", projectsSub: "Demnächst.. Die leistungsstärksten Engineering-Projekte werden hier hinzugeprügt",
        pBoxTitle: "Zukünftiges Projekt", pBoxDesc: "Bereit für die Details Ihres nächsten Projekts.",
        contactHeading: "Starten Sie Ihr Projekt Mit Mir", contactSub: "Ich freue mich immer, von Ihnen zu hören und innovative Ideen zu besprechen.",
        cPhone: "Telefonnummer", cEmail: "E-Mail-Adresse", formName: "Name", formEmail: "E-Mail", formMsg: "Nachrichtendetails",
        btnSubmit: "Digitale Nachricht Senden", 
        footerText: "&copy; 2026 ENG/Jaceka Samih. Alle Rechte vorbehalten.",
        langName: "Deutsch", pName: "Ihr vollständiger Name", pMsg: "Schreiben Sie hier Projektdetails...",
        // Rolex Showcase Translation
        rolexTitle: "Rolex Luxus-Showcase",
        rolexDesc: "Eine ansprechende Website im Luxus-Stil, die Rolex-Uhren mit erstklassiger Benutzererfahrung und flüssigen CSS-Animationen präsentiert. Maßgeschneidertes JS-Skript für 7 Sprachen.",
        // JS Educational Platform Translation
        eduTitle: "JS Bildungsplattform",
        eduDesc: "Ein modernes, responsive Bildungs-Dashboard mit dynamischer Kursfilterung, Preisumschaltung und flüssigen FAQ-Akkordeons.",
        // JS Store Translation
        storeTitle: "JS Store Premium E-Commerce",
        storeDesc: "Ein luxuriöser E-Commerce-Shop mit automatischer zweisprachiger Unterstützung, Tag-/Nachtmodus und interaktivem Warenkorb über LocalStorage."
    },
    tr: { 
        navHome: "Ana Sayfa", navAbout: "Hakkımda", navProjects: "Projelerim", navContact: "İletişim",
        btnDirect: "Hızlı İletişim", btnBrowse: "Projelere Göz At", btnContact: "Şimdi İletişime Geç",
        heroTitle: 'Merhaba, Ben Bilgisayar Mühendisiyim <br> <span class="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-200 bg-clip-text text-transparent">Akıllı Yazılım Çözümleri Üretiyorum</span>',
        heroDesc: "Dijital alanıma hoş geldiniz. Burada, en üst düzey hassasiyetten ilham alan güçlü ve güzel web arayüzleri ve uygulamaları oluşturmak için mühendislik ve sistem geliştirme tutkumu birleştiriyorum.",
        aboutHeading: "Profesyonel Kimlik", aboutSub: "// Kodlama tutkusu, mühendislikte hassasiyet",
        aboutBox1Title: "01. Mühendis Kimdir?", aboutBox1Text: "Bilgisayar mühendisliği ve geliştirme alanında çalışıyorum; temiz, ölçeklenebilir kod yazmaya, veri tabanları tasarlamaya ve uçtan uca web çözümesi sunmaya odaklanıyorum.",
        aboutBox2Title: "02. Teknik Yetenekler", projectsHeading: "Portfolyom", projectsSub: "Yakında.. En güçlü mühendislik projeleri burada yer alacak",
        pBoxTitle: "Gelecek Proje", pBoxDesc: "Gelecek projenizin detaylarını barındırmak için hazır alan.",
        contactHeading: "Projenize Benimle Başlayın", contactSub: "Yenilikçi mühendislik fikirlerini tartışmak ve bağlantı kurmaktan her zaman mutluluk duyarım.",
        cPhone: "Telefon Numarası", cEmail: "E-posta Adresi", formName: "İsim", formEmail: "E-posta", formMsg: "Mesaj Detayları",
        btnSubmit: "Dijital Mesaj Gönder", 
        footerText: "&copy; 2026 ENG/Jaceka Samih. Tüm Hakları Saklıdır.",
        langName: "Türkçe", pName: "Adınız Soyadınız", pMsg: "Proje detaylarını buraya yazın...",
        // Rolex Showcase Translation
        rolexTitle: "Rolex Lüks Vitrini",
        rolexDesc: "Rolex saatlerini birinci sınıf kullanıcı deneyimi ve pürüzsüz CSS animasyonları ile sunan lüks temalı duyarlı web sitesi. 7 dili sorunsuz destekleyen özel JS scripti.",
        // JS Educational Platform Translation
        eduTitle: "JS Eğitim Platformu",
        eduDesc: "Dinamik kurs filtreleme, fiyatlandırma geçişi ve sorunsuz SSS akordeonları içeren modern, duyarlı bir eğitim paneli.",
        // JS Store Translation
        storeTitle: "JS Store Premium E-Ticaret",
        storeDesc: "Lüks tasarımlı e-ticaret mağazası. İki dilli destek, akıllı tema değiştirici (Koyu / Açık Mod) ve LocalStorage destekli dinamik sepet sunar."
    },
    it: { 
        navHome: "Home", navAbout: "Chi Sono", navProjects: "Progetti", navContact: "Contatti",
        btnDirect: "Contatto Rapido", btnBrowse: "Sfoglia i Progetti", btnContact: "Contattami Ora",
        heroTitle: 'Ciao, sono un Ingegnere Informatico <br> <span class="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-200 bg-clip-text text-transparent">Creo Soluzioni Software Intelligenti</span>',
        heroDesc: "Benvenuto nel mio spazio digitale. Qui fondo la mia passione per l'ingegneria e lo sviluppo di sistemi per costruire interfacce web e applicazioni robuste e splendide, ispirate alla massima precisione.",
        aboutHeading: "Identità Professionale", aboutSub: "// Passione per il codice, precisione nell'ingegneria",
        aboutBox1Title: "01. Chi è l'Ingegnere?", aboutBox1Text: "Lavoro nel campo dell'ingegneria informatica e dello sviluppo, concentrandomi sulla scrittura di codice pulito e scalabile, sulla progettazione dei database e sulla creazione di soluzioni web complete.",
        aboutBox2Title: "02. Competenze Tecniche", projectsHeading: "Il Mio Portfolio", projectsSub: "Prossimamente.. I progetti ingegneristici più potenti saranno aggiunti qui",
        pBoxTitle: "Progetto Futuro", pBoxDesc: "Spazio pronto per ospitare i dettagli del tuo prossimo progetto.",
        contactHeading: "Inizia Il Tuo Progetto Con Me", contactSub: "Sono sempre felice di connettermi e discutere idee ingegneristiche innovative.",
        cPhone: "Numero di Telefono", cEmail: "Indirizzo Email", formName: "Nome", formEmail: "Email", formMsg: "Dettagli del Messaggio",
        btnSubmit: "Invia Messaggio Digitale", 
        footerText: "&copy; 2026 ENG/Jaceka Samih. Tutti i diritti riservati.",
        langName: "Italiano", pName: "Il Tuo Nome Completo", pMsg: "Scrivi qui i dettagli del progetto...",
        // Rolex Showcase Translation
        rolexTitle: "Vetrina di Lusso Rolex",
        rolexDesc: "Un sito web responsive a tema di lusso che mostra gli orologi Rolex con un'esperienza utente premium e animazioni CSS fluide. Sviluppato uno script JS personalizzato che supporta 7 lingue.",
        // JS Educational Platform Translation
        eduTitle: "Piattaforma Educativa JS",
        eduDesc: "Una dashboard educativa moderna e responsive con filtraggio dinamico dei corsi, commutazione dei prezzi e fluidi accordion per le FAQ.",
        // JS Store Translation
        storeTitle: "E-Commerce di Lusso JS Store",
        storeDesc: "Un negozio online completo con supporto bilingue automatico, cambio modalità chiaro/scuro e carrello interattivo gestito tramite LocalStorage."
    }
};

// 4. الدالة المسؤولة عن تغيير اللغة وتطبيقها
function changeLanguage(lang) {
    const data = translations[lang];
    const htmlTag = document.getElementById('html-tag');
    
    if (!data) return;

    // حفظ اللغة المختارة في ذاكرة المتصفح
    localStorage.setItem('preferredLanguage', lang);

    // ضبط اتجاه الصفحة (العربية فقط RTL، وباقي اللغات LTR)
    if (lang === 'ar') {
        htmlTag.setAttribute('dir', 'rtl');
        htmlTag.setAttribute('lang', 'ar');
    } else {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', lang);
    }

    // ترجمة العناصر التي تحمل كود data-i18n تلقائياً
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (data[key]) element.textContent = data[key];
    });

    // ترجمة النصوص الخاصة والنصوص المدمجة بـ HTML
    if(data.heroTitle && document.getElementById('hero-title')) document.getElementById('hero-title').innerHTML = data.heroTitle;
    if(data.heroDesc && document.getElementById('hero-desc')) document.getElementById('hero-desc').textContent = data.heroDesc;
    if(data.aboutSub && document.getElementById('about-sub')) document.getElementById('about-sub').textContent = data.aboutSub;
    if(data.aboutBox1Text && document.getElementById('about-box1-text')) document.getElementById('about-box1-text').textContent = data.aboutBox1Text;
    if(data.projectsSub && document.getElementById('projects-sub')) document.getElementById('projects-sub').textContent = data.projectsSub;
    if(data.contactSub && document.getElementById('contact-sub')) document.getElementById('contact-sub').textContent = data.contactSub;
    if(data.footerText && document.getElementById('footer-text')) document.getElementById('footer-text').innerHTML = data.footerText;

    // تغيير الـ Placeholders في الحقول
    if(document.getElementById('input-name')) document.getElementById('input-name').placeholder = data.pName;
    if(document.getElementById('input-msg')) document.getElementById('input-msg').placeholder = data.pMsg;

    // تحديث اسم اللغة الظاهر على الزر العلوي
    if(document.getElementById('current-lang-text')) document.getElementById('current-lang-text').textContent = data.langName;

    // تحديث نصوص مشروع منصة JS التعليمية الجديد ديناميكياً عند التبديل
    if(data.eduTitle && document.querySelector('[data-i18n="eduTitle"]')) document.querySelector('[data-i18n="eduTitle"]').textContent = data.eduTitle;
    if(data.eduDesc && document.querySelector('[data-i18n="eduDesc"]')) document.querySelector('[data-i18n="eduDesc"]').textContent = data.eduDesc;

    // تحديث نصوص مشروع المتجر الفاخر الجديد ديناميكياً عند التبديل
    if(data.storeTitle && document.querySelector('[data-i18n="storeTitle"]')) document.querySelector('[data-i18n="storeTitle"]').textContent = data.storeTitle;
    if(data.storeDesc && document.querySelector('[data-i18n="storeDesc"]')) document.querySelector('[data-i18n="storeDesc"]').textContent = data.storeDesc;
}

// 5. فحص الذاكرة وتطبيق اللغة فور فتح الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'ar';
    changeLanguage(savedLang);
});