import { Law } from "../../types/law";

const criminalLaws: Law[] = [
  {
    id: "section-375-376",
    title: "Section 375 & 376, IPC - Rape Laws",
    categoryId: "criminal",
    description: "Section 375 defines rape as sexual intercourse with a woman without her consent or against her will. The Criminal Law Amendment Act, 2013 expanded the definition of rape to include acts beyond traditional intercourse and created new sexual offenses. Section 376 prescribes punishment for rape.",
    simplifiedDescription: "These laws define what constitutes rape and sexual assault, and provide strict punishments. After the 2013 amendment, the definition includes various forms of penetration and non-consensual sexual acts, not just traditional intercourse.",
    keyPoints: [
      "Expanded definition includes various forms of penetration",
      "Minimum punishment is 7 years, extending to life imprisonment",
      "Special provisions for custodial rape, gang rape, and rape of minors",
      "Absence of physical resistance is not evidence of consent",
      "Medical examination procedures for survivors are regulated"
    ],
    tags: [
      { id: "criminal", name: "Criminal Law" },
      { id: "protection", name: "Protection" }
    ],
    helpfulLinks: [
      { text: "Reporting sexual assault", url: "https://www.indiacode.nic.in/" },
      { text: "Support services for survivors", url: "https://nalsa.gov.in/" }
    ],
    createdAt: "2023-01-15",
    viewCount: 2800
  },
  {
    id: "section-354",
    title: "Section 354, IPC - Assault or Criminal Force to Woman with Intent to Outrage Her Modesty",
    categoryId: "criminal",
    description: "Section 354 punishes assault or use of criminal force to any woman with the intention to outrage her modesty. After the 2013 amendment, new specific offenses were added like sexual harassment (354A), disrobing (354B), voyeurism (354C), and stalking (354D).",
    simplifiedDescription: "This law protects women from sexual harassment, stalking, voyeurism, and disrobing. It provides punishment for unwelcome physical contact, demand for sexual favors, showing pornography without consent, and following/monitoring a woman against her will.",
    keyPoints: [
      "Section 354A defines and punishes sexual harassment",
      "Section 354B covers disrobing a woman (3-7 years imprisonment)",
      "Section 354C addresses voyeurism (1-3 years for first offense)",
      "Section 354D criminalizes stalking (up to 3 years for first offense)",
      "All these offenses are cognizable and non-bailable"
    ],
    tags: [
      { id: "criminal", name: "Criminal Law" },
      { id: "harassment", name: "Harassment" }
    ],
    helpfulLinks: [
      { text: "Reporting stalking and harassment", url: "https://www.indiacode.nic.in/" },
      { text: "Cybercrime reporting portal", url: "https://cybercrime.gov.in/" }
    ],
    createdAt: "2023-01-18",
    viewCount: 2100
  },
  {
    id: "section-509",
    title: "Section 509, IPC - Word, Gesture or Act Intended to Insult the Modesty of a Woman",
    categoryId: "criminal",
    description: "Section 509 of the Indian Penal Code makes it a criminal offense to insult the modesty of a woman by any word, sound, gesture, or object, intending that such word or sound shall be heard, or such gesture or object shall be seen by such woman.",
    simplifiedDescription: "This law makes it a crime to use words, sounds, gestures, or objects to insult a woman's modesty. It covers verbal harassment, obscene gestures, and inappropriate behavior in public and private spaces.",
    keyPoints: [
      "Covers verbal, gestural, and object-based harassment",
      "Applies in both public and private spaces",
      "Punishment includes imprisonment up to 3 years and fine",
      "Provides protection against day-to-day forms of harassment",
      "Often used along with Section 354A in harassment cases"
    ],
    tags: [
      { id: "criminal", name: "Criminal Law" },
      { id: "harassment", name: "Harassment" }
    ],
    helpfulLinks: [
      { text: "Filing a complaint for verbal harassment", url: "https://www.indiacode.nic.in/" },
      { text: "Women helpline numbers", url: "http://www.wcd.nic.in/" }
    ],
    createdAt: "2023-01-20",
    viewCount: 1650
  },
  {
    id: "pocso-act",
    title: "Protection of Children from Sexual Offences (POCSO) Act, 2012",
    categoryId: "criminal",
    description: "The POCSO Act provides for protection of children (below 18 years) from offenses of sexual assault, sexual harassment, and pornography. It establishes Special Courts for the trial of such offenses and matters connected with them.",
    simplifiedDescription: "This law protects children (below 18 years) from sexual offenses. It defines various types of sexual abuse, including penetrative and non-penetrative assault, sexual harassment, and using children for pornography. It establishes child-friendly procedures for reporting, investigation, and trial.",
    keyPoints: [
      "Specifically designed to protect children under 18 years of age",
      "Creates child-friendly procedures for reporting and trial",
      "Establishes Special Courts for faster trials",
      "Provides for severe punishment (up to life imprisonment)",
      "Makes reporting of child abuse mandatory for everyone"
    ],
    tags: [
      { id: "criminal", name: "Criminal Law" },
      { id: "children", name: "Children" }
    ],
    helpfulLinks: [
      { text: "Reporting child sexual abuse", url: "https://www.ncpcr.gov.in/" },
      { text: "POCSO e-Box for online complaints", url: "http://www.ncpcr.gov.in/" }
    ],
    createdAt: "2023-01-25",
    viewCount: 2300
  },
  {
    id: "acid-attack-laws",
    title: "Laws Against Acid Attacks (Sections 326A & 326B, IPC)",
    categoryId: "criminal",
    description: "Sections 326A and 326B were inserted into the Indian Penal Code by the Criminal Law (Amendment) Act, 2013 to specifically deal with acid attacks. These sections provide stringent punishment for throwing acid or attempting to throw acid on a person.",
    simplifiedDescription: "These laws specifically address acid attacks with severe punishments. Section 326A punishes acid throwing with 10 years to life imprisonment and fine. Section 326B punishes attempted acid throwing with 5-7 years imprisonment and fine.",
    keyPoints: [
      "Section 326A: Punishment for acid attack (10 years to life imprisonment)",
      "Section 326B: Punishment for attempted acid attack (5-7 years)",
      "Fine to be paid to victim for medical expenses",
      "Regulations on sale of acid and maintenance of records",
      "Supreme Court guidelines for compensation and rehabilitation"
    ],
    tags: [
      { id: "criminal", name: "Criminal Law" },
      { id: "violence", name: "Violence" }
    ],
    helpfulLinks: [
      { text: "Compensation schemes for acid attack survivors", url: "https://nalsa.gov.in/" },
      { text: "Medical and rehabilitation support", url: "https://www.wcd.nic.in/" }
    ],
    createdAt: "2023-02-05",
    viewCount: 1900
  }
];

export default criminalLaws;
