export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Software Engineer",
      downloadCv: "Download CV",
      contactMe: "Contact Me"
    },
    about: {
      title: "About Me",
      description: "I am a highly motivated and aspiring software engineer, seeking a job opportunity to apply and further develop my skills. I'm a good team worker and always eager to learn more skills to improve the project that I'm working on."
    },
    skills: {
      title: "Skills & Expertise",
      technical: "Technical Skills",
      expertise: "Expertise",
      highlights: "Soft Skills"
    },
    experience: {
      title: "Work Experiences"
    },
    education: {
      title: "Education",
      languages: "Languages"
    },
    volunteer: {
      title: "Volunteer"
    },
    references: {
      title: "References"
    },
    contact: {
      title: "Contact",
      phone: "Phone",
      email: "Email",
      address: "Address",
      portfolio: "Portfolio"
    }
  },
  km: {
    nav: {
      about: "អំពីខ្ញុំ",
      experience: "បទពិសោធន៍",
      skills: "ជំនាញ",
      education: "ការអប់រំ",
      contact: "ទំនាក់ទំនង"
    },
    hero: {
      greeting: "សួស្តី ខ្ញុំគឺ",
      role: "វិស្វករផ្នែកទន់",
      downloadCv: "ទាញយក CV",
      contactMe: "ទំនាក់ទំនងខ្ញុំ"
    },
    about: {
      title: "អំពីខ្ញុំ",
      description: "ខ្ញុំជាវិស្វករផ្នែកទន់ដែលមានការលើកទឹកចិត្តខ្ពស់ និងមានមហិច្ឆតា ស្វែងរកឱកាសការងារដើម្បីអនុវត្ត និងអភិវឌ្ឍជំនាញរបស់ខ្ញុំបន្ថែមទៀត។ ខ្ញុំជាអ្នកធ្វើការជាក្រុមដ៏ល្អម្នាក់ ហើយតែងតែចង់រៀនជំនាញបន្ថែម ដើម្បីកែលម្អគម្រោងដែលខ្ញុំកំពុងធ្វើការ។"
    },
    skills: {
      title: "ជំនាញ និងចំណេះដឹង",
      technical: "ជំនាញបច្ចេកទេស",
      expertise: "ចំណេះដឹង",
      highlights: "ជំនាញទន់"
    },
    experience: {
      title: "បទពិសោធន៍ការងារ"
    },
    education: {
      title: "ការអប់រំ",
      languages: "ភាសា"
    },
    volunteer: {
      title: "ការងារស្ម័គ្រចិត្ត"
    },
    references: {
      title: "ឯកសារយោង"
    },
    contact: {
      title: "ទំនាក់ទំនង",
      phone: "ទូរស័ព្ទ",
      email: "អ៊ីមែល",
      address: "អាសយដ្ឋាន",
      portfolio: "ផលប័ត្រ"
    }
  },
  zh: {
    nav: {
      about: "关于我",
      experience: "工作经验",
      skills: "技能",
      education: "教育背景",
      contact: "联系方式"
    },
    hero: {
      greeting: "你好，我是",
      role: "软件工程师",
      downloadCv: "下载简历",
      contactMe: "联系我"
    },
    about: {
      title: "关于我",
      description: "我是一名积极进取、充满抱负的软件工程师，正在寻找工作机会以应用并进一步发展我的技能。我具有良好的团队合作精神，并始终渴望学习更多技能以改进我正在参与的项目。"
    },
    skills: {
      title: "技能与专长",
      technical: "技术技能",
      expertise: "专业领域",
      highlights: "软技能"
    },
    experience: {
      title: "工作经验"
    },
    education: {
      title: "教育背景",
      languages: "语言能力"
    },
    volunteer: {
      title: "志愿者经历"
    },
    references: {
      title: "推荐人"
    },
    contact: {
      title: "联系方式",
      phone: "电话",
      email: "电子邮件",
      address: "地址",
      portfolio: "作品集"
    }
  }
};

export type Language = 'en' | 'km' | 'zh';
export type TranslationType = typeof translations.en;
