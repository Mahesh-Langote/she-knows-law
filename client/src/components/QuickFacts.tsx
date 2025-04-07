import React from 'react';
import { QuickFact } from '../types/law';

const quickFacts: QuickFact[] = [
  {
    id: '1',
    title: "Women's Helpline",
    description: "Dial 181 for the Women's Helpline, available 24/7 for women in distress across India.",
    icon: "bx-female",
    bgColor: "bg-primary-100",
    iconColor: "text-primary-600"
  },
  {
    id: '2',
    title: "Maternity Benefits",
    description: "The Maternity Benefit Act provides 26 weeks of paid maternity leave for women employees.",
    icon: "bx-briefcase",
    bgColor: "bg-secondary-100",
    iconColor: "text-secondary-600"
  },
  {
    id: '3',
    title: "Protection Orders",
    description: "Under the Domestic Violence Act, women can get protection orders against abusers within 48 hours.",
    icon: "bx-shield-quarter",
    bgColor: "bg-success/20",
    iconColor: "text-success"
  }
];

const QuickFacts: React.FC = () => {
  return (
    <section className="bg-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">Did You Know?</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">Important legal facts that every woman in India should be aware of</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickFacts.map(fact => (
            <div key={fact.id} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
              <div className={`flex items-center justify-center w-12 h-12 ${fact.bgColor} ${fact.iconColor} rounded-full mb-4`}>
                <i className={`bx ${fact.icon} text-2xl`}></i>
              </div>
              <h3 className="font-heading font-medium text-lg text-neutral-900 mb-2">{fact.title}</h3>
              <p className="text-neutral-600">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
