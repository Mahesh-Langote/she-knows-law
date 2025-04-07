import React from 'react';
import { Link } from 'wouter';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { InfoIcon, Share2Icon } from 'lucide-react';
import { Law, Tag } from '../types/law';
import { toast } from '@/hooks/use-toast';

interface LawCardProps {
  law: Law;
}

const LawCard: React.FC<LawCardProps> = ({ law }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: law.title,
        text: law.simplifiedDescription,
        url: window.location.origin + '/law/' + law.id,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.origin + '/law/' + law.id)
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

  const getTagBackground = (tag: Tag) => {
    if (tag.id === 'fundamental') return 'bg-primary-100 text-primary-800';
    if (tag.id === 'directive') return 'bg-primary-100 text-primary-800';
    if (tag.id === 'duty') return 'bg-primary-100 text-primary-800';
    if (tag.id === 'women-specific') return 'bg-secondary-100 text-secondary-800';
    return 'bg-neutral-100 text-neutral-800';
  };

  return (
    <Card className="h-full bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="border-b border-neutral-100 bg-gradient-to-r from-primary-50 to-neutral-50 p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-heading font-semibold text-neutral-900">{law.title}</h3>
          <button className="text-neutral-400 hover:text-primary-500">
            <i className="bx bx-bookmark text-xl"></i>
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {law.tags.map((tag) => (
            <Badge key={tag.id} variant="outline" className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getTagBackground(tag)}`}>
              {tag.name}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-neutral-600 text-sm mb-4">
          {law.simplifiedDescription}
        </p>
        <div className="flex items-center text-sm text-neutral-500">
          <span className="flex items-center">
            <i className="bx bx-time-five mr-1"></i>
            <span>{law.createdAt ? `Added ${new Date(law.createdAt).toLocaleDateString()}` : 'Recently added'}</span>
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <i className="bx bx-show mr-1"></i>
            <span>{law.viewCount ? `${law.viewCount.toLocaleString()} views` : 'New'}</span>
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex border-t border-neutral-100 p-0">
        <Link href={`/law/${law.id}`} className="flex-1">
          <Button variant="ghost" className="w-full py-3 text-sm text-primary-600 hover:bg-primary-50 font-medium rounded-none flex justify-center items-center h-12">
            <InfoIcon className="h-4 w-4 mr-1.5" />
            <span>Read More</span>
          </Button>
        </Link>
        <div className="w-px bg-neutral-100"></div>
        <Button variant="ghost" onClick={handleShare} className="flex-1 py-3 text-sm text-neutral-600 hover:bg-neutral-50 font-medium rounded-none flex justify-center items-center h-12">
          <Share2Icon className="h-4 w-4 mr-1.5" />
          <span>Share</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LawCard;
