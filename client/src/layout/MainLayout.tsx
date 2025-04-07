import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [location] = useLocation();

  // Close sidebar on location change (mobile)
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  }, [location]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const menuButton = document.getElementById('mobile-menu-button');
      
      if (
        sidebar && 
        menuButton && 
        !sidebar.contains(event.target as Node) && 
        !menuButton.contains(event.target as Node) && 
        window.innerWidth < 1024 && 
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <Helmet>
        <title>SheKnowsLaw - Legal Empowerment for Women in India</title>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <meta name="description" content="SheKnowsLaw helps Indian women understand their legal rights in simple, accessible language. Explore laws on domestic violence, workplace rights, property, and more." />
      </Helmet>
      
      <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        
        <main className="flex-1 overflow-y-auto bg-neutral-50">
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
