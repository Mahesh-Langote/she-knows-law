import { Law } from "../../types/law";

const workplaceLaws: Law[] = [
  {
    id: "sexual-harassment-act",
    title: "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013",
    categoryId: "workplace",
    description: "This Act provides protection against sexual harassment of women at workplace and for the prevention and redressal of complaints of sexual harassment. It mandates employers to create an Internal Committee to address complaints and provide a safe working environment.",
    simplifiedDescription: "This law protects women from sexual harassment at workplaces. It requires every organization with 10+ employees to have an Internal Committee to handle complaints. Sexual harassment includes physical advances, demand for sexual favors, showing pornography, or any unwelcome physical, verbal, or non-verbal conduct of a sexual nature.",
    keyPoints: [
      "Mandates Internal Complaints Committee (ICC) in all workplaces with 10+ employees",
      "Covers all women regardless of employment status, including visitors",
      "Defines sexual harassment comprehensively",
      "Provides for conciliation, inquiry process, and penalties",
      "Requires employers to conduct awareness programs"
    ],
    tags: [
      { id: "workplace", name: "Workplace" },
      { id: "protection", name: "Protection" }
    ],
    helpfulLinks: [
      { text: "Filing a complaint with ICC", url: "https://www.wcd.nic.in/" },
      { text: "SHe-Box online complaint portal", url: "http://www.shebox.nic.in/" }
    ],
    createdAt: "2023-01-15",
    viewCount: 3200
  },
  {
    id: "maternity-benefit-act",
    title: "Maternity Benefit Act, 1961 (amended in 2017)",
    categoryId: "workplace",
    description: "The Maternity Benefit Act regulates the employment of women during the period of child birth and provides maternity benefits. The Act applies to all establishments employing women, including factories, mines, plantations, shops, and establishments where 10 or more persons are employed.",
    simplifiedDescription: "This law gives pregnant women paid maternity leave for 26 weeks (for first two children), nursing breaks, work from home options, and protection from dismissal during pregnancy. All establishments with 10+ employees must provide creche facilities.",
    keyPoints: [
      "Provides 26 weeks of paid maternity leave for first two children (12 weeks for third child)",
      "Includes 12 weeks leave for adopting and commissioning mothers",
      "Requires creche facilities in establishments with 50+ employees",
      "Allows work-from-home option after the leave period",
      "Prohibits dismissal during pregnancy and mandates prenatal leave"
    ],
    tags: [
      { id: "workplace", name: "Workplace" },
      { id: "benefits", name: "Benefits" }
    ],
    helpfulLinks: [
      { text: "How to apply for maternity benefits", url: "https://labour.gov.in/" },
      { text: "Maternity leave calculator", url: "https://labour.gov.in/" }
    ],
    createdAt: "2023-01-18",
    viewCount: 2800
  },
  {
    id: "equal-remuneration-act",
    title: "Equal Remuneration Act, 1976",
    categoryId: "workplace",
    description: "The Equal Remuneration Act provides for the payment of equal remuneration to men and women workers for the same work or work of a similar nature and for the prevention of discrimination on grounds of sex against women in employment matters.",
    simplifiedDescription: "This law ensures that women receive the same pay as men for the same work. It prohibits gender discrimination in recruitment, promotions, and training opportunities. Employers cannot reduce wages to comply with this Act.",
    keyPoints: [
      "Mandates equal pay for men and women doing the same work",
      "Prohibits discrimination in recruitment and conditions of service",
      "Prevents employers from reducing wages to comply with the Act",
      "Provides for complaints to labor officers and penalties for violations",
      "Applies to all employment sectors"
    ],
    tags: [
      { id: "workplace", name: "Workplace" },
      { id: "equality", name: "Equality" }
    ],
    helpfulLinks: [
      { text: "Reporting wage discrimination", url: "https://labour.gov.in/" },
      { text: "Legal remedies for workplace discrimination", url: "https://nalsa.gov.in/" }
    ],
    createdAt: "2023-01-20",
    viewCount: 1500
  },
  {
    id: "factories-act-provisions",
    title: "Women-Specific Provisions in the Factories Act, 1948",
    categoryId: "workplace",
    description: "The Factories Act contains specific provisions for women workers relating to working hours, prohibition of night shifts, crèche facilities, and separate sanitation facilities to ensure their safety and welfare in factories.",
    simplifiedDescription: "This law includes special provisions for women working in factories, such as restrictions on night work (10 PM to 5 AM), proper toilet and washing facilities, and prohibition from working on dangerous machines.",
    keyPoints: [
      "Restricts night work for women (with exceptions requiring safety measures)",
      "Mandates separate and adequate sanitation facilities",
      "Prohibits employment in dangerous operations",
      "Requires crèche facilities where 30+ women are employed",
      "Restricts work near cotton-openers and near machinery in motion"
    ],
    tags: [
      { id: "workplace", name: "Workplace" },
      { id: "safety", name: "Safety" }
    ],
    helpfulLinks: [
      { text: "Safety standards in factories", url: "https://labour.gov.in/" },
      { text: "Reporting workplace safety violations", url: "https://dgfasli.gov.in/" }
    ],
    createdAt: "2023-02-05",
    viewCount: 980
  }
];

export default workplaceLaws;
