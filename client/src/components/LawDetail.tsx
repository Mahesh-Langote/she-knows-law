import React from 'react';
import { Law } from '../types/law';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { ChevronLeftIcon, BookmarkIcon, Share2Icon, ExternalLinkIcon } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface LawDetailProps {
  law: Law;
  relatedLaws?: Law[];
}

const LawDetail: React.FC<LawDetailProps> = ({ law, relatedLaws = [] }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: law.title,
        text: law.simplifiedDescription,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          toast({
            title: "Link copied!",
            description: "The link has been copied to your clipboard.",
            duration: 3000,
          });
        })
        .catch((error) => console.log('Error copying link', error));
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href={`/category/${law.categoryId}`}>
          <Button variant="outline" className="mb-4 text-neutral-600">
            <ChevronLeftIcon className="h-4 w-4 mr-1" />
            Back to Laws
          </Button>
        </Link>
        
        <div className="flex flex-wrap justify-between items-start gap-4">
          <h1 className="text-3xl font-heading font-bold text-neutral-900">{law.title}</h1>
          
          <div className="flex space-x-2">
            <Button variant="outline" className="text-neutral-600">
              <BookmarkIcon className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" className="text-neutral-600" onClick={handleShare}>
              <Share2Icon className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {law.tags.map(tag => (
            <Badge key={tag.id} variant="secondary" className="text-sm">
              {tag.name}
            </Badge>
          ))}
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="bg-primary-50 p-4 rounded-lg mb-6 border border-primary-100">
            <h2 className="text-lg font-heading font-semibold text-primary-800 mb-2">
              Simplified Explanation
            </h2>
            <p className="text-neutral-700">{law.simplifiedDescription}</p>
          </div>
          
          <h2 className="text-xl font-heading font-semibold text-neutral-900 mb-4">Full Description</h2>
          <p className="text-neutral-700 mb-6">{law.description}</p>
          
          <h2 className="text-xl font-heading font-semibold text-neutral-900 mb-4">Key Points</h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            {law.keyPoints.map((point, index) => (
              <li key={index} className="text-neutral-700">{point}</li>
            ))}
          </ul>
          
          {law.helpfulLinks && law.helpfulLinks.length > 0 && (
            <>
              <h2 className="text-xl font-heading font-semibold text-neutral-900 mb-4">Helpful Links</h2>
              <ul className="space-y-2">
                {law.helpfulLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 flex items-center"
                    >
                      <ExternalLinkIcon className="h-4 w-4 mr-2" />
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </CardContent>
      </Card>
      
      {relatedLaws.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-heading font-semibold text-neutral-900 mb-4">Related Laws</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedLaws.map(relatedLaw => (
              <Link key={relatedLaw.id} href={`/law/${relatedLaw.id}`}>
                <a className="block p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
                  <h3 className="font-medium text-neutral-900">{relatedLaw.title}</h3>
                  <p className="text-sm text-neutral-600 mt-1 line-clamp-2">{relatedLaw.simplifiedDescription}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LawDetail;
