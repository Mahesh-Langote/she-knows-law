import React from 'react';
import { Link } from 'wouter';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-md bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="text-xl font-heading font-semibold text-white">SheKnowsLaw</span>
            </div>
            <p className="text-neutral-300 text-base">
              Empowering women in India through accessible legal knowledge, simplified explanations, and practical resources.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-neutral-300">
                <i className="bx bxl-facebook text-xl"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-neutral-300">
                <i className="bx bxl-instagram text-xl"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-neutral-300">
                <i className="bx bxl-twitter text-xl"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-neutral-300">
                <i className="bx bxl-youtube text-xl"></i>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-heading font-semibold text-neutral-300 tracking-wider uppercase">Legal Categories</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/category/constitutional" className="text-base text-neutral-400 hover:text-neutral-300">Constitutional Rights</Link>
                  </li>
                  <li>
                    <Link href="/category/domestic" className="text-base text-neutral-400 hover:text-neutral-300">Domestic Violence</Link>
                  </li>
                  <li>
                    <Link href="/category/workplace" className="text-base text-neutral-400 hover:text-neutral-300">Workplace Rights</Link>
                  </li>
                  <li>
                    <Link href="/category/property" className="text-base text-neutral-400 hover:text-neutral-300">Property Rights</Link>
                  </li>
                  <li>
                    <Link href="/category/criminal" className="text-base text-neutral-400 hover:text-neutral-300">Criminal Laws</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-heading font-semibold text-neutral-300 tracking-wider uppercase">Resources</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/resources/helpline" className="text-base text-neutral-400 hover:text-neutral-300">Helpline Numbers</Link>
                  </li>
                  <li>
                    <Link href="/resources/ngo" className="text-base text-neutral-400 hover:text-neutral-300">NGO Support</Link>
                  </li>
                  <li>
                    <Link href="/resources/documents" className="text-base text-neutral-400 hover:text-neutral-300">Document Templates</Link>
                  </li>
                  <li>
                    <Link href="/resources/legal-aid" className="text-base text-neutral-400 hover:text-neutral-300">Legal Aid Clinics</Link>
                  </li>
                  <li>
                    <Link href="/resources/faq" className="text-base text-neutral-400 hover:text-neutral-300">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-heading font-semibold text-neutral-300 tracking-wider uppercase">About Us</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about/mission" className="text-base text-neutral-400 hover:text-neutral-300">Our Mission</Link>
                  </li>
                  <li>
                    <Link href="/about/team" className="text-base text-neutral-400 hover:text-neutral-300">Team</Link>
                  </li>
                  <li>
                    <Link href="/about/contributors" className="text-base text-neutral-400 hover:text-neutral-300">Contributors</Link>
                  </li>
                  <li>
                    <Link href="/about/testimonials" className="text-base text-neutral-400 hover:text-neutral-300">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="/about/press" className="text-base text-neutral-400 hover:text-neutral-300">Press</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-heading font-semibold text-neutral-300 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/legal/privacy" className="text-base text-neutral-400 hover:text-neutral-300">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/legal/terms" className="text-base text-neutral-400 hover:text-neutral-300">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="/legal/cookie" className="text-base text-neutral-400 hover:text-neutral-300">Cookie Policy</Link>
                  </li>
                  <li>
                    <Link href="/legal/disclaimer" className="text-base text-neutral-400 hover:text-neutral-300">Disclaimer</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base text-neutral-400 hover:text-neutral-300">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-800 pt-8">
          <p className="text-base text-neutral-400 text-center">
            &copy; {new Date().getFullYear()} SheKnowsLaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
