import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLinkIcon, PhoneIcon, BuildingIcon, FileTextIcon } from 'lucide-react';
import { Resource } from '../types/law';

const resources: Resource[] = [
  {
    id: '1',
    type: 'helpline',
    title: 'Women Helpline (All India)',
    description: 'For any woman in distress or facing violence',
    contactInfo: '1091 or 181',
    icon: 'bx-phone'
  },
  {
    id: '2',
    type: 'helpline',
    title: 'Domestic Violence Helpline',
    description: 'For victims of domestic violence',
    contactInfo: '181',
    icon: 'bx-home-heart'
  },
  {
    id: '3',
    type: 'helpline',
    title: 'Police Control Room',
    description: 'For emergency police assistance',
    contactInfo: '100',
    icon: 'bx-shield-quarter'
  },
  {
    id: '4',
    type: 'ngo',
    title: 'National Commission for Women',
    description: "Government body for women's rights advocacy and support",
    link: 'http://ncw.nic.in/',
    icon: 'bx-building'
  },
  {
    id: '5',
    type: 'ngo',
    title: 'Shakti Shalini',
    description: 'Support for women survivors of violence',
    contactInfo: '011-24373737',
    link: 'https://shaktishalini.org/',
    icon: 'bx-building'
  },
  {
    id: '6',
    type: 'document',
    title: 'Domestic Violence Complaint Template',
    description: 'Template for filing domestic violence complaints',
    link: 'https://nalsa.gov.in/content/domestic-violence',
    icon: 'bx-file'
  },
  {
    id: '7',
    type: 'document',
    title: 'FIR Filing Guide',
    description: 'Step-by-step guide to file a First Information Report',
    link: 'https://nalsa.gov.in/',
    icon: 'bx-file'
  },
  {
    id: '8',
    type: 'legal_aid',
    title: 'National Legal Services Authority',
    description: 'Free legal aid and services for eligible citizens',
    link: 'https://nalsa.gov.in/',
    contactInfo: 'Phone: 011-23382778',
    icon: 'bx-gavel'
  }
];

const ResourcesPage: React.FC = () => {
  const helplines = resources.filter(r => r.type === 'helpline');
  const ngos = resources.filter(r => r.type === 'ngo');
  const documents = resources.filter(r => r.type === 'document');
  const legalAid = resources.filter(r => r.type === 'legal_aid');

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-neutral-900 mb-4">Resources & Support</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Find helpline numbers, NGO contacts, document templates, and legal aid resources to support women in need.
        </p>
      </div>
      
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <PhoneIcon className="h-5 w-5 text-primary-500 mr-2" />
          <h2 className="text-2xl font-heading font-semibold text-neutral-900">Emergency Helplines</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helplines.map(helpline => (
            <Card key={helpline.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-heading">{helpline.title}</CardTitle>
                  <Badge variant="outline" className="bg-primary-100 text-primary-800">
                    24/7
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-4">{helpline.description}</p>
                <div className="flex items-center text-primary-600 font-semibold">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  <span>{helpline.contactInfo}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <BuildingIcon className="h-5 w-5 text-secondary-500 mr-2" />
          <h2 className="text-2xl font-heading font-semibold text-neutral-900">NGO Support</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ngos.map(ngo => (
            <Card key={ngo.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-heading">{ngo.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-4">{ngo.description}</p>
                {ngo.contactInfo && (
                  <p className="text-neutral-700 mb-2">{ngo.contactInfo}</p>
                )}
                {ngo.link && (
                  <a 
                    href={ngo.link} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-primary-600 hover:text-primary-800 flex items-center"
                  >
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Visit Website
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <FileTextIcon className="h-5 w-5 text-success mr-2" />
          <h2 className="text-2xl font-heading font-semibold text-neutral-900">Document Templates</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map(doc => (
            <Card key={doc.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-heading">{doc.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-4">{doc.description}</p>
                {doc.link && (
                  <a 
                    href={doc.link} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-primary-600 hover:text-primary-800 flex items-center"
                  >
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Download Template
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <i className="bx bx-gavel text-xl text-warning mr-2"></i>
          <h2 className="text-2xl font-heading font-semibold text-neutral-900">Legal Aid</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {legalAid.map(aid => (
            <Card key={aid.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-heading">{aid.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-4">{aid.description}</p>
                {aid.contactInfo && (
                  <p className="text-neutral-700 mb-2">{aid.contactInfo}</p>
                )}
                {aid.link && (
                  <a 
                    href={aid.link} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-primary-600 hover:text-primary-800 flex items-center"
                  >
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Visit Website
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
