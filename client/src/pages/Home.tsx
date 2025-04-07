import React, { useContext } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { BookOpenIcon, HelpCircleIcon, PhoneIcon, ShieldIcon, UserIcon } from 'lucide-react';
import LawList from '../components/LawList';
import QuickFacts from '../components/QuickFacts';
import Newsletter from '../components/Newsletter';
import { SearchContext } from '../context/SearchContext';
import OrganizationsSection from '../components/OrganizationsSection';

const Home: React.FC = () => {
  const { searchTerm } = useContext(SearchContext);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-secondary-600 py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
        <div className="absolute right-0 bottom-0 transform translate-x-1/3 translate-y-1/4 opacity-10">
          <i className="bx bxs-balance-scale text-[300px]"></i>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-4">Empowering Women Through Legal Knowledge</h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">Access and understand your legal rights in simple language. SheKnowsLaw helps Indian women navigate the legal system with confidence.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900">Emergency Support Services</h2>
            <p className="mt-2 text-neutral-600">Immediate help available 24/7 across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <PhoneIcon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Women's Helpline</h3>
              <p className="text-neutral-600 mb-3">National toll-free 24/7 helpline for women facing violence</p>
              <p className="font-bold text-xl text-red-600">1800-112-789</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <ShieldIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Police Helpline</h3>
              <p className="text-neutral-600 mb-3">Emergency police assistance for women in distress</p>
              <p className="font-bold text-xl text-purple-600">100</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <HelpCircleIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Legal Aid</h3>
              <p className="text-neutral-600 mb-3">Free legal assistance for women in need</p>
              <p className="font-bold text-xl text-blue-600">1516</p>
            </div>
          </div>
        </div>
      </section>

      {/* Laws Section */}
      {/* <section id="laws" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <LawList searchTerm={searchTerm} />
      </section> */}

      {/* Support Organizations - REPLACED WITH NEW COMPONENT */}
      <OrganizationsSection />

      {/* Quick Facts */}
      <QuickFacts />

      {/* Know Your Rights Card */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-12 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Know Your Rights</h2>
              <p className="text-white/90 max-w-xl">Our comprehensive guides explain your legal rights in simple language. From workplace discrimination to domestic violence, understand how the law protects you.</p>
            </div>
            <div className="flex-shrink-0">
              <Button asChild variant="default" className="bg-white text-primary-600 hover:bg-neutral-100">
                <Link href="/rights-guides">
                  Access Free Guides
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;