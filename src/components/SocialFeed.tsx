
import { Heart, MessageCircle, Share, MoreHorizontal, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SocialFeed = () => {
  const posts = [
    {
      id: 1,
      barber: {
        name: 'Marcus Johnson',
        username: '@marcus_cuts',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        verified: true
      },
      content: 'Fresh fade for my client today! 🔥 What do you think?',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&h=600&fit=crop',
      likes: 127,
      comments: 23,
      timeAgo: '2h',
      isLiked: false
    },
    {
      id: 2,
      barber: {
        name: 'David Martinez',
        username: '@david_styles',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        verified: true
      },
      content: 'Classic pompadour with a modern twist. Book your appointment through the link in my bio! ✂️',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&h=600&fit=crop',
      likes: 89,
      comments: 15,
      timeAgo: '4h',
      isLiked: true
    },
    {
      id: 3,
      barber: {
        name: 'Alex Thompson',
        username: '@alex_traditional',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        verified: true
      },
      content: 'Traditional hot towel shave experience. Nothing beats the classics 🪒',
      image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=500&h=600&fit=crop',
      likes: 203,
      comments: 34,
      timeAgo: '6h',
      isLiked: false
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Latest <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our talented barbers are creating and get inspired for your next cut
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="bg-card border-border overflow-hidden animate-fade-in">
              <CardContent className="p-0">
                {/* Post Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.barber.avatar}
                      alt={post.barber.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center space-x-1">
                        <h3 className="font-semibold text-sm">{post.barber.name}</h3>
                        {post.barber.verified && (
                          <Star className="h-3 w-3 fill-current text-primary" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{post.barber.username} • {post.timeAgo}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      Book
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Post Content */}
                <div className="px-4 pb-3">
                  <p className="text-sm">{post.content}</p>
                </div>

                {/* Post Image */}
                <div className="relative group">
                  <img
                    src={post.image}
                    alt="Barber work"
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Post Actions */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`text-muted-foreground hover:text-red-500 transition-colors ${
                          post.isLiked ? 'text-red-500' : ''
                        }`}
                      >
                        <Heart className={`h-5 w-5 mr-1 ${post.isLiked ? 'fill-current' : ''}`} />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500 transition-colors">
                        <MessageCircle className="h-5 w-5 mr-1" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500 transition-colors">
                        <Share className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Quick book section */}
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Like this style? </span>
                      <span className="font-medium">Book with {post.barber.name.split(' ')[0]}</span>
                    </div>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
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
            View More Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
