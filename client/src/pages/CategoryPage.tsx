import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'wouter';
import categories from '../data/categories';
import { SearchContext } from '../context/SearchContext';
import LawList from '../components/LawList';
import CategoryFilter from '../components/CategoryFilter';

const CategoryPage: React.FC = () => {
  const { id } = useParams();
  const { searchTerm } = useContext(SearchContext);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [category, setCategory] = useState(categories.find(cat => cat.id === id) || null);

  useEffect(() => {
    setCategory(categories.find(cat => cat.id === id) || null);
  }, [id]);

  const handleTagRemove = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <CategoryFilter 
        selectedCategory={category}
        selectedTags={selectedTags}
        onTagRemove={handleTagRemove}
        onClearFilters={clearFilters}
      />
      
      <LawList 
        categoryId={id} 
        searchTerm={searchTerm}
        selectedTags={selectedTags}
      />
    </section>
  );
};

export default CategoryPage;
