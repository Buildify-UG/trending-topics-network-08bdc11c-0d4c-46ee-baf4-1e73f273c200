import { X, Globe, TrendingUp, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

interface NewsModalProps {
  onClose: () => void;
}

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  source: string;
  timestamp: string;
  region: string;
  category: string;
}

const trendingNews: NewsItem[] = [
  {
    id: '1',
    title: 'Global Fashion Week Concludes with Record Attendance',
    description: 'The international fashion week attracted over 500,000 visitors and showcased innovative designs from emerging designers worldwide.',
    image: 'https://images.unsplash.com/photo-1609010917640-0d2c7f8c3e04?w=500&h=300&fit=crop',
    source: 'Fashion Times',
    timestamp: '2 hours ago',
    region: 'Europe',
    category: 'Fashion',
  },
  {
    id: '2',
    title: 'Historic Sports Championship Victory',
    description: 'In a thrilling final match, the underdog team secured their first championship title in 50 years with an incredible comeback.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop',
    source: 'Sports Central',
    timestamp: '4 hours ago',
    region: 'North America',
    category: 'Sports',
  },
  {
    id: '3',
    title: 'New Culinary Trends Dominate Food Industry',
    description: 'Sustainable and locally-sourced ingredients are reshaping the global culinary landscape as chefs embrace eco-conscious cooking.',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=300&fit=crop',
    source: 'Culinary News',
    timestamp: '5 hours ago',
    region: 'Global',
    category: 'Food',
  },
  {
    id: '4',
    title: 'Fitness Revolution: New Technologies Transform Workouts',
    description: 'AI-powered fitness apps and wearable technology are revolutionizing how people approach health and fitness globally.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=500&h=300&fit=crop',
    source: 'Health Today',
    timestamp: '6 hours ago',
    region: 'Asia',
    category: 'Fitness',
  },
  {
    id: '5',
    title: 'Music Festival Breaks Attendance Records',
    description: 'The world\'s largest music festival welcomed 2 million attendees, featuring performances from top artists across all genres.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
    source: 'Entertainment Weekly',
    timestamp: '8 hours ago',
    region: 'Europe',
    category: 'Entertainment',
  },
  {
    id: '6',
    title: 'Dance Movement Goes Viral on Social Media',
    description: 'A new choreography trend has gone viral with over 50 million views, inspiring dancers worldwide to participate.',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2176d46?w=500&h=300&fit=crop',
    source: 'Viral Trends',
    timestamp: '10 hours ago',
    region: 'Global',
    category: 'Entertainment',
  },
];

const worldNews: NewsItem[] = [
  {
    id: '7',
    title: 'Economic Growth Surges Across Emerging Markets',
    description: 'Multiple emerging economies report double-digit growth rates, signaling strong global economic recovery.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    source: 'Global Finance',
    timestamp: '3 hours ago',
    region: 'Asia',
    category: 'Business',
  },
  {
    id: '8',
    title: 'Climate Action Initiative Gains Momentum',
    description: 'Over 150 countries commit to ambitious climate goals, pledging to reach net-zero emissions by 2050.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop',
    source: 'Environmental News',
    timestamp: '5 hours ago',
    region: 'Global',
    category: 'Environment',
  },
  {
    id: '9',
    title: 'Breakthrough in Medical Research',
    description: 'Scientists announce a major breakthrough in treating previously incurable diseases using innovative gene therapy.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop',
    source: 'Medical Times',
    timestamp: '7 hours ago',
    region: 'North America',
    category: 'Science',
  },
  {
    id: '10',
    title: 'Tech Innovation Transforms Daily Life',
    description: 'New technological advancements are revolutionizing how people work, communicate, and live in the digital age.',
    image: 'https://images.unsplash.com/photo-1518432031498-7d82f742821d?w=500&h=300&fit=crop',
    source: 'Tech Weekly',
    timestamp: '9 hours ago',
    region: 'Global',
    category: 'Technology',
  },
];

export default function NewsModal({ onClose }: NewsModalProps) {
  const [activeTab, setActiveTab] = useState('trending');

  const displayNews = activeTab === 'trending' ? trendingNews : worldNews;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-96 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold">News & Worldwide</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
          <TabsList className="w-full rounded-none border-b border-border bg-background p-0">
            <TabsTrigger
              value="trending"
              className="rounded-none flex-1 flex items-center gap-2 border-b-2 border-transparent data-[state=active]:border-primary"
            >
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Trending</span>
            </TabsTrigger>
            <TabsTrigger
              value="world"
              className="rounded-none flex-1 flex items-center gap-2 border-b-2 border-transparent data-[state=active]:border-primary"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">World</span>
            </TabsTrigger>
          </TabsList>

          {/* Content */}
          <TabsContent value={activeTab} className="flex-1 overflow-y-auto">
            <div className="space-y-3 p-4">
              {displayNews.map((news) => (
                <div
                  key={news.id}
                  className="flex gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                      {news.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <span className="inline-block bg-primary/10 text-primary px-2 py-0.5 rounded">
                        {news.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{news.region}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">{news.source}</span>
                      <span className="text-xs text-muted-foreground">{news.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
