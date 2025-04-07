// components/OrganizationCard.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  PhoneIcon, 
  ExternalLinkIcon, 
  MapPinIcon, 
  UsersIcon,
  StarIcon 
} from 'lucide-react';
import { Organization } from '../types/organizations';

type CategoryColorMap = {
  [key: string]: string;
};

type IconColorMap = {
  [key: string]: string;
};

const categoryColors: CategoryColorMap = {
  "Legal Aid": "bg-blue-50 text-blue-700",
  "Advocacy": "bg-green-50 text-green-700",
  "Consultation": "bg-purple-50 text-purple-700",
  "Crisis Support": "bg-red-50 text-red-700",
  "Shelter": "bg-yellow-50 text-yellow-700",
  "Counseling": "bg-orange-50 text-orange-700",
  "Healthcare": "bg-green-50 text-green-700",
  "Education": "bg-indigo-50 text-indigo-700",
  "Research": "bg-teal-50 text-teal-700",
  "Human Rights": "bg-cyan-50 text-cyan-700",
  "Sexuality": "bg-pink-50 text-pink-700",
  "Livelihood": "bg-amber-50 text-amber-700"
};

const iconColors: IconColorMap = {
  "blue": "bg-blue-100 text-blue-600",
  "green": "bg-green-100 text-green-600",
  "purple": "bg-purple-100 text-purple-600",
  "red": "bg-red-100 text-red-600",
  "yellow": "bg-yellow-100 text-yellow-600",
  "orange": "bg-orange-100 text-orange-600",
  "indigo": "bg-indigo-100 text-indigo-600",
  "teal": "bg-teal-100 text-teal-600",
  "amber": "bg-amber-100 text-amber-600",
  "rose": "bg-rose-100 text-rose-600",
  "lime": "bg-lime-100 text-lime-600",
  "cyan": "bg-cyan-100 text-cyan-600",
  "pink": "bg-pink-100 text-pink-600"
};

interface OrganizationCardProps {
  organization: Organization;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({ organization }) => {
  const {
    name,
    description,
    phone,
    website,
    categories,
    iconColor,
    featured,
    location
  } = organization;

  const iconColorClass = iconColors[iconColor] || "bg-primary-100 text-primary-600";

  return (
    <div className={`bg-white rounded-xl p-6 flex flex-col h-full relative ${featured ? 'ring-2 ring-primary-200' : 'border border-neutral-100'} shadow-md hover:shadow-lg transition-shadow duration-300`}>
      {featured && (
        <div className="absolute top-2 right-2">
          <span className="flex items-center text-xs font-medium text-primary-600">
            <StarIcon className="h-3 w-3 mr-1" /> Featured
          </span>
        </div>
      )}
      
      <div className={`${iconColorClass} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
        <UsersIcon className="h-6 w-6" />
      </div>
      
      <h3 className="font-bold text-lg mb-2 text-neutral-800">{name}</h3>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {categories.map((category, idx) => (
          <span key={idx} className={`${categoryColors[category] || "bg-gray-50 text-gray-700"} text-xs px-2 py-1 rounded-full font-medium`}>
            {category}
          </span>
        ))}
      </div>
      
      {location && (
        <div className="flex items-center text-neutral-500 text-sm mb-3">
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
      )}
      
      <p className="text-neutral-600 mb-4 flex-grow">{description}</p>
      
      <div className="mt-auto flex flex-col space-y-2 w-full">
        <Button asChild variant="outline" size="sm" className="w-full flex items-center justify-center">
          <a href={`tel:${phone}`}>
            <PhoneIcon className="h-4 w-4 mr-2" />
            {phone.replace('+91', '')}
          </a>
        </Button>
        
        <Button 
          asChild 
          variant="default" 
          size="sm" 
          className={`w-full bg-gradient-to-r ${featured ? 'from-primary-600 to-secondary-600' : 'bg-primary-600'} hover:opacity-90 flex items-center justify-center`}
        >
          <a href={website} target="_blank" rel="noopener noreferrer">
            Visit Website
            <ExternalLinkIcon className="h-3 w-3 ml-1" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default OrganizationCard;