// src/types/organizations.ts
export interface Organization {
    id: number;
    name: string;
    description: string;
    phone: string;
    website: string;
    categories: string[];
    iconColor: string;
    featured?: boolean;
    location?: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    color: string;
  }
  
  export interface OrganizationsData {
    organizations: Organization[];
    categories: Category[];
  }