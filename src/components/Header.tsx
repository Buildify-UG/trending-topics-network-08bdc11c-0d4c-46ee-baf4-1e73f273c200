import { MessageCircle, Bell, Play, Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onIconClick: (modal: string) => void;
}

export default function Header({ onIconClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            TrendHub
          </h1>
        </div>

        {/* Right Navigation Icons */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onIconClick('chat')}
            className="hover:bg-secondary rounded-full"
            title="Messages"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onIconClick('notifications')}
            className="hover:bg-secondary rounded-full relative"
            title="Notifications"
          >
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full animate-pulse" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onIconClick('reels')}
            className="hover:bg-secondary rounded-full"
            title="Reels"
          >
            <Play className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onIconClick('news')}
            className="hover:bg-secondary rounded-full"
            title="News & World"
          >
            <Globe className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
