(function (global) {
  "use strict";

  var dict = {
    uz: {
      nav: {
        results: "Natijalar",
        projects: "Loyihalar",
        methodology: "Metodika",
        cta: "Konsultatsiya",
      },
      hero: {
        eyebrow: "TOSHKENT · PREMIUM RENOVATSIYA",
        headline_pre: "Uyingizni ",
        headline_em: "hayot tarzingizga",
        headline_post: " mos qilamiz.",
        sub: "G'oyadan kalitgacha — sizning estetikangiz, odatlaringiz va kelajagingiz uchun yaratilgan makon.",
        cta: "Loyihani muhokama qilish",
      },
      stats: {
        heading_light: "Raqamlar his-tuyg'ularni emas, ",
        heading_bold: "natijalarni ko'rsatadi",
        stat1_label: "Topshirilgan loyihalar",
        stat2_label: "Bozordagi tajriba",
        stat2_suffix: " yil",
        stat3_label: "Boshqarilgan qurilish byudjeti",
        kim_uchun_label: "Kimlar uchun ishlaymiz",
        persona1_title: "Villa va hovli uyi egalari",
        persona1_desc: "O'z vaqtini qadrlaydigan, natijani ham, jarayonni ham nazorat qilishni xohlaydigan mijozlar uchun.",
        persona2_title: "Biznes va ofis egalari",
        persona2_desc: "Ish jarayonini to'xtatmasdan, muddatida va byudjet doirasida makonni yangilamoqchi bo'lganlar uchun.",
        persona3_title: "Yangi uyga ko'chayotganlar",
        persona3_desc: "Kalitni topshirishdan avval uyni to'liq tayyor holatda qabul qilishni xohlaydiganlar uchun.",
      },
      results: {
        label: "Portfolio",
        heading: "Bizning natijalarimiz",
        sub: "Har bir loyiha — mijozning turmush tarziga moslashtirilgan yakuniy yechim.",
        filter_all: "Barchasi",
        filter_villa: "Villa",
        filter_apartment: "Kvartira",
        filter_office: "Ofis",
        view: "Ko'rish",
        p1_name: "Qorasoy villasi",
        p1_meta: "420 m² · 7 oy",
        p2_name: "Tashkent City kvartirasi",
        p2_meta: "180 m² · 4 oy",
        p3_name: "Yunusobod ofis majmuasi",
        p3_meta: "650 m² · 5 oy",
        p4_name: "Magic City penthausi",
        p4_meta: "260 m² · 6 oy",
        p5_name: "Darxon hovli uyi",
        p5_meta: "510 m² · 8 oy",
        p6_name: "Mirzo Ulug'bek showroom",
        p6_meta: "300 m² · 3 oy",
        cat_villa: "Villa",
        cat_apartment: "Kvartira",
        cat_office: "Ofis",
      },
      video: {
        label: "Jarayon",
        heading: "Video portfolio",
        sub: "Loyihalarimizning jonli jarayoni va yakuniy natijasi.",
        v1: "Qorasoy villasi",
        v2: "Tashkent City",
        v3: "Penthaus",
        v4: "Ofis dizayni",
      },
      testimonials: {
        heading_light: "Mijozlarimizdan ",
        heading_bold: "haqiqiy fikrlar",
        t1_quote: "Sunnat va jamoasi bilan ishlash juda qulay bo'ldi — har bir bosqich oldindan aniq, smeta oxirigacha o'zgarmadi.",
        t1_name: "Aziz Karimov",
        t1_role: "Qorasoy villasi egasi",
        t2_quote: "Men chet elda yashayman, lekin loyiha jarayonini onlayn to'liq nazorat qila oldim. Natija kutganimdan ham yaxshi chiqdi.",
        t2_name: "Dilnoza Yusupova",
        t2_role: "Tashkent City, kvartira egasi",
        t3_quote: "Ofisimiz ish faoliyatini to'xtatmasdan yangilandi. Muddat va byudjet aniq bajarildi.",
        t3_name: "Bekzod Nazarov",
        t3_role: "Biznes markaz egasi",
        t4_quote: "Har bir detalga e'tibor — bu SABB BUILDING'ni boshqalardan ajratib turadi.",
        t4_name: "Madina Saidova",
        t4_role: "Darxon, hovli uyi egasi",
        t5_quote: "Dizayn-loyihadan tortib oxirgi mixgacha — barchasi kelishilganidek bajarildi. Juda mamnunman.",
        t5_name: "Nodira Ergasheva",
        t5_role: "Yunusobod, kvartira egasi",
        t6_quote: "Savdo majmuamizni qisqa muddatda zamonaviy holga keltirishdi. Jamoaning professionalligi ajoyib.",
        t6_name: "Jasur Toshpulatov",
        t6_role: "Savdo majmuasi egasi",
      },
      methodology: {
        label: "Jarayon",
        heading: "Bizning metodika",
        sub: "5 bosqichda — g'oyadan kalitgacha.",
        s1_title: "Konsultatsiya va smeta",
        s1_desc: "Uyingiz va byudjetingizni tahlil qilamiz, aniq smeta va muddatni taqdim etamiz.",
        s2_title: "Dizayn-loyiha",
        s2_desc: "3D vizualizatsiya va material tanlovi orqali yakuniy natijani oldindan ko'rasiz.",
        s3_title: "Shartnoma va rejalashtirish",
        s3_desc: "Barcha shartlar qog'ozda qat'iy belgilanadi — narx va muddat o'zgarmaydi.",
        s4_title: "Nazorat ostida qurilish",
        s4_desc: "Har bir bosqich sifat nazorati va muntazam hisobotlar bilan olib boriladi.",
        s5_title: "Topshirish va kafolat",
        s5_desc: "Uyingizni to'liq tayyor holatda, kafolat hujjatlari bilan topshiramiz.",
      },
      pricing: {
        label: "Tariflar",
        heading: "Tariflar va xizmatlarimiz",
        sub: "Har bir loyiha individual — quyida boshlang'ich narxlar keltirilgan.",
        tier1_name: "Neo Classic",
        tier1_price: "$300",
        tier1_suffix: "/m² dan",
        tier1_desc: "Sifatli ta'mir, ishonchli materiallar",
        tier1_f1: "Dizayn-loyiha",
        tier1_f2: "Elektr va santexnika ishlari",
        tier1_f3: "Devor va shift ishlari",
        tier1_f4: "12 oy kafolat",
        tier2_badge: "Ommabop",
        tier2_name: "High Tech",
        tier2_price: "$350",
        tier2_suffix: "/m² dan",
        tier2_desc: "Eng ko'p tanlanadigan tarif",
        tier2_f1: "Individual dizayn-loyiha",
        tier2_f2: "Premium materiallar",
        tier2_f3: "Mebel va yoritish loyihasi",
        tier2_f4: "24 oy kafolat",
        tier2_f5: "Shaxsiy loyiha menejeri",
        tier3_name: "Classic",
        tier3_price: "$450",
        tier3_suffix: "/m² dan",
        tier3_desc: "Klassik uslubdagi hashamatli ta'mir",
        tier3_f1: "Individual klassik dizayn-loyiha",
        tier3_f2: "Bezakli gips va lepnina elementlari",
        tier3_f3: "Yog'och panel va mebel loyihasi",
        tier3_f4: "30 oy kafolat",
        tier3_f5: "Shaxsiy loyiha menejeri",
        tier4_name: "Lux",
        tier4_price: "Individual",
        tier4_suffix: "",
        tier4_desc: "To'liq maxfiy, yuqori toifadagi ob'ektlar uchun",
        tier4_f1: "Ekskluziv dizayn va arxitektura",
        tier4_f2: "Premium va import materiallar",
        tier4_f3: "Aqlli uy tizimlari",
        tier4_f4: "36 oy kafolat",
        tier4_f5: "To'liq loyiha boshqaruvi",
        cta: "Smeta olish",
        note: "* Yakuniy narx obyekt holati va tanlangan materiallarga qarab belgilanadi.",
      },
      guarantee: {
        label: "Kafolat",
        heading: "Kafolatimiz",
        sub: "Ishonch — bizning ishimiz asosi.",
        g1_title: "24 oygacha kafolat",
        g1_desc: "Barcha ishlarga yozma kafolat beramiz.",
        g2_title: "Qat'iy narx",
        g2_desc: "Shartnomada belgilangan narx loyiha davomida o'zgarmaydi.",
        g3_title: "Muddatida topshirish",
        g3_desc: "Kechikish holatida shartnoma bo'yicha jarima to'lanadi.",
        g4_title: "Litsenziyalangan jamoa",
        g4_desc: "Barcha mutaxassislar rasmiy tajriba va sertifikatlarga ega.",
      },
      faq: {
        label: "Savollar",
        heading: "Ko'p beriladigan savollar",
        q1: "Ta'mir narxi qanday shakllanadi?",
        a1: "Narx obyekt maydoni, ishlar hajmi va tanlangan materiallar darajasiga qarab belgilanadi. Bepul konsultatsiyadan so'ng aniq smeta taqdim etamiz.",
        q2: "Loyiha necha oyda yakunlanadi?",
        a2: "O'rtacha 180 m² kvartira uchun 3-4 oy, 400+ m² villa uchun 6-8 oy vaqt talab qilinadi. Aniq muddat shartnomada belgilanadi.",
        q3: "Qaysi hududlarda ishlaysizlar?",
        a3: "Toshkent shahri va viloyati bo'ylab barcha obyektlarda ishlaymiz.",
        q4: "To'lov qanday bosqichlarda amalga oshiriladi?",
        a4: "To'lov loyiha bosqichlariga bog'liq holda 3-4 qismga bo'linadi, har bir bosqich yakunlangach amalga oshiriladi.",
        q5: "Materiallarni o'zim tanlashim mumkinmi?",
        a5: "Albatta. Dizayner bilan birgalikda materiallarni tanlaysiz, biz tavsiya va sifat nazoratini ta'minlaymiz.",
        q6: "Kafolat qancha muddatga beriladi?",
        a6: "Tanlangan tarifga qarab 12 dan 36 oygacha yozma kafolat beramiz.",
        q7: "Jarayonni masofadan kuzatish mumkinmi?",
        a7: "Ha, har bir bosqich bo'yicha foto-video hisobot va shaxsiy loyiha menejeri orqali onlayn kuzatishingiz mumkin.",
      },
      cta: {
        label: "Aloqa",
        heading: "Loyihangizni muhokama qilaylik",
        sub: "Formani to'ldiring — 24 soat ichida siz bilan bog'lanamiz va bepul konsultatsiya beramiz.",
        name_label: "Ismingiz",
        name_placeholder: "Ismingizni kiriting",
        phone_label: "Telefon raqamingiz",
        phone_placeholder: "+998 90 123 45 67",
        service_label: "Xizmat turi",
        service_placeholder: "Tanlang",
        service_option1: "Villa / hovli uyi ta'miri",
        service_option2: "Kvartira ta'miri",
        service_option3: "Ofis / tijorat maydoni",
        service_option4: "Boshqa",
        message_label: "Xabar (ixtiyoriy)",
        message_placeholder: "Loyihangiz haqida qisqacha yozing",
        submit: "Yuborish",
        submitting: "Yuborilmoqda...",
        success: "Rahmat! So'rovingiz qabul qilindi, tez orada bog'lanamiz.",
        error: "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring yoki bevosita qo'ng'iroq qiling.",
        error_required: "Iltimos, ism va telefon raqamingizni kiriting.",
        direct_label: "yoki to'g'ridan-to'g'ri bog'laning",
        phone_display: "+998 90 123 45 67",
        telegram_display: "@sabbbuilding",
      },
      footer: {
        tagline: "Premium ta'mir — kalitdan kalitgacha.",
        copyright: "SABB BUILDING. Barcha huquqlar himoyalangan.",
      },
    },
    ru: {
      nav: {
        results: "Результаты",
        projects: "Проекты",
        methodology: "Методика",
        cta: "Консультация",
      },
      hero: {
        eyebrow: "ТАШКЕНТ · ПРЕМИУМ РЕМОНТ",
        headline_pre: "Мы создаём дом ",
        headline_em: "под ваш образ жизни",
        headline_post: ".",
        sub: "От идеи до ключа — пространство, созданное под вашу эстетику, привычки и будущее.",
        cta: "Обсудить проект",
      },
      stats: {
        heading_light: "Цифры говорят не об эмоциях, ",
        heading_bold: "а о результате",
        stat1_label: "Завершённых проектов",
        stat2_label: "Лет на рынке",
        stat2_suffix: " лет",
        stat3_label: "Управляемый бюджет строительства",
        kim_uchun_label: "Для кого мы работаем",
        persona1_title: "Владельцы вилл и частных домов",
        persona1_desc: "Для тех, кто ценит своё время и хочет контролировать не только результат, но и сам процесс.",
        persona2_title: "Владельцы бизнеса и офисов",
        persona2_desc: "Для тех, кто хочет обновить пространство в срок и в рамках бюджета, не останавливая работу.",
        persona3_title: "Те, кто переезжает в новый дом",
        persona3_desc: "Для тех, кто хочет принять дом в полностью готовом виде ещё до передачи ключей.",
      },
      results: {
        label: "Портфолио",
        heading: "Наши результаты",
        sub: "Каждый проект — законченное решение, адаптированное под образ жизни клиента.",
        filter_all: "Все",
        filter_villa: "Вилла",
        filter_apartment: "Квартира",
        filter_office: "Офис",
        view: "Смотреть",
        p1_name: "Вилла Корасув",
        p1_meta: "420 м² · 7 мес.",
        p2_name: "Квартира Tashkent City",
        p2_meta: "180 м² · 4 мес.",
        p3_name: "Офисный комплекс Юнусабад",
        p3_meta: "650 м² · 5 мес.",
        p4_name: "Пентхаус Magic City",
        p4_meta: "260 м² · 6 мес.",
        p5_name: "Дом в Дархане",
        p5_meta: "510 м² · 8 мес.",
        p6_name: "Шоурум Мирзо Улугбек",
        p6_meta: "300 м² · 3 мес.",
        cat_villa: "Вилла",
        cat_apartment: "Квартира",
        cat_office: "Офис",
      },
      video: {
        label: "Процесс",
        heading: "Видео портфолио",
        sub: "Живой процесс и итоговый результат наших проектов.",
        v1: "Вилла Корасув",
        v2: "Tashkent City",
        v3: "Пентхаус",
        v4: "Дизайн офиса",
      },
      testimonials: {
        heading_light: "Реальные отзывы ",
        heading_bold: "наших клиентов",
        t1_quote: "Работать с Суннатом и его командой было очень комфортно — каждый этап был понятен заранее, смета не менялась до конца.",
        t1_name: "Азиз Каримов",
        t1_role: "Владелец виллы Корасув",
        t2_quote: "Я живу за границей, но смог полностью контролировать процесс онлайн. Результат превзошёл ожидания.",
        t2_name: "Дилноза Юсупова",
        t2_role: "Владелица квартиры, Tashkent City",
        t3_quote: "Наш офис обновили без остановки работы. Сроки и бюджет были выполнены точно.",
        t3_name: "Бекзод Назаров",
        t3_role: "Владелец бизнес-центра",
        t4_quote: "Внимание к каждой детали — вот что отличает SABB BUILDING от остальных.",
        t4_name: "Мадина Саидова",
        t4_role: "Владелица дома, Дархан",
        t5_quote: "От дизайн-проекта до последнего гвоздя — всё было выполнено точно так, как договаривались. Очень довольна.",
        t5_name: "Нодира Эргашева",
        t5_role: "Юнусабад, владелица квартиры",
        t6_quote: "Наш торговый комплекс привели в современный вид в короткие сроки. Профессионализм команды впечатляет.",
        t6_name: "Джасур Тошпулатов",
        t6_role: "Владелец торгового комплекса",
      },
      methodology: {
        label: "Процесс",
        heading: "Наша методика",
        sub: "5 этапов — от идеи до ключа.",
        s1_title: "Консультация и смета",
        s1_desc: "Анализируем ваш дом и бюджет, предоставляем точную смету и сроки.",
        s2_title: "Дизайн-проект",
        s2_desc: "3D-визуализация и подбор материалов — вы видите результат заранее.",
        s3_title: "Договор и планирование",
        s3_desc: "Все условия фиксируются на бумаге — цена и сроки не меняются.",
        s4_title: "Строительство под контролем",
        s4_desc: "Каждый этап проходит контроль качества и регулярную отчётность.",
        s5_title: "Сдача и гарантия",
        s5_desc: "Передаём дом в полностью готовом виде вместе с гарантийными документами.",
      },
      pricing: {
        label: "Тарифы",
        heading: "Тарифы и услуги",
        sub: "Каждый проект индивидуален — ниже указаны стартовые цены.",
        tier1_name: "Neo Classic",
        tier1_price: "$300",
        tier1_suffix: "/м² от",
        tier1_desc: "Качественный ремонт, надёжные материалы",
        tier1_f1: "Дизайн-проект",
        tier1_f2: "Электрика и сантехника",
        tier1_f3: "Стены и потолки",
        tier1_f4: "Гарантия 12 месяцев",
        tier2_badge: "Популярный",
        tier2_name: "High Tech",
        tier2_price: "$350",
        tier2_suffix: "/м² от",
        tier2_desc: "Самый востребованный тариф",
        tier2_f1: "Индивидуальный дизайн-проект",
        tier2_f2: "Премиальные материалы",
        tier2_f3: "Проект мебели и освещения",
        tier2_f4: "Гарантия 24 месяца",
        tier2_f5: "Личный менеджер проекта",
        tier3_name: "Classic",
        tier3_price: "$450",
        tier3_suffix: "/м² от",
        tier3_desc: "Роскошный ремонт в классическом стиле",
        tier3_f1: "Индивидуальный классический дизайн-проект",
        tier3_f2: "Лепнина и декоративная штукатурка",
        tier3_f3: "Деревянные панели и проект мебели",
        tier3_f4: "Гарантия 30 месяцев",
        tier3_f5: "Личный менеджер проекта",
        tier4_name: "Люкс",
        tier4_price: "Индивидуально",
        tier4_suffix: "",
        tier4_desc: "Полностью конфиденциально, для объектов высокого класса",
        tier4_f1: "Эксклюзивный дизайн и архитектура",
        tier4_f2: "Премиальные импортные материалы",
        tier4_f3: "Системы умного дома",
        tier4_f4: "Гарантия 36 месяцев",
        tier4_f5: "Полное управление проектом",
        cta: "Получить смету",
        note: "* Итоговая цена зависит от состояния объекта и выбранных материалов.",
      },
      guarantee: {
        label: "Гарантия",
        heading: "Наши гарантии",
        sub: "Доверие — основа нашей работы.",
        g1_title: "Гарантия до 24 месяцев",
        g1_desc: "Предоставляем письменную гарантию на все виды работ.",
        g2_title: "Фиксированная цена",
        g2_desc: "Цена, указанная в договоре, не меняется на протяжении всего проекта.",
        g3_title: "Сдача в срок",
        g3_desc: "При задержке выплачивается неустойка согласно договору.",
        g4_title: "Лицензированная команда",
        g4_desc: "Все специалисты имеют официальный опыт и сертификаты.",
      },
      faq: {
        label: "Вопросы",
        heading: "Часто задаваемые вопросы",
        q1: "Как формируется цена ремонта?",
        a1: "Цена зависит от площади объекта, объёма работ и уровня выбранных материалов. После бесплатной консультации мы предоставим точную смету.",
        q2: "Сколько месяцев занимает проект?",
        a2: "В среднем квартира 180 м² занимает 3-4 месяца, вилла от 400 м² — 6-8 месяцев. Точный срок фиксируется в договоре.",
        q3: "В каких районах вы работаете?",
        a3: "Мы работаем по всему Ташкенту и Ташкентской области.",
        q4: "Как происходит оплата?",
        a4: "Оплата делится на 3-4 этапа в зависимости от стадий проекта, каждый — после завершения соответствующего этапа.",
        q5: "Могу ли я сам выбрать материалы?",
        a5: "Конечно. Вы выбираете материалы вместе с дизайнером, мы обеспечиваем рекомендации и контроль качества.",
        q6: "На какой срок даётся гарантия?",
        a6: "В зависимости от выбранного тарифа — от 12 до 36 месяцев письменной гарантии.",
        q7: "Можно ли следить за процессом удалённо?",
        a7: "Да, вы получаете фото-видео отчёты по каждому этапу и можете следить онлайн через личного менеджера проекта.",
      },
      cta: {
        label: "Контакты",
        heading: "Обсудим ваш проект",
        sub: "Заполните форму — мы свяжемся с вами в течение 24 часов и проведём бесплатную консультацию.",
        name_label: "Ваше имя",
        name_placeholder: "Введите ваше имя",
        phone_label: "Номер телефона",
        phone_placeholder: "+998 90 123 45 67",
        service_label: "Тип услуги",
        service_placeholder: "Выберите",
        service_option1: "Ремонт виллы / частного дома",
        service_option2: "Ремонт квартиры",
        service_option3: "Офис / коммерческое помещение",
        service_option4: "Другое",
        message_label: "Сообщение (необязательно)",
        message_placeholder: "Кратко расскажите о вашем проекте",
        submit: "Отправить",
        submitting: "Отправка...",
        success: "Спасибо! Ваша заявка принята, мы скоро свяжемся с вами.",
        error: "Произошла ошибка. Пожалуйста, попробуйте снова или позвоните напрямую.",
        error_required: "Пожалуйста, укажите имя и номер телефона.",
        direct_label: "или свяжитесь напрямую",
        phone_display: "+998 90 123 45 67",
        telegram_display: "@sabbbuilding",
      },
      footer: {
        tagline: "Премиум ремонт — под ключ.",
        copyright: "SABB BUILDING. Все права защищены.",
      },
    },
  };

  var STORAGE_KEY = "sabb_lang";
  var DEFAULT_LANG = "uz";

  function getStoredLang() {
    try {
      return global.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      global.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
  }

  function resolve(path, lang) {
    var parts = path.split(".");
    var node = dict[lang];
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return null;
      node = node[parts[i]];
    }
    return node;
  }

  function applyLanguage(lang) {
    if (!dict[lang]) lang = DEFAULT_LANG;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = resolve(el.getAttribute("data-i18n"), lang);
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var value = resolve(el.getAttribute("data-i18n-placeholder"), lang);
      if (value != null) el.setAttribute("placeholder", value);
    });

    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-lang-btn]").forEach(function (el) {
      var isActive = el.getAttribute("data-lang-btn") === lang;
      el.classList.toggle("text-accent", isActive);
      el.classList.toggle("text-ink/40", !isActive);
      el.classList.toggle("text-cream", isActive && el.hasAttribute("data-lang-on-dark"));
      el.classList.toggle("text-cream/40", !isActive && el.hasAttribute("data-lang-on-dark"));
    });

    storeLang(lang);
    global.SABB_CURRENT_LANG = lang;
    document.dispatchEvent(new CustomEvent("sabb:langchange", { detail: { lang: lang } }));
  }

  function initLangSwitcher() {
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang-btn"));
      });
    });
  }

  function t(path) {
    var lang = global.SABB_CURRENT_LANG || DEFAULT_LANG;
    return resolve(path, lang) || "";
  }

  global.SABB_I18N = {
    dict: dict,
    applyLanguage: applyLanguage,
    initLangSwitcher: initLangSwitcher,
    getStoredLang: getStoredLang,
    t: t,
    DEFAULT_LANG: DEFAULT_LANG,
  };
})(window);
