
import { Star, MapPin, Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturedBarbers = () => {
  const barbers = [
    {
      id: 1,
      name: 'Marcus Johnson',
      rating: 4.9,
      reviews: 127,
      location: 'Downtown • 2.1 miles',
      specialties: ['Fades', 'Beard Trim', 'Classic Cuts'],
      price: '$35-65',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      available: 'Today 2:00 PM'
    },
    {
      id: 2,
      name: 'David Martinez',
      rating: 4.8,
      reviews: 89,
      location: 'Midtown • 1.5 miles',
      specialties: ['Modern Cuts', 'Styling', 'Shampoo'],
      price: '$40-70',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      available: 'Tomorrow 10:00 AM'
    },
    {
      id: 3,
      name: 'Alex Thompson',
      rating: 5.0,
      reviews: 203,
      location: 'Uptown • 0.8 miles',
      specialties: ['Hot Towel Shave', 'Beard Care', 'Traditional'],
      price: '$50-80',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      available: 'Today 4:30 PM'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Barbers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Top-rated professionals in your area, ready to give you the perfect cut
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {barbers.map((barber) => (
            <Card key={barber.id} className="group hover-lift bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                {/* Header with image and heart */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-gold-500/10">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-20 h-20 rounded-full object-cover absolute bottom-4 left-4 border-4 border-background"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 text-muted-foreground hover:text-red-500 transition-colors"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                      Available {barber.available}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{barber.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-current text-yellow-400 mr-1" />
                        <span className="font-medium">{barber.rating}</span>
                        <span className="ml-1">({barber.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {barber.location}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {barber.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  {/* Price and book button */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-semibold text-primary">{barber.price}</span>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Barbers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBarbers;
