import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Input } from '@/components/ui/input';
import SearchBar from './SearchBar';
import categories from '../data/categories';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [location] = useLocation();
  
  const getColorClass = (color: string, selected: boolean) => {
    if (selected) {
      return `text-${color}-500`;
    }
    return `text-${color}-500`;
  };

  const getBackgroundClass = (color: string, selected: boolean) => {
    if (selected) {
      return `bg-${color}-100 text-${color}-600`;
    }
    return `bg-neutral-100 text-neutral-600`;
  };

  const closeSidebar = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <button 
          onClick={() => setIsOpen(true)} 
          className="p-2 rounded-md bg-white shadow-md text-neutral-700"
        >
          <i className="bx bx-menu text-2xl"></i>
        </button>
      </div>
      
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:flex-shrink-0 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-20 flex flex-col`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-neutral-200">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="text-lg font-heading font-semibold text-gradient">SheKnowsLaw</span>
          </Link>
          <button 
            onClick={() => setIsOpen(false)} 
            className="lg:hidden text-neutral-500 hover:text-neutral-700"
          >
            <i className="bx bx-x text-2xl"></i>
          </button>
        </div>
        
        {/* Search */}
        <div className="px-4 py-4 border-b border-neutral-200">
          <SearchBar />
        </div>
        
        {/* Nav Categories */}
        <nav className="flex-1 px-2 py-4 overflow-y-auto">
          <h3 className="px-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Categories</h3>
          <div className="mt-2 space-y-1">
            {categories.map((category) => {
              const isSelected = location === `/category/${category.id}`;
              return (
                <Link 
                  key={category.id}
                  href={`/category/${category.id}`}
                  onClick={closeSidebar}
                >
                  <a className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md ${isSelected ? 'text-neutral-900 bg-neutral-100' : 'text-neutral-700 hover:bg-neutral-100'} group transition-colors`}>
                    <div className="flex items-center">
                      <i className={`bx ${category.icon} ${getColorClass(category.color, isSelected)} mr-3 text-lg`}></i>
                      <span>{category.name}</span>
                    </div>
                    <span className={`${getBackgroundClass(category.color, isSelected)} text-xs px-2 py-0.5 rounded-full`}>
                      {category.count}
                    </span>
                  </a>
                </Link>
              );
            })}
          </div>
          
          <h3 className="mt-8 px-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Resources</h3>
          <div className="mt-2 space-y-1">
            <Link href="/resources/helpline" onClick={closeSidebar}>
              <a className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100 group transition-colors">
                <i className="bx bx-phone text-success mr-3 text-lg"></i>
                <span>Helpline Numbers</span>
              </a>
            </Link>
            <Link href="/resources/ngo" onClick={closeSidebar}>
              <a className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100 group transition-colors">
                <i className="bx bx-building text-primary-500 mr-3 text-lg"></i>
                <span>NGO Support</span>
              </a>
            </Link>
            <Link href="/resources/documents" onClick={closeSidebar}>
              <a className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100 group transition-colors">
                <i className="bx bx-file text-secondary-500 mr-3 text-lg"></i>
                <span>Document Templates</span>
              </a>
            </Link>
          </div>
        </nav>
        
        {/* Footer */}
        <div className="p-4 border-t border-neutral-200">
          <Link href="/about">
            <a className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors" onClick={closeSidebar}>
              <i className="bx bx-question-mark mr-2"></i>
              <span>How to Use This Site</span>
            </a>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
