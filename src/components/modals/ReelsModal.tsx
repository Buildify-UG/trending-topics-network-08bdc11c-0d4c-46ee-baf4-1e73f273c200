import { X, Play, Pause, Volume2, VolumeX, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

interface ReelsModalProps {
  onClose: () => void;
}

interface Reel {
  id: string;
  title: string;
  creator: string;
  category: string;
  thumbnail: string;
  likes: number;
  comments: number;
}

const reels: Reel[] = [
  {
    id: '1',
    title: 'Summer Fashion Lookbook',
    creator: 'Fashion Guru',
    category: 'Fashion',
    thumbnail: 'https://images.unsplash.com/photo-1595777707802-c3b73e83a8a7?w=400&h=600&fit=crop',
    likes: 8234,
    comments: 521,
  },
  {
    id: '2',
    title: 'Epic Sports Moments',
    creator: 'Sports Daily',
    category: 'Sports',
    thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=600&fit=crop',
    likes: 12543,
    comments: 892,
  },
  {
    id: '3',
    title: 'Quick Healthy Recipes',
    creator: 'Chef\'s Kitchen',
    category: 'Food',
    thumbnail: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=600&fit=crop',
    likes: 6234,
    comments: 412,
  },
  {
    id: '4',
    title: 'Dance Challenge 2024',
    creator: 'Dance Vibes',
    category: 'Entertainment',
    thumbnail: 'https://images.unsplash.com/photo-1504609773096-104ff2176d46?w=400&h=600&fit=crop',
    likes: 15234,
    comments: 1203,
  },
  {
    id: '5',
    title: 'Home Gym Workout',
    creator: 'Fitness Pro',
    category: 'Fitness',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=600&fit=crop',
    likes: 9876,
    comments: 654,
  },
  {
    id: '6',
    title: 'Winter Fashion Haul',
    creator: 'Style Maven',
    category: 'Fashion',
    thumbnail: 'https://images.unsplash.com/photo-1539533057440-7814a60d4c86?w=400&h=600&fit=crop',
    likes: 7654,
    comments: 523,
  },
];

export default function ReelsModal({ onClose }: ReelsModalProps) {
  const [currentReel, setCurrentReel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const reel = reels[currentReel];

  const nextReel = () => {
    setCurrentReel((prev) => (prev + 1) % reels.length);
  };

  const prevReel = () => {
    setCurrentReel((prev) => (prev - 1 + reels.length) % reels.length);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm h-screen max-h-96 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-border bg-background">
          <h2 className="text-lg font-bold">Reels</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Video Container */}
        <div className="flex-1 relative bg-black overflow-hidden">
          {/* Video Placeholder */}
          <div className="w-full h-full relative">
            <img
              src={reel.thumbnail}
              alt={reel.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white" />
                )}
              </Button>
            </div>

            {/* Mute Button */}
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMuted(!isMuted)}
              className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 text-white"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </Button>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <div className="flex items-start gap-2">
                <div className="flex-1">
                  <p className="font-semibold text-sm">{reel.title}</p>
                  <p className="text-xs text-white/80">{reel.creator}</p>
                  <span className="inline-block mt-1 text-xs bg-white/20 px-2 py-1 rounded">
                    {reel.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Side Actions */}
            <div className="absolute right-3 bottom-20 flex flex-col gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <ThumbsUp className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-3 border-t border-border flex items-center justify-between bg-background">
          <Button variant="outline" size="sm" onClick={prevReel}>
            Previous
          </Button>
          <span className="text-xs text-muted-foreground">
            {currentReel + 1} / {reels.length}
          </span>
          <Button variant="outline" size="sm" onClick={nextReel}>
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
}
