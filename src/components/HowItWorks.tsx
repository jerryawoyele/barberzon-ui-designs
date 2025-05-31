
import { Search, Calendar, Scissors, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Find Your Barber',
      description: 'Browse profiles, check reviews, and discover barbers near you'
    },
    {
      icon: Calendar,
      title: 'Book Instantly',
      description: 'Choose your service and book an available time slot that works for you'
    },
    {
      icon: Scissors,
      title: 'Get Your Cut',
      description: 'Enjoy your appointment and experience professional service'
    },
    {
      icon: Star,
      title: 'Share & Review',
      description: 'Rate your experience and follow your favorite barbers'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting your perfect haircut is just a few taps away
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover-lift bg-card border-border group">
              <CardContent className="p-6 space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 space-y-6">
          <div className="glass-effect p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-muted-foreground mb-6">Join thousands of satisfied clients and talented barbers</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                Find a Barber
              </button>
              <button className="px-8 py-3 border border-border rounded-xl font-semibold hover:bg-muted/50 transition-colors">
                Join as Barber
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
