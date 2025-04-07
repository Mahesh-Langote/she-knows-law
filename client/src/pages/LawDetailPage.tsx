import React, { useEffect, useState } from 'react';
import { useParams } from 'wouter';
import { Law } from '../types/law';
import LawDetail from '../components/LawDetail';
import constitutionalLaws from '../data/laws/constitutional';
import domesticLaws from '../data/laws/domestic';
import workplaceLaws from '../data/laws/workplace';
import propertyLaws from '../data/laws/property';
import criminalLaws from '../data/laws/criminal';

const LawDetailPage: React.FC = () => {
  const { id } = useParams();
  const [law, setLaw] = useState<Law | null>(null);
  const [relatedLaws, setRelatedLaws] = useState<Law[]>([]);
  const [loading, setLoading] = useState(true);

  const allLaws = [
    ...constitutionalLaws,
    ...domesticLaws,
    ...workplaceLaws,
    ...propertyLaws,
    ...criminalLaws
  ];

  useEffect(() => {
    if (!id) return;

    const foundLaw = allLaws.find(law => law.id === id);
    
    if (foundLaw) {
      setLaw(foundLaw);
      
      // Find related laws (same category or matching tags)
      const related = allLaws
        .filter(l => l.id !== foundLaw.id) // Exclude current law
        .filter(l => 
          l.categoryId === foundLaw.categoryId || // Same category
          l.tags.some(tag => 
            foundLaw.tags.some(t => t.id === tag.id)
          ) // Matching tags
        )
        .slice(0, 4); // Limit to 4 related laws
      
      setRelatedLaws(related);
    }
    
    setLoading(false);

    // Simulate view count increment
    // In a real app, this would be an API call
    if (foundLaw && foundLaw.viewCount !== undefined) {
      foundLaw.viewCount += 1;
    }

    // Scroll to top on new law
    window.scrollTo(0, 0);
  }, [id, allLaws]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-neutral-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-neutral-200 rounded w-1/2 mb-8"></div>
          <div className="h-64 bg-neutral-200 rounded mb-4"></div>
          <div className="h-32 bg-neutral-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!law) {
    return (
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-heading font-bold text-neutral-900 mb-2">Law Not Found</h1>
          <p className="text-neutral-600 mb-6">The law you're looking for doesn't exist or has been moved.</p>
          <a href="/" className="text-primary-600 hover:text-primary-800">
            Go back to homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <LawDetail law={law} relatedLaws={relatedLaws} />
    </section>
  );
};

export default LawDetailPage;
