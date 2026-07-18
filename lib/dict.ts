export type Lang = "en" | "ms";

/* v2 — "Komunikasi bermula dengan anda" pilot landing page.
   BM-first (default), with a matching English translation. Copy is lifted
   from the approved v2 design; keep it short and warm — the emotion carries. */
export const dict = {
  ms: {
    nav: {
      email: "Email",
      cta: "Daftar Pilot",
    },
    hero: {
      headPre: "Komunikasi bermula",
      headWith: "dengan ",
      headAccent: "anda.",
      alt: "Seorang ibu berhadapan dan bertutur mesra dengan anaknya",
      soundOff: "Hidupkan bunyi",
      soundOn: "Senyapkan",
      fullscreen: "Skrin penuh",
    },
    skill: {
      a: "Tiada keajaiban.",
      bPre: "Cuma ",
      bAccent: "kemahiran",
      bPost: " yang anda boleh belajar",
    },
    community: {
      alt: "Sekumpulan ibu bapa dan fasilitator dalam sesi komuniti Tutur",
      brandA: "Tutur",
      brandB: "getherness",
      line: "Komuniti adalah asas kepada segala yang kami bina.",
    },
    stat: {
      big: "1 daripada 14",
      body:
        "kanak-kanak di seluruh dunia mengalami Kecelaruan Perkembangan Bahasa / Developmental Language Disorder (DLD)",
      source: "Sumber: Norbury CF et al. (2016)",
    },
    dld: {
      body:
        "DLD menyebabkan kanak-kanak sukar memahami dan menggunakan bahasa untuk berkomunikasi, sekali gus memberi kesan kepada pembelajaran, perhubungan dan kehidupan seharian mereka. Namun, ramai kanak-kanak di Malaysia masih mempunyai akses yang terhad kepada terapi dan sokongan yang mereka perlukan.",
      question:
        "Bagaimana jika setiap detik di rumah menjadi peluang untuk membantu anak membina komunikasi?",
    },
    pilot: {
      hello: "hello!",
      title: "Kami sedang bina Tutur App",
      body:
        "Dibina untuk membantu ibu bapa Malaysia menjadi rakan komunikasi anak. Jadilah antara keluarga terawal mencuba Tutur melalui Program Pilot kami.",
      emailPh: "Email",
      submit: "Daftar Pilot",
      note: "Kami hanya akan menghubungi anda tentang Program Pilot Tutur.",
      errEmail: "Sila masukkan email yang sah.",
      successTitle: "Terima kasih!",
      successBody:
        "Anda kini dalam senarai. Kami akan menghubungi anda tidak lama lagi dengan jemputan Program Pilot.",
    },
    contact: {
      title: "Hubungi Kami",
      phoneLabel: "Telefon",
      emailLabel: "Email",
      addressLabel: "Alamat",
      followLabel: "Ikuti kami",
    },
    footer: {
      legal:
        "TUTUR TECHNOLOGIES PLT (202604000984 (LLP0046213-LGN), perusahaan sosial diinkubasi oleh SeedLab, dengan sokongan PETRONAS dan Tata Consultancy Services (TCS) @2026",
    },
  },

  en: {
    nav: {
      email: "Email",
      cta: "Join the Pilot",
    },
    hero: {
      headPre: "Communication begins",
      headWith: "with ",
      headAccent: "you.",
      alt: "A mother facing and speaking warmly with her child",
      soundOff: "Tap for sound",
      soundOn: "Mute",
      fullscreen: "Fullscreen",
    },
    skill: {
      a: "There's no magic.",
      bPre: "Just ",
      bAccent: "skills",
      bPost: " that you can learn",
    },
    community: {
      alt: "A group of parents and facilitators in a Tutur community session",
      brandA: "Tutur",
      brandB: "getherness",
      line: "Community is the foundation of everything we build.",
    },
    stat: {
      big: "1 in 14",
      body:
        "children worldwide have a Developmental Language Disorder (DLD) / Kecelaruan Perkembangan Bahasa",
      source: "Source: Norbury CF et al. (2016)",
    },
    dld: {
      body:
        "DLD makes it hard for children to understand and use language to communicate, affecting their learning, relationships and everyday life. Yet many children in Malaysia still have limited access to the therapy and support they need.",
      question:
        "What if every moment at home became a chance to help your child build communication?",
    },
    pilot: {
      hello: "hello!",
      title: "We're building the Tutur App",
      body:
        "Built to help Malaysian parents become their child's communication partner. Be one of the first families to try Tutur through our Pilot Programme.",
      emailPh: "Email",
      submit: "Join the Pilot",
      note: "We'll only contact you about the Tutur Pilot Programme.",
      errEmail: "Please enter a valid email.",
      successTitle: "Thank you!",
      successBody:
        "You're on the list. We'll be in touch soon with your Pilot Programme invite.",
    },
    contact: {
      title: "Contact Us",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      followLabel: "Follow us",
    },
    footer: {
      legal:
        "TUTUR TECHNOLOGIES PLT (202604000984 (LLP0046213-LGN), a social enterprise incubated by SeedLab, with the support of PETRONAS and Tata Consultancy Services (TCS) @2026",
    },
  },
};

/* Shared, language-independent contact details. */
export const contact = {
  phone: "+60 12 4155 212",
  phoneHref: "tel:+60124155212",
  email: "hello@tutur.my",
  emailHref: "mailto:hello@tutur.my",
  address: [
    "Level 2, Tower 3, Avenue 7 Horizon 2,",
    "Bangsar South City, Bangsar South,",
    "59200 Kuala Lumpur, Malaysia",
  ],
  social: {
    instagram: "https://www.instagram.com/tutur.my",
    facebook: "https://www.facebook.com/share/1BkREVHL1r/",
    tiktok: "https://www.tiktok.com/@tutur_my",
    linkedin: "https://linkedin.com/company/tutur-my",
  },
};

export type Dict = (typeof dict)["en"];
