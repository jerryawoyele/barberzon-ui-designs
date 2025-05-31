
import { useState } from 'react';
import { Search, Star, MapPin, Calendar, Scissors, Users, Heart, MessageCircle, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedBarbers from '@/components/FeaturedBarbers';
import SocialFeed from '@/components/SocialFeed';
import HowItWorks from '@/components/HowItWorks';

const Index = () => {
  return (
    <div className="min-h-screen elegant-background">
      <Header />
      <HeroSection />
      <FeaturedBarbers />
      <SocialFeed />
      <HowItWorks />
      
      {/* Footer */}
      <footer className="border-t border-border/20 glass-effect mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text font-display">BarberZon</h3>
              <p className="text-muted-foreground">Connect with the best barbers in your area and showcase your skills.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold font-display">For Clients</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Find Barbers</li>
                <li>Book Appointments</li>
                <li>Follow Your Favorites</li>
                <li>Leave Reviews</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold font-display">For Barbers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Create Profile</li>
                <li>Manage Bookings</li>
                <li>Share Your Work</li>
                <li>Grow Your Business</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold font-display">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/20 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 BarberZon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
