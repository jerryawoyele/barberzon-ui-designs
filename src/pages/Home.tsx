import { useState } from 'react';
import { Search, MapPin, Calendar, Star, Heart, MessageCircle, Filter, Clock, TrendingUp, Users, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for demonstration
  const upcomingBookings = [
    {
      id: 1,
      barberName: 'Marcus Johnson',
      barberId: 1,
      service: 'Premium Cut & Beard Trim',
      date: '2024-06-01',
      time: '2:00 PM',
      price: 45,
      barberImage: '/placeholder.svg'
    },
    {
      id: 2,
      barberName: 'Alex Chen',
      barberId: 2,
      service: 'Classic Haircut',
      date: '2024-06-05',
      time: '11:00 AM',
      price: 30,
      barberImage: '/placeholder.svg'
    }
  ];

  const nearbyBarbers = [
    {
      id: 1,
      name: 'Marcus Johnson',
      rating: 4.9,
      reviewCount: 127,
      distance: '0.3 miles',
      specialty: 'Fades & Beard Care',
      nextAvailable: 'Today 3:00 PM',
      image: '/placeholder.svg',
      isOnline: true
    },
    {
      id: 2,
      name: 'Alex Chen',
      rating: 4.8,
      reviewCount: 95,
      distance: '0.5 miles',
      specialty: 'Classic Cuts',
      nextAvailable: 'Tomorrow 10:00 AM',
      image: '/placeholder.svg',
      isOnline: false
    },
    {
      id: 3,
      name: 'Jordan Smith',
      rating: 4.7,
      reviewCount: 203,
      distance: '0.7 miles',
      specialty: 'Modern Styling',
      nextAvailable: 'Today 5:30 PM',
      image: '/placeholder.svg',
      isOnline: true
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'booking',
      title: 'Booking confirmed with Marcus Johnson',
      description: 'Your appointment for June 1st at 2:00 PM is confirmed',
      time: '2 hours ago',
      icon: Calendar
    },
    {
      id: 2,
      type: 'review',
      title: 'Please review your visit with Alex Chen',
      description: 'How was your experience? Your feedback helps others',
      time: '1 day ago',
      icon: Star
    },
    {
      id: 3,
      type: 'favorite',
      title: 'Jordan Smith posted new work',
      description: 'Check out their latest transformation',
      time: '2 days ago',
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, <span className="gradient-text">John</span>
          </h1>
          <p className="text-muted-foreground">Ready for your next great haircut?</p>
        </div>

        {/* Quick Search */}
        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-gold-400/5 border-primary/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search for barbers, services, or styles..."
                  className="pl-12 h-12 text-lg bg-background/80"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="hidden sm:inline">Near me</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="hidden sm:inline">Filters</span>
                </Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1 sm:flex-none">
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Bookings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                    <img
                      src={booking.barberImage}
                      alt={booking.barberName}
                      className="w-12 h-12 rounded-full bg-muted"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{booking.barberName}</h3>
                      <p className="text-sm text-muted-foreground">{booking.service}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Clock className="h-3 w-3" />
                        {booking.date} at {booking.time}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${booking.price}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
                {upcomingBookings.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No upcoming appointments</p>
                    <Button className="mt-4">Book Now</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Nearby Barbers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Barbers Near You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {nearbyBarbers.map((barber) => (
                    <div key={barber.id} className="border border-border rounded-lg p-4 hover-lift">
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <img
                            src={barber.image}
                            alt={barber.name}
                            className="w-16 h-16 rounded-full bg-muted"
                          />
                          {barber.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-background rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{barber.name}</h3>
                          <p className="text-sm text-muted-foreground">{barber.specialty}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{barber.rating}</span>
                            <span className="text-sm text-muted-foreground">({barber.reviewCount})</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{barber.distance}</p>
                        </div>
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-3 w-3 text-green-500" />
                          <span className="text-green-500">{barber.nextAvailable}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">Book Now</Button>
                          <Button size="sm" variant="outline">
                            <Heart className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageCircle className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scissors className="h-4 w-4 text-primary" />
                    <span className="text-sm">Total Cuts</span>
                  </div>
                  <span className="font-semibold">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-sm">Favorite Barbers</span>
                  </div>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Reviews Given</span>
                  </div>
                  <span className="font-semibold">18</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <activity.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium">{activity.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  View Favorites
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Messages
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Star className="h-4 w-4 mr-2" />
                  My Reviews
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
