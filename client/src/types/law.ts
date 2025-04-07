export interface Tag {
  id: string;
  name: string;
  color?: string;
}

export interface Law {
  id: string;
  title: string;
  articleNumber?: string;
  categoryId: string;
  description: string;
  simplifiedDescription: string;
  keyPoints: string[];
  tags: Tag[];
  helpfulLinks?: {
    text: string;
    url: string;
  }[];
  createdAt?: string;
  viewCount?: number;
  isFundamentalRight?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  count: number;
}

export interface Resource {
  id: string;
  type: 'helpline' | 'ngo' | 'document' | 'legal_aid';
  title: string;
  description: string;
  contactInfo?: string;
  link?: string;
  icon?: string;
}

export interface QuickFact {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  iconColor: string;
}
