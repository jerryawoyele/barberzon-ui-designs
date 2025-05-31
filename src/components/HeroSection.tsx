
import { ArrowRight, Star, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Find Your Perfect
                <span className="gradient-text block">Barber</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with skilled barbers, book appointments instantly, and discover amazing work in your area.
              </p>
            </div>

            {/* Stats */}
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Barbers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Bookings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground flex items-center">
                  <Star className="h-3 w-3 fill-current mr-1" /> Rating
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Enter your location"
                    className="pl-10 h-12 bg-muted/50 border-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <Button size="lg" className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Find Barbers
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  Haircut
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Beard Trim
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Fade
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Hot Towel Shave
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Calendar className="mr-2 h-4 w-4" />
                Book Now
              </Button>
              <Button variant="outline" size="lg">
                Join as Barber
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:pl-8">
            <div className="relative z-10 space-y-4">
              {/* Mock barber cards */}
              <div className="glass-effect p-4 rounded-2xl hover-lift animate-scale-in">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Marcus Johnson</h3>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-3 w-3 fill-current text-yellow-400" />
                      <span>4.9 • 2.1 miles away</span>
                    </div>
                  </div>
                  <Button size="sm" className="bg-primary text-primary-foreground">
                    Book
                  </Button>
                </div>
              </div>

              <div className="glass-effect p-4 rounded-2xl hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold">David Martinez</h3>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-3 w-3 fill-current text-yellow-400" />
                      <span>4.8 • 1.5 miles away</span>
                    </div>
                  </div>
                  <Button size="sm" className="bg-primary text-primary-foreground">
                    Book
                  </Button>
                </div>
              </div>

              <div className="glass-effect p-4 rounded-2xl hover-lift animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Alex Thompson</h3>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-3 w-3 fill-current text-yellow-400" />
                      <span>5.0 • 0.8 miles away</span>
                    </div>
                  </div>
                  <Button size="sm" className="bg-primary text-primary-foreground">
                    Book
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
