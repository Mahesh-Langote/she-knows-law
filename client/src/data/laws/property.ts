import { Law } from "../../types/law";

const propertyLaws: Law[] = [
  {
    id: "hindu-succession-act",
    title: "Hindu Succession Act, 1956 (amended in 2005)",
    categoryId: "property",
    description: "The Hindu Succession Act governs the succession and inheritance of property among Hindus. The 2005 amendment gave daughters equal inheritance rights in ancestral property as sons, removing gender discrimination in Hindu succession law.",
    simplifiedDescription: "This law gives daughters equal rights as sons to inherit family property, including agricultural land. After the 2005 amendment, daughters have coparcenary rights by birth, just like sons, and can inherit ancestral property equally.",
    keyPoints: [
      "Grants daughters equal rights as sons in ancestral property",
      "Makes daughters coparceners by birth in joint family property",
      "Applies to agricultural land equally",
      "Ensures inheritance rights regardless of marital status",
      "Applies retroactively to cases pending on September 9, 2005"
    ],
    tags: [
      { id: "property", name: "Property Rights" },
      { id: "inheritance", name: "Inheritance" }
    ],
    helpfulLinks: [
      { text: "Understanding coparcenary rights", url: "https://lawmin.gov.in/" },
      { text: "How to claim ancestral property", url: "https://nalsa.gov.in/" }
    ],
    createdAt: "2023-01-15",
    viewCount: 2400
  },
  {
    id: "muslim-women-act",
    title: "Muslim Women (Protection of Rights on Divorce) Act, 1986",
    categoryId: "property",
    description: "This Act deals with maintenance rights of Muslim women after divorce. It provides that a divorced Muslim woman is entitled to reasonable and fair provision and maintenance from her former husband, and if she maintains the children, they are also entitled to maintenance.",
    simplifiedDescription: "This law protects divorced Muslim women's rights to maintenance. It ensures that a divorced woman receives a reasonable and fair amount for her future maintenance, and the maintenance of her children, from her former husband.",
    keyPoints: [
      "Entitles divorced women to reasonable and fair provision for future",
      "Provides for return of wedding gifts (mahr) and dowry",
      "Ensures maintenance during iddat period (approximately 3 months)",
      "Makes relatives liable for maintenance if woman cannot maintain herself",
      "Allows appeal to Magistrate if rights are not provided"
    ],
    tags: [
      { id: "property", name: "Property Rights" },
      { id: "divorce", name: "Divorce" }
    ],
    helpfulLinks: [
      { text: "Understanding maintenance rights", url: "https://lawmin.gov.in/" },
      { text: "Legal aid for divorce cases", url: "https://nalsa.gov.in/" }
    ],
    createdAt: "2023-01-18",
    viewCount: 1800
  },
  {
    id: "indian-succession-act",
    title: "Indian Succession Act, 1925",
    categoryId: "property",
    description: "The Indian Succession Act governs succession of property for individuals other than Hindus, Muslims, Buddhists, Sikhs, and Jains, who are governed by their personal laws. It applies to Christians, Parsis, and those married under the Special Marriage Act.",
    simplifiedDescription: "This law governs inheritance for Christians, Parsis, and inter-religious marriages. It ensures equal rights for daughters and sons in inheritance matters, and protects the property rights of widows.",
    keyPoints: [
      "Provides equal inheritance rights to sons and daughters",
      "Entitles widow to one-third of property if there are lineal descendants",
      "Grants widow half the property if there are no lineal descendants",
      "Allows individuals to distribute property as per will",
      "Applies to Christians, Parsis, and inter-religious marriages"
    ],
    tags: [
      { id: "property", name: "Property Rights" },
      { id: "inheritance", name: "Inheritance" }
    ],
    helpfulLinks: [
      { text: "Making a legal will", url: "https://lawmin.gov.in/" },
      { text: "Property rights for Christians", url: "https://nalsa.gov.in/" }
    ],
    createdAt: "2023-01-20",
    viewCount: 1250
  },
  {
    id: "streedhan-rights",
    title: "Streedhan Rights",
    categoryId: "property",
    description: "Streedhan consists of all the movable, immovable property, gifts and dowry a woman receives in her lifetime before, during and after her marriage. The concept of Streedhan is recognized in Hindu Law, and the woman has absolute ownership and control over it.",
    simplifiedDescription: "Streedhan is all property (jewelry, clothes, gifts, etc.) that a woman receives before, during, and after marriage. She has complete ownership over this property, and no one can take it away from her, not even her husband.",
    keyPoints: [
      "Gives women absolute right over gifts received before, during, and after marriage",
      "Includes jewelry, clothing, household items, and other property",
      "Can be claimed back if taken by anyone without permission",
      "Protected under Section 405/406 of IPC (criminal breach of trust)",
      "Is separate from dowry and legally protected"
    ],
    tags: [
      { id: "property", name: "Property Rights" },
      { id: "marriage", name: "Marriage" }
    ],
    helpfulLinks: [
      { text: "How to recover Streedhan", url: "https://lawmin.gov.in/" },
      { text: "Filing a case for Streedhan recovery", url: "https://nalsa.gov.in/" }
    ],
    createdAt: "2023-02-05",
    viewCount: 1950
  }
];

export default propertyLaws;
