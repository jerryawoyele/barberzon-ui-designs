
import { useState } from 'react';
import { Calendar, Users, Star, DollarSign, MessageCircle, Camera, Clock, TrendingUp, Scissors, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';

const BarbersHome = () => {
  // Mock data for barber dashboard
  const todayAppointments = [
    {
      id: 1,
      clientName: 'John Smith',
      service: 'Premium Cut & Beard Trim',
      time: '10:00 AM',
      price: 45,
      status: 'confirmed',
      clientImage: '/placeholder.svg'
    },
    {
      id: 2,
      clientName: 'Mike Johnson',
      service: 'Classic Haircut',
      time: '2:30 PM',
      price: 30,
      status: 'pending',
      clientImage: '/placeholder.svg'
    },
    {
      id: 3,
      clientName: 'David Wilson',
      service: 'Beard Styling',
      time: '4:00 PM',
      price: 25,
      status: 'confirmed',
      clientImage: '/placeholder.svg'
    }
  ];

  const recentWork = [
    {
      id: 1,
      image: '/placeholder.svg',
      description: 'Fresh fade for weekend vibes',
      likes: 23,
      views: 156,
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      image: '/placeholder.svg',
      description: 'Classic pompadour with modern twist',
      likes: 18,
      views: 98,
      timeAgo: '1 day ago'
    },
    {
      id: 3,
      image: '/placeholder.svg',
      description: 'Beard sculpting masterpiece',
      likes: 31,
      views: 204,
      timeAgo: '2 days ago'
    }
  ];

  const stats = {
    todayBookings: 5,
    weeklyRevenue: 780,
    totalClients: 127,
    averageRating: 4.8,
    completedCuts: 234
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, <span className="gradient-text">Marcus</span>
          </h1>
          <p className="text-muted-foreground">Ready to create amazing transformations today?</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Today</p>
                  <p className="text-2xl font-bold">{stats.todayBookings}</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Week Revenue</p>
                  <p className="text-2xl font-bold">${stats.weeklyRevenue}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Clients</p>
                  <p className="text-2xl font-bold">{stats.totalClients}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                  <p className="text-2xl font-bold">{stats.averageRating}</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Cuts</p>
                  <p className="text-2xl font-bold">{stats.completedCuts}</p>
                </div>
                <Scissors className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Today's Appointments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {todayAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                    <img
                      src={appointment.clientImage}
                      alt={appointment.clientName}
                      className="w-12 h-12 rounded-full bg-muted"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{appointment.clientName}</h3>
                      <p className="text-sm text-muted-foreground">{appointment.service}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Clock className="h-3 w-3" />
                        {appointment.time}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${appointment.price}</p>
                      <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                        {appointment.status}
                      </Badge>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-3 w-3" />
                        </Button>
                        <Button size="sm">Complete</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Work Portfolio */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5 text-primary" />
                    Recent Work
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Add Photo
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recentWork.map((work) => (
                    <div key={work.id} className="border border-border rounded-lg overflow-hidden hover-lift">
                      <img
                        src={work.image}
                        alt={work.description}
                        className="w-full h-48 object-cover bg-muted"
                      />
                      <div className="p-3">
                        <p className="text-sm font-medium mb-2">{work.description}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              {work.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {work.views}
                            </span>
                          </div>
                          <span>{work.timeAgo}</span>
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
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Manage Schedule
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Camera className="h-4 w-4 mr-2" />
                  Upload Work
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  View Clients
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Messages
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Weekly Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Appointments</span>
                  <span className="font-semibold">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Revenue</span>
                  <span className="font-semibold text-green-600">${stats.weeklyRevenue}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">New Clients</span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Avg. Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{stats.averageRating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Messages Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Messages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">John Smith</p>
                    <p className="text-xs text-muted-foreground">Can we reschedule to 3 PM?</p>
                    <p className="text-xs text-muted-foreground mt-1">5 min ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Mike Johnson</p>
                    <p className="text-xs text-muted-foreground">Thanks for the great cut!</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BarbersHome;
