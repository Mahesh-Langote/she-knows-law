import React, { useState, useEffect } from 'react';
import { Law, Category } from '../types/law';
import LawCard from './LawCard';
import constitutionalLaws from '../data/laws/constitutional';
import domesticLaws from '../data/laws/domestic';
import workplaceLaws from '../data/laws/workplace';
import propertyLaws from '../data/laws/property';
import criminalLaws from '../data/laws/criminal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon, GridIcon, ListIcon } from 'lucide-react';

interface LawListProps {
  categoryId?: string;
  searchTerm?: string;
  selectedTags?: string[];
}

type SortOption = 'relevant' | 'recent' | 'alphabetical' | 'views';
type ViewMode = 'grid' | 'list';

const LawList: React.FC<LawListProps> = ({ 
  categoryId, 
  searchTerm = '', 
  selectedTags = []
}) => {
  const [sortBy, setSortBy] = useState<SortOption>('relevant');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredLaws, setFilteredLaws] = useState<Law[]>([]);
  const itemsPerPage = 6;

  // Get all laws
  const allLaws = [
    ...constitutionalLaws,
    ...domesticLaws,
    ...workplaceLaws,
    ...propertyLaws,
    ...criminalLaws
  ];

  useEffect(() => {
    let filtered = allLaws;

    // Filter by category
    if (categoryId) {
      filtered = filtered.filter(law => law.categoryId === categoryId);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(law => 
        law.title.toLowerCase().includes(term) || 
        law.simplifiedDescription.toLowerCase().includes(term) ||
        law.description.toLowerCase().includes(term) ||
        (law.articleNumber && law.articleNumber.toLowerCase().includes(term))
      );
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(law => 
        law.tags.some(tag => selectedTags.includes(tag.name))
      );
    }

    // Apply sorting
    if (sortBy === 'recent') {
      filtered = [...filtered].sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    } else if (sortBy === 'alphabetical') {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'views') {
      filtered = [...filtered].sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0));
    }

    setFilteredLaws(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [categoryId, searchTerm, selectedTags, sortBy, allLaws]);

  // Pagination
  const totalPages = Math.ceil(filteredLaws.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLaws = filteredLaws.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <h2 className="text-2xl font-heading font-semibold text-neutral-900">
          {categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) + " Laws" : "All Laws"}
          {searchTerm && <span className="text-neutral-500 text-lg ml-2">for "{searchTerm}"</span>}
        </h2>
        
        <div className="mt-3 sm:mt-0 flex items-center space-x-4">
          <div className="relative">
            <Select
              value={sortBy}
              onValueChange={(value) => setSortBy(value as SortOption)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevant">Most Relevant</SelectItem>
                <SelectItem value="recent">Recently Added</SelectItem>
                <SelectItem value="alphabetical">Alphabetical</SelectItem>
                <SelectItem value="views">Most Viewed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="flex items-center"
            >
              <ListIcon className="h-4 w-4 mr-1" />
              <span>List</span>
            </Button>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="flex items-center"
            >
              <GridIcon className="h-4 w-4 mr-1" />
              <span>Grid</span>
            </Button>
          </div>
        </div>
      </div>

      {filteredLaws.length === 0 ? (
        <div className="text-center py-10">
          <h3 className="text-lg font-medium text-neutral-900 mb-2">No laws found</h3>
          <p className="text-neutral-600">Try adjusting your filters or search terms</p>
        </div>
      ) : (
        <div className={`grid grid-cols-1 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-6`}>
          {paginatedLaws.map(law => (
            <LawCard key={law.id} law={law} />
          ))}
        </div>
      )}

          </div>
  );
};

export default LawList;
