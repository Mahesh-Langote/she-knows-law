import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about new laws and resources.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 overflow-hidden shadow-xl">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-16">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-heading font-bold tracking-tight text-white">Stay updated with legal changes</h2>
              <p className="mt-4 max-w-3xl text-lg text-primary-100">
                Get notified when we add new laws, update existing ones, or when there are important legal developments for women in India.
              </p>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <form className="sm:flex" onSubmit={handleSubmit}>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <Input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border-0 px-5 py-3 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
                  placeholder="Enter your email"
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-800 px-5 py-3 text-base font-medium text-white hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
              <p className="mt-3 text-sm text-primary-100">
                We care about your data. Read our{' '}
                <a href="#" className="font-medium text-white underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
