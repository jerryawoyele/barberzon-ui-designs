
import { useState } from 'react';
import { Search, Menu, User, Calendar, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();
  
  // Simple check to see if we're on the authenticated home page
  const isAuthenticated = location.pathname === '/home';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">B</span>
          </div>
          <a href={isAuthenticated ? "/home" : "/"} className="text-xl font-bold gradient-text">
            BarberZon
          </a>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className={`relative w-full transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search barbers, services, or locations..."
              className="pl-10 bg-muted/50 border-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                Book Now
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Heart className="h-4 w-4 mr-2" />
                Favorites
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <MessageCircle className="h-4 w-4 mr-2" />
                Messages
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                Book Now
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Heart className="h-4 w-4 mr-2" />
                Favorites
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <MessageCircle className="h-4 w-4 mr-2" />
                Messages
              </Button>
              <a href="/auth">
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </a>
            </>
          )}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background border-border">
            <div className="flex flex-col space-y-6 mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search..."
                  className="pl-10 bg-muted/50"
                />
              </div>
              
              <nav className="flex flex-col space-y-3">
                <Button variant="ghost" className="justify-start">
                  <Calendar className="h-4 w-4 mr-3" />
                  Book Appointment
                </Button>
                <Button variant="ghost" className="justify-start">
                  <Heart className="h-4 w-4 mr-3" />
                  My Favorites
                </Button>
                <Button variant="ghost" className="justify-start">
                  <MessageCircle className="h-4 w-4 mr-3" />
                  Messages
                </Button>
                <Button variant="ghost" className="justify-start">
                  <User className="h-4 w-4 mr-3" />
                  Profile
                </Button>
              </nav>
              
              <div className="space-y-3 pt-6 border-t border-border">
                {isAuthenticated ? (
                  <Button className="w-full bg-primary text-primary-foreground">
                    View Profile
                  </Button>
                ) : (
                  <>
                    <a href="/auth">
                      <Button className="w-full bg-primary text-primary-foreground">
                        Sign In
                      </Button>
                    </a>
                    <Button variant="outline" className="w-full">
                      Join as Barber
                    </Button>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
