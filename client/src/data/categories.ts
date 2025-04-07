import { Category } from "../types/law";

export const categories: Category[] = [
  {
    id: "constitutional",
    name: "Constitutional Rights",
    description: "Fundamental rights and protections guaranteed by the Indian Constitution",
    icon: "bx-shield-quarter",
    color: "primary",
    count: 12
  },
  {
    id: "domestic",
    name: "Domestic Violence",
    description: "Laws protecting women from domestic violence and abuse",
    icon: "bx-home-heart",
    color: "secondary",
    count: 8
  },
  {
    id: "workplace",
    name: "Workplace Rights",
    description: "Legal safeguards for women in the workplace",
    icon: "bx-briefcase",
    color: "success",
    count: 10
  },
  {
    id: "property",
    name: "Property Rights",
    description: "Laws related to property ownership and inheritance for women",
    icon: "bx-building-house",
    color: "warning",
    count: 6
  },
  {
    id: "criminal",
    name: "Criminal Laws",
    description: "Criminal laws that provide protection to women",
    icon: "bx-gavel",
    color: "destructive",
    count: 9
  }
];

export default categories;
