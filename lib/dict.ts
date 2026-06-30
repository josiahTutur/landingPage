export type Lang = "en" | "ms";

/* Copy in both languages. Malay is BM-first, warm and parent-appropriate —
   matching tutur's own voice. Kept deliberately short: lead with feeling,
   let images and whitespace carry the rest. */
export const dict = {
  en: {
    nav: {
      how: "How it works",
      why: "Why tutur",
      cues: "The cues",
      pilot: "The pilot",
      cta: "Join the pilot",
    },
    hero: {
      eyebrow: "Pilot programme — now open",
      headPre: "Help your child",
      headAccent: "find their words.",
      lede: "Coaching that helps you grow your child's speech — at home.",
      ledeYou: "you",
      statBig: "167 hours",
      statSmall:
        "a week at home, where words really grow. Therapy is just one.",
      ctaPrimary: "Join the pilot",
      ctaGhost: "See how it works",
      reassure: ["Free for pilot families", "Limited places", "Therapist-guided"],
      bubbles: { win1: "good talking!", win2: "first word!" },
      chips: { firstWordTag: "first word", newTodayTag: "new today" },
    },
    langs: { label: "In your home language" },
    thesis: {
      a: "Connection first.",
      b: "Communication next.",
      c: "It begins the moment you meet your child at eye level.",
    },
    how: {
      eyebrow: "How it works",
      title: "Three small steps, woven into your day.",
      intro: "No clinic queues, no jargon — just moments you already have.",
      steps: [
        {
          n: "STEP 01",
          h: "Tell us about your child",
          p: "A few gentle questions about how they communicate today.",
        },
        {
          n: "STEP 02",
          h: "Get a plan made for them",
          p: "A personalised weekly plan, in your family's language.",
        },
        {
          n: "STEP 03",
          h: "Practise & watch words grow",
          p: "Tiny activities at mealtimes, play and bedtime.",
        },
      ],
    },
    why: {
      eyebrow: "Why tutur",
      title: "Made for real Malaysian homes.",
      intro: "Built with speech therapists, for how families here really live.",
      cards: [
        {
          h: "Guided by speech therapists",
          p: "Grounded in speech-language pathology, made parent-friendly.",
        },
        {
          h: "In your family's languages",
          p: "Malay, English, Mandarin or Tamil — code-switching welcome.",
        },
        {
          h: "Built into daily life",
          p: "A few minutes a day. No appointments, no travel.",
        },
        {
          h: "Yours and private",
          p: "Your child's data stays with your family. Never sold.",
        },
      ],
    },
    cues: {
      eyebrow: "The tutur cues",
      title: "Five simple cues you'll use every day.",
      intro: "One friendly icon per habit — so you always know the next move.",
      items: [
        { emoji: "👁️", word: "Tengok", sub: "Look" },
        { emoji: "👂", word: "Perhati", sub: "Notice" },
        { emoji: "⏳", word: "Dengar", sub: "Wait & listen" },
        { emoji: "🤝", word: "Hubung", sub: "Meet at eye level" },
        { emoji: "💬", word: "Tutur", sub: "Speak" },
      ],
    },
    testimonial: {
      eyebrow: "From a pilot family",
      quote: "I finally understand what my child was trying to tell me.",
      name: "Nurul",
      role: "mother of two · Shah Alam",
      photoHint: "Parent portrait — warm, candid, looking at camera",
    },
    pilot: {
      eyebrow: "Join the pilot",
      title: "Be one of the first families.",
      intro:
        "We're opening tutur to a small group of Malaysian families this year. Leave your details and we'll send your invite.",
      benefits: [
        { b: "Early access", rest: " to the full app, free during the pilot." },
        { b: "Shape the app", rest: " — your feedback guides what we build." },
        { b: "Real support", rest: " for your child from day one." },
      ],
      form: {
        name: "Parent / guardian name",
        namePh: "e.g. Aisyah Rahman",
        email: "Email",
        emailPh: "you@email.com",
        phone: "WhatsApp number",
        phonePh: "012-345 6789",
        age: "Child's age",
        agePh: "Select age",
        ageOpts: [
          "Under 1 year",
          "1 year",
          "2 years",
          "3 years",
          "4 years",
          "5 years",
          "6 years or older",
        ],
        lang: "Main language at home",
        langPh: "Select language",
        langOpts: [
          "Bahasa Melayu",
          "English",
          "Mandarin / 华语",
          "Tamil / தமிழ்",
          "More than one",
        ],
        hopes: "What are you hoping tutur can help with?",
        optional: "(optional)",
        hopesPh:
          "e.g. My 2-year-old understands a lot but isn't saying many words yet.",
        consent:
          "I'd like tutur to contact me about the pilot by email or WhatsApp.",
        submit: "Request my pilot invite",
        note: "We'll only use your details for the tutur pilot. No spam, ever.",
        errors: {
          name: "Please tell us your name.",
          email: "Enter a valid email.",
          phone: "Add a number we can reach you on.",
          age: "Choose your child's age.",
          lang: "Let us know your home language.",
          consent: "Please tick the box so we can reach you.",
        },
        successTitle: "You're on the list!",
        successBody:
          "We'll be in touch soon with your pilot invite. Terima kasih — we can't wait to help your little one find their words.",
      },
    },
    footer: {
      tagline: "Communication support for Malaysian families. © 2026 tutur.",
      links: { how: "How it works", pilot: "Join the pilot" },
    },
  },

  ms: {
    nav: {
      how: "Cara ia berfungsi",
      why: "Kenapa tutur",
      cues: "Isyarat tutur",
      pilot: "Program perintis",
      cta: "Sertai perintis",
    },
    hero: {
      eyebrow: "Program perintis — kini dibuka",
      headPre: "Bantu anak anda",
      headAccent: "temui kata-kata mereka.",
      lede: "Bimbingan untuk anda menyokong pertuturan anak — di rumah.",
      ledeYou: "anda",
      statBig: "167 jam",
      statSmall:
        "seminggu di rumah, tempat kata-kata berkembang. Terapi hanya satu.",
      ctaPrimary: "Sertai perintis",
      ctaGhost: "Lihat caranya",
      reassure: [
        "Percuma untuk keluarga perintis",
        "Tempat terhad",
        "Dibimbing ahli terapi",
      ],
      bubbles: { win1: "bagus bercakap!", win2: "perkataan pertama!" },
      chips: { firstWordTag: "perkataan pertama", newTodayTag: "baru hari ini" },
    },
    langs: { label: "Dalam bahasa rumah anda" },
    thesis: {
      a: "Hubungan dahulu.",
      b: "Komunikasi kemudian.",
      c: "Ia bermula saat anda bertentang mata dengan anak anda.",
    },
    how: {
      eyebrow: "Cara ia berfungsi",
      title: "Tiga langkah kecil, disulam ke dalam hari anda.",
      intro: "Tiada giliran klinik, tiada istilah rumit — hanya saat yang anda sudah ada.",
      steps: [
        {
          n: "LANGKAH 01",
          h: "Beritahu kami tentang anak anda",
          p: "Beberapa soalan ringkas tentang cara mereka berkomunikasi hari ini.",
        },
        {
          n: "LANGKAH 02",
          h: "Dapatkan pelan khas untuk mereka",
          p: "Pelan mingguan diperibadikan, dalam bahasa keluarga anda.",
        },
        {
          n: "LANGKAH 03",
          h: "Berlatih & lihat kata-kata berkembang",
          p: "Aktiviti kecil ketika makan, bermain dan tidur.",
        },
      ],
    },
    why: {
      eyebrow: "Kenapa tutur",
      title: "Dibina untuk rumah Malaysia sebenar.",
      intro: "Dibangunkan bersama ahli terapi pertuturan, untuk cara keluarga di sini hidup.",
      cards: [
        {
          h: "Dibimbing ahli terapi pertuturan",
          p: "Berasaskan patologi pertuturan, dipermudah untuk ibu bapa.",
        },
        {
          h: "Dalam bahasa keluarga anda",
          p: "Melayu, Inggeris, Mandarin atau Tamil — bebas bertukar bahasa.",
        },
        {
          h: "Disulam ke dalam kehidupan harian",
          p: "Beberapa minit sehari. Tiada temujanji, tiada perjalanan.",
        },
        {
          h: "Milik anda dan peribadi",
          p: "Data anak anda kekal bersama keluarga. Tidak dijual.",
        },
      ],
    },
    cues: {
      eyebrow: "Isyarat tutur",
      title: "Lima isyarat mudah untuk anda guna setiap hari.",
      intro: "Satu ikon mesra untuk setiap tabiat — supaya anda tahu langkah seterusnya.",
      items: [
        { emoji: "👁️", word: "Tengok", sub: "Pandang anak anda" },
        { emoji: "👂", word: "Perhati", sub: "Perhatikan isyaratnya" },
        { emoji: "⏳", word: "Dengar", sub: "Tunggu & dengar" },
        { emoji: "🤝", word: "Hubung", sub: "Bertentang mata" },
        { emoji: "💬", word: "Tutur", sub: "Bertutur bersama" },
      ],
    },
    testimonial: {
      eyebrow: "Daripada keluarga perintis",
      quote: "Akhirnya saya faham apa yang anak saya cuba beritahu.",
      name: "Nurul",
      role: "ibu kepada dua anak · Shah Alam",
      photoHint: "Potret ibu bapa — mesra, candid, memandang kamera",
    },
    pilot: {
      eyebrow: "Sertai perintis",
      title: "Jadilah antara keluarga terawal.",
      intro:
        "Kami membuka tutur kepada sekumpulan kecil keluarga Malaysia tahun ini. Tinggalkan maklumat anda dan kami akan hantar jemputan.",
      benefits: [
        {
          b: "Akses awal",
          rest: " kepada aplikasi penuh, percuma sepanjang perintis.",
        },
        {
          b: "Bentuk aplikasi",
          rest: " — maklum balas anda memandu apa yang kami bina.",
        },
        { b: "Sokongan sebenar", rest: " untuk anak anda dari hari pertama." },
      ],
      form: {
        name: "Nama ibu bapa / penjaga",
        namePh: "cth. Aisyah Rahman",
        email: "E-mel",
        emailPh: "anda@email.com",
        phone: "Nombor WhatsApp",
        phonePh: "012-345 6789",
        age: "Umur anak",
        agePh: "Pilih umur",
        ageOpts: [
          "Bawah 1 tahun",
          "1 tahun",
          "2 tahun",
          "3 tahun",
          "4 tahun",
          "5 tahun",
          "6 tahun atau lebih",
        ],
        lang: "Bahasa utama di rumah",
        langPh: "Pilih bahasa",
        langOpts: [
          "Bahasa Melayu",
          "Bahasa Inggeris",
          "Mandarin / 华语",
          "Tamil / தமிழ்",
          "Lebih daripada satu",
        ],
        hopes: "Apa yang anda harap tutur boleh bantu?",
        optional: "(pilihan)",
        hopesPh:
          "cth. Anak saya berumur 2 tahun memahami banyak perkara tetapi belum bercakap banyak.",
        consent:
          "Saya ingin tutur menghubungi saya tentang perintis melalui e-mel atau WhatsApp.",
        submit: "Mohon jemputan perintis saya",
        note: "Maklumat anda hanya digunakan untuk perintis tutur. Tiada spam, selamanya.",
        errors: {
          name: "Sila beritahu nama anda.",
          email: "Masukkan e-mel yang sah.",
          phone: "Masukkan nombor yang boleh kami hubungi.",
          age: "Pilih umur anak anda.",
          lang: "Beritahu kami bahasa di rumah anda.",
          consent: "Sila tandakan kotak supaya kami boleh menghubungi anda.",
        },
        successTitle: "Anda kini dalam senarai!",
        successBody:
          "Kami akan menghubungi anda tidak lama lagi dengan jemputan perintis. Terima kasih — kami tidak sabar untuk membantu si kecil anda temui kata-kata mereka.",
      },
    },
    footer: {
      tagline: "Sokongan komunikasi untuk keluarga Malaysia. © 2026 tutur.",
      links: { how: "Cara ia berfungsi", pilot: "Sertai perintis" },
    },
  },
};

export type Dict = (typeof dict)["en"];
