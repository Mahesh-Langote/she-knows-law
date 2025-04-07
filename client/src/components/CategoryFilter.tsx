import React from 'react';
import { Category } from '../types/law';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: Category | null;
  selectedTags: string[];
  onTagRemove: (tag: string) => void;
  onClearFilters: () => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  selectedTags,
  onTagRemove,
  onClearFilters
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {selectedTags.map((tag) => (
        <Badge key={tag} variant="outline" className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
          <span>{tag}</span>
          <button onClick={() => onTagRemove(tag)} className="ml-1 text-primary-600 hover:text-primary-800">
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
      
      {(selectedCategory || selectedTags.length > 0) && (
        <Button 
          variant="outline" 
          onClick={onClearFilters}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border border-dashed border-neutral-300 text-neutral-600 hover:bg-neutral-50"
        >
          Clear Filters
        </Button>
      )}
      
      {!selectedCategory && selectedTags.length === 0 && (
        <Badge variant="outline" className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border border-dashed border-neutral-300 text-neutral-600">
          <span>All Laws</span>
        </Badge>
      )}
    </div>
  );
};

export default CategoryFilter;
