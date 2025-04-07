import { Law } from "../../types/law";

const domesticLaws: Law[] = [
  {
    id: "domestic-violence-act",
    title: "Protection of Women from Domestic Violence Act, 2005",
    categoryId: "domestic",
    description: "This Act provides for more effective protection of the rights of women guaranteed under the Constitution who are victims of violence of any kind occurring within the family. It covers physical, sexual, verbal, emotional, and economic abuse, and gives a comprehensive definition of domestic violence.",
    simplifiedDescription: "This law protects women from various forms of abuse (physical, sexual, verbal, emotional, and economic) by family members. It allows women to get protection orders, residence orders, and monetary relief from abusers.",
    keyPoints: [
      "Covers physical, sexual, verbal, emotional, and economic abuse",
      "Allows protection orders against abusers within 48 hours",
      "Provides right to secure housing (residence orders)",
      "Enables monetary relief and custody orders",
      "Allows filing complaint with Protection Officers or police"
    ],
    tags: [
      { id: "protection", name: "Protection" },
      { id: "remedies", name: "Legal Remedies" }
    ],
    helpfulLinks: [
      { text: "List of Protection Officers", url: "http://ncw.nic.in/" },
      { text: "How to file a Domestic Violence complaint", url: "https://nalsa.gov.in/" }
    ],
    createdAt: "2023-01-20",
    viewCount: 2100
  },
  {
    id: "dowry-prohibition-act",
    title: "Dowry Prohibition Act, 1961",
    categoryId: "domestic",
    description: "This Act prohibits the giving or taking of dowry. Dowry is defined as any property or valuable security given or agreed to be given either directly or indirectly by one party to a marriage to the other party to the marriage or by the parents of either party or by any other person.",
    simplifiedDescription: "This law makes demanding, giving, or taking dowry illegal. It punishes anyone who demands dowry or abets dowry transactions with imprisonment up to 5 years and a fine.",
    keyPoints: [
      "Prohibits giving, taking, or demanding dowry",
      "Provides punishment of up to 5 years imprisonment and fine",
      "Covers indirect dowry demands as well",
      "Makes dowry agreements void",
      "Protects gifts given without demand"
    ],
    tags: [
      { id: "criminal", name: "Criminal Law" },
      { id: "marriage", name: "Marriage" }
    ],
    helpfulLinks: [
      { text: "Reporting dowry demands", url: "https://www.wcd.nic.in/" },
      { text: "Legal aid for dowry cases", url: "https://nalsa.gov.in/" }
    ],
    createdAt: "2023-01-22",
    viewCount: 1800
  },
  {
    id: "section-498a",
    title: "Section 498A, IPC - Cruelty by Husband or Relatives",
    categoryId: "domestic",
    description: "Section 498A of the Indian Penal Code deals with cruelty to a woman by her husband or his family members. Cruelty includes any willful conduct that is likely to drive a woman to commit suicide, cause grave injury, or danger to her life, limb or health, or harassment with a view to coerce her or her relatives to meet any unlawful demand for property or valuable security.",
    simplifiedDescription: "This law protects married women from cruelty by their husband or in-laws. It covers physical and mental cruelty, including dowry harassment. The punishment is imprisonment up to 3 years and a fine.",
    keyPoints: [
      "Protects married women from physical and mental cruelty",
      "Covers harassment for dowry",
      "Provides punishment of up to 3 years imprisonment",
      "Is a cognizable, non-bailable, and non-compoundable offense",
      "Allows immediate arrest of accused without warrant"
    ],
    tags: [
      { id: "criminal", name: "Criminal Law" },
      { id: "marriage", name: "Marriage" }
    ],
    helpfulLinks: [
      { text: "How to file an FIR under 498A", url: "https://www.indiacode.nic.in/" },
      { text: "Legal remedies for domestic violence", url: "https://nalsa.gov.in/" }
    ],
    createdAt: "2023-01-25",
    viewCount: 2500
  },
  {
    id: "protection-orders",
    title: "Protection Orders Under DV Act",
    categoryId: "domestic",
    description: "Protection Orders are court orders issued under Section 18 of the Protection of Women from Domestic Violence Act that prohibit the respondent from committing domestic violence, entering the woman's workplace, or having any personal, written, or electronic communication with her.",
    simplifiedDescription: "Protection Orders stop the abuser from committing violence, entering your workplace, or contacting you. They can be obtained quickly (within 48 hours) in emergency situations.",
    keyPoints: [
      "Prohibits abuser from committing further violence",
      "Restricts communication and access to the woman",
      "Can be obtained within 48 hours in emergencies",
      "Violation is a criminal offense with imprisonment",
      "Can be applied for with help from Protection Officers"
    ],
    tags: [
      { id: "protection", name: "Protection" },
      { id: "emergency", name: "Emergency" }
    ],
    helpfulLinks: [
      { text: "How to get a Protection Order", url: "http://ncw.nic.in/" },
      { text: "Sample Protection Order application", url: "https://nalsa.gov.in/" }
    ],
    createdAt: "2023-02-05",
    viewCount: 1650
  }
];

export default domesticLaws;
