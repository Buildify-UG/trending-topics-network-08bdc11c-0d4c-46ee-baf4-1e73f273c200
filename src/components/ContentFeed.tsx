import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

interface Post {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  author: string;
  likes: number;
  comments: number;
  views: number;
  trending: boolean;
}

const allPosts: Post[] = [
  {
    id: '1',
    title: 'Summer Fashion Trends 2024',
    description: 'Discover the hottest summer fashion trends this season. From minimalist designs to bold colors...',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1595777707802-c3b73e83a8a7?w=500&h=400&fit=crop',
    author: 'Fashion Daily',
    likes: 2543,
    comments: 387,
    views: 15200,
    trending: true,
  },
  {
    id: '2',
    title: 'Paris Fashion Week Highlights',
    description: 'The most glamorous moments from Paris Fashion Week. Stunning runway looks and designer collections.',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1609010917640-0d2c7f8c3e04?w=500&h=400&fit=crop',
    author: 'Style Magazine',
    likes: 3210,
    comments: 521,
    views: 18900,
    trending: true,
  },
  {
    id: '3',
    title: 'Messi\'s Latest Championship Victory',
    description: 'Watch the incredible performance that led to this historic victory. Amazing goals and team plays.',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=400&fit=crop',
    author: 'Sports Central',
    likes: 5421,
    comments: 892,
    views: 42100,
    trending: true,
  },
  {
    id: '4',
    title: 'Basketball Finals Recap',
    description: 'The most thrilling basketball finals of the season. Incredible plays and clutch moments.',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1546519638-68711109d298?w=500&h=400&fit=crop',
    author: 'Sports Hub',
    likes: 4123,
    comments: 654,
    views: 32500,
    trending: true,
  },
  {
    id: '5',
    title: 'Michelin Star Recipes You Can Make',
    description: 'Learn to cook like a professional chef. Easy Michelin-star inspired recipes for home cooking.',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=400&fit=crop',
    author: 'Chef\'s Kitchen',
    likes: 3876,
    comments: 512,
    views: 28400,
    trending: true,
  },
  {
    id: '6',
    title: 'Healthy Meal Prep Ideas',
    description: 'Transform your eating habits with these nutritious meal prep ideas. Perfect for busy lifestyles.',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop',
    author: 'Nutrition Expert',
    likes: 2934,
    comments: 423,
    views: 19200,
    trending: false,
  },
  {
    id: '7',
    title: 'Taylor Swift\'s New Album Review',
    description: 'Breaking down the new album with exclusive analysis. The best tracks and hidden gems.',
    category: 'entertainment',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=400&fit=crop',
    author: 'Music Insider',
    likes: 6234,
    comments: 1203,
    views: 54300,
    trending: true,
  },
  {
    id: '8',
    title: 'Latest Dance Moves Tutorial',
    description: 'Master the hottest dance moves trending on social media. Step-by-step tutorials included.',
    category: 'entertainment',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2176d46?w=500&h=400&fit=crop',
    author: 'Dance Academy',
    likes: 4567,
    comments: 789,
    views: 38900,
    trending: true,
  },
  {
    id: '9',
    title: 'Best Calisthenics Workout Routine',
    description: 'Get fit with this complete calisthenics routine. No gym equipment needed, full body workout.',
    category: 'fitness',
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=500&h=400&fit=crop',
    author: 'Fitness Coach',
    likes: 3421,
    comments: 567,
    views: 26800,
    trending: true,
  },
  {
    id: '10',
    title: 'Yoga for Flexibility & Strength',
    description: 'Combine yoga and strength training for optimal results. Transform your body in 30 days.',
    category: 'fitness',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=400&fit=crop',
    author: 'Yoga Master',
    likes: 2876,
    comments: 421,
    views: 18900,
    trending: false,
  },
  {
    id: '11',
    title: 'Winter Fashion Essentials',
    description: 'Must-have winter pieces to elevate your wardrobe. Cozy yet stylish outfits for cold weather.',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1539533057440-7814a60d4c86?w=500&h=400&fit=crop',
    author: 'Style Guide',
    likes: 2145,
    comments: 312,
    views: 14500,
    trending: false,
  },
  {
    id: '12',
    title: 'UFC Championship Fight Analysis',
    description: 'Deep dive into the championship fight. Expert analysis of techniques and strategies.',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&h=400&fit=crop',
    author: 'MMA Insider',
    likes: 3987,
    comments: 678,
    views: 31200,
    trending: true,
  },
];

interface ContentFeedProps {
  category: string;
}

export default function ContentFeed({ category }: ContentFeedProps) {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [savedPosts, setSavedPosts] = useState<Set<string>>(new Set());

  const filteredPosts = category === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category === category);

  const toggleLike = (id: string) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedPosts(newLiked);
  };

  const toggleSave = (id: string) => {
    const newSaved = new Set(savedPosts);
    if (newSaved.has(id)) {
      newSaved.delete(id);
    } else {
      newSaved.add(id);
    }
    setSavedPosts(newSaved);
  };

  return (
    <div className="space-y-6">
      {filteredPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="w-full md:w-64 h-64 md:h-auto flex-shrink-0 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {post.category.toUpperCase()}
                  </span>
                  {post.trending && (
                    <span className="text-xs font-semibold text-red-500 bg-red-500/10 px-2 py-1 rounded flex items-center gap-1">
                      🔥 TRENDING
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>By {post.author}</span>
                  <span>👁️ {(post.views / 1000).toFixed(1)}K views</span>
                </div>
              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2"
                  onClick={() => toggleLike(post.id)}
                >
                  <Heart 
                    className={`w-4 h-4 ${likedPosts.has(post.id) ? 'fill-red-500 text-red-500' : ''}`}
                  />
                  <span className="text-xs">{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                </Button>
                
                <Button variant="ghost" size="sm" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs">{post.comments}</span>
                </Button>
                
                <Button variant="ghost" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 ml-auto"
                  onClick={() => toggleSave(post.id)}
                >
                  <Bookmark 
                    className={`w-4 h-4 ${savedPosts.has(post.id) ? 'fill-primary text-primary' : ''}`}
                  />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
