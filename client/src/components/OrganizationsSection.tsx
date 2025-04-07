// components/OrganizationsSection.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { FilterIcon, SearchIcon } from 'lucide-react';
import OrganizationCard from './OrganizationCard';
import { Organization, OrganizationsData } from '../types/organizations';
import organizationsData from '../data/organizations.json';

const OrganizationsSection: React.FC = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [featuredOrgs, setFeaturedOrgs] = useState<Organization[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(8);
  
  useEffect(() => {
    // Load data - we need to type assert since JSON imports don't maintain types
    const data = organizationsData as unknown as OrganizationsData;
    setOrganizations(data.organizations);
    setFeaturedOrgs(data.organizations.filter(org => org.featured));
  }, []);
  
  const filteredOrganizations = organizations.filter(org => {
    const matchesFilter = filter === 'all' || org.categories.includes(filter);
    const matchesSearch = searchQuery === '' || 
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });
  
  const categories = ["all", ...Array.from(new Set(organizations.flatMap(org => org.categories)))].sort();
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900">Support Organizations</h2>
          <p className="mt-3 text-lg text-neutral-600 max-w-2xl mx-auto">
            Trusted organizations providing assistance to women across India with specialized services
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-auto md:min-w-[300px]">
            <input
              type="text"
              placeholder="Search organizations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 outline-none"
            />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400" />
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
            <FilterIcon className="h-4 w-4 text-neutral-500 flex-shrink-0" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => setFilter(category)}
                  className={`px-3 py-1 text-sm rounded-full ${
                    filter === category 
                      ? 'bg-primary-100 text-primary-700 font-medium'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  } transition-colors whitespace-nowrap`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Featured Organizations */}
        {featuredOrgs.length > 0 && filter === 'all' && searchQuery === '' && (
          <>
            <h3 className="text-xl font-semibold text-neutral-800 mb-4">Featured Organizations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {featuredOrgs.map(org => (
                <OrganizationCard key={org.id} organization={org} />
              ))}
            </div>
          </>
        )}
        
        {/* All Organizations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredOrganizations
            .slice(0, visibleCount)
            .map(org => (
              <OrganizationCard key={org.id} organization={org} />
            ))}
        </div>
        
        {/* Load More */}
        {filteredOrganizations.length > visibleCount && (
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="border-primary-300 text-primary-700 hover:bg-primary-50"
            >
              Load More
            </Button>
          </div>
        )}
        
        {/* No Results */}
        {filteredOrganizations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600">No organizations found matching your criteria.</p>
            <Button 
              variant="link" 
              onClick={() => {setFilter('all'); setSearchQuery('');}}
              className="text-primary-600 mt-2"
            >
              Clear filters
            </Button>
          </div>
        )}
        
         
      </div>
    </section>
  );
};

export default OrganizationsSection;