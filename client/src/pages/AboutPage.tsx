import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-neutral-900 mb-4">About SheKnowsLaw</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded mb-6"></div>
        <p className="text-lg text-neutral-700 mb-6">
          SheKnowsLaw is dedicated to empowering women across India by making legal information accessible, 
          understandable, and actionable. Our platform breaks down complex legal jargon into simple language 
          that anyone can understand.
        </p>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">Our Mission</h2>
        <Card className="border-l-4 border-l-primary-500">
          <CardContent className="p-6">
            <p className="text-neutral-700">
              To bridge the gap between legal rights and women's awareness by providing simplified, 
              accurate legal information in accessible language. We believe that knowledge is the first 
              step toward empowerment and justice.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">How to Use This Site</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-semibold text-lg">
              1
            </div>
            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-1">Browse by Category</h3>
              <p className="text-neutral-600">
                Use the sidebar to navigate through different categories of laws such as Constitutional Rights, 
                Domestic Violence, Workplace Rights, and more.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-semibold text-lg">
              2
            </div>
            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-1">Search for Specific Laws</h3>
              <p className="text-neutral-600">
                Use the search bar to find laws related to specific issues or keywords that you're interested in.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-semibold text-lg">
              3
            </div>
            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-1">Read Simplified Explanations</h3>
              <p className="text-neutral-600">
                Each law is explained in simple language with key points highlighted for quick understanding.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-semibold text-lg">
              4
            </div>
            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-1">Access Resources</h3>
              <p className="text-neutral-600">
                Find helpline numbers, NGO contacts, and document templates in the Resources section.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">A Note on Legal Advice</h2>
        <div className="bg-neutral-100 p-6 rounded-lg">
          <p className="text-neutral-700 mb-4">
            While we strive to provide accurate and up-to-date information, the content on this website is
            for informational purposes only and does not constitute legal advice. Every legal situation is
            unique and requires specific attention.
          </p>
          <p className="text-neutral-700 font-medium">
            If you're facing a legal issue, we encourage you to consult with a qualified legal professional
            or reach out to one of the helplines or NGOs listed in our resources section.
          </p>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">Contact Us</h2>
        <p className="text-neutral-700 mb-4">
          We welcome your feedback, suggestions, or questions. Please reach out to us at:
        </p>
        <p className="text-primary-600 font-medium">
          contact@sheknowslaw.org
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
