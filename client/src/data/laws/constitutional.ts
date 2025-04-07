import { Law } from "../../types/law";

const constitutionalLaws: Law[] = [
  {
    id: "article-14",
    title: "Article 14 - Equality Before Law",
    articleNumber: "14",
    categoryId: "constitutional",
    description: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India. This article ensures that every citizen, regardless of gender, receives equal treatment under the law and equal protection of the laws.",
    simplifiedDescription: "This law guarantees that every person in India will be treated equally by the law. The government cannot discriminate against anyone based on their gender, caste, religion, or place of birth.",
    keyPoints: [
      "Guarantees equality before law for all citizens",
      "Prohibits arbitrary discrimination",
      "Applies to all government actions and laws",
      "Forms the basis for challenging discriminatory practices"
    ],
    tags: [
      { id: "fundamental", name: "Fundamental Right" },
      { id: "equality", name: "Equality" }
    ],
    helpfulLinks: [
      { text: "Supreme Court judgment on Article 14", url: "https://main.sci.gov.in/" },
      { text: "Legal aid for equality cases", url: "https://nalsa.gov.in/" }
    ],
    createdAt: "2023-01-15",
    viewCount: 1200,
    isFundamentalRight: true
  },
  {
    id: "article-15",
    title: "Article 15 - Prohibition of Discrimination",
    articleNumber: "15",
    categoryId: "constitutional",
    description: "The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them. This article specifically prohibits discrimination based on sex, allowing the government to make special provisions for women and children.",
    simplifiedDescription: "This law specifically prohibits discrimination based on sex, religion, race, caste, or place of birth. It allows the government to make special provisions for women and children.",
    keyPoints: [
      "Prohibits discrimination based on sex, religion, race, caste, place of birth",
      "Allows special provisions for women and children (Article 15(3))",
      "Permits socially and educationally backward class reservations",
      "Applies to access to public places, facilities, and resources"
    ],
    tags: [
      { id: "fundamental", name: "Fundamental Right" },
      { id: "women-specific", name: "Women-Specific" }
    ],
    helpfulLinks: [
      { text: "National Commission for Women", url: "http://ncw.nic.in/" },
      { text: "Legal information on women's rights", url: "https://nalsa.gov.in/" }
    ],
    createdAt: "2023-01-15",
    viewCount: 1500,
    isFundamentalRight: true
  },
  {
    id: "article-21",
    title: "Article 21 - Right to Life and Personal Liberty",
    articleNumber: "21",
    categoryId: "constitutional",
    description: "No person shall be deprived of his life or personal liberty except according to procedure established by law. This has been interpreted to include the right to live with human dignity, privacy, and freedom from harassment.",
    simplifiedDescription: "This law protects your right to live with human dignity, privacy, and freedom. Courts have interpreted this to include protection against sexual harassment and the right to safe living conditions.",
    keyPoints: [
      "Guarantees right to life with dignity",
      "Ensures personal liberty and privacy",
      "Protects against sexual harassment (Vishaka case)",
      "Covers right to health, shelter, and livelihood"
    ],
    tags: [
      { id: "fundamental", name: "Fundamental Right" },
      { id: "dignity", name: "Dignity" }
    ],
    helpfulLinks: [
      { text: "Vishaka Guidelines judgment", url: "https://main.sci.gov.in/" },
      { text: "Right to privacy judgment", url: "https://main.sci.gov.in/" }
    ],
    createdAt: "2023-01-25",
    viewCount: 980,
    isFundamentalRight: true
  },
  {
    id: "article-39a",
    title: "Article 39A - Equal Justice",
    articleNumber: "39A",
    categoryId: "constitutional",
    description: "The State shall secure that the operation of the legal system promotes justice, on a basis of equal opportunity, and shall, in particular, provide free legal aid, by suitable legislation or schemes, to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities.",
    simplifiedDescription: "This provision directs the government to provide free legal aid to ensure that no citizen is denied justice due to economic or other disabilities. This helps women access legal remedies.",
    keyPoints: [
      "Directs state to provide free legal aid",
      "Ensures equal access to justice regardless of economic status",
      "Created the basis for Legal Services Authorities Act",
      "Helps vulnerable women access legal remedies"
    ],
    tags: [
      { id: "directive", name: "Directive Principle" },
      { id: "legal-aid", name: "Legal Aid" }
    ],
    helpfulLinks: [
      { text: "National Legal Services Authority", url: "https://nalsa.gov.in/" },
      { text: "Free legal aid information", url: "https://nalsa.gov.in/" }
    ],
    createdAt: "2023-02-10",
    viewCount: 756,
    isFundamentalRight: false
  },
  {
    id: "article-42",
    title: "Article 42 - Maternity Relief",
    articleNumber: "42",
    categoryId: "constitutional",
    description: "The State shall make provision for securing just and humane conditions of work and for maternity relief. This article forms the basis for maternity benefit laws in India.",
    simplifiedDescription: "This provision directs the government to make provisions for securing just and humane conditions of work and for maternity relief. This is the basis for maternity benefit laws.",
    keyPoints: [
      "Directs state to provide maternity relief",
      "Forms basis for the Maternity Benefit Act",
      "Ensures humane working conditions for women",
      "Supports maternal health and child welfare"
    ],
    tags: [
      { id: "directive", name: "Directive Principle" },
      { id: "women-specific", name: "Women-Specific" }
    ],
    helpfulLinks: [
      { text: "Maternity Benefit Act details", url: "https://labour.gov.in/" },
      { text: "Applying for maternity benefits", url: "https://labour.gov.in/" }
    ],
    createdAt: "2023-01-18",
    viewCount: 823,
    isFundamentalRight: false
  },
  {
    id: "article-51a",
    title: "Article 51A - Fundamental Duties",
    articleNumber: "51A",
    categoryId: "constitutional",
    description: "Article 51A(e) specifically makes it a duty of every citizen to renounce practices derogatory to the dignity of women. This creates a constitutional duty to respect women.",
    simplifiedDescription: "This article makes it a duty of every citizen to renounce practices derogatory to the dignity of women. This creates social responsibility to respect women's rights.",
    keyPoints: [
      "Makes respecting women's dignity a fundamental duty",
      "Creates social responsibility for gender equality",
      "Prohibits derogatory practices against women",
      "Supports legislative measures for women's dignity"
    ],
    tags: [
      { id: "duty", name: "Fundamental Duty" },
      { id: "dignity", name: "Dignity" }
    ],
    helpfulLinks: [
      { text: "Constitutional values and gender equality", url: "https://pib.gov.in/" },
      { text: "National Commission for Women", url: "http://ncw.nic.in/" }
    ],
    createdAt: "2022-11-15",
    viewCount: 654,
    isFundamentalRight: false
  }
];

export default constitutionalLaws;
