import { Flame, Shirt, Trophy, UtensilsCrossed, Music, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All Trending', icon: Flame, color: 'text-red-500' },
  { id: 'fashion', label: 'Fashion', icon: Shirt, color: 'text-pink-500' },
  { id: 'sports', label: 'Sports', icon: Trophy, color: 'text-yellow-500' },
  { id: 'food', label: 'Food & Nutrition', icon: UtensilsCrossed, color: 'text-orange-500' },
  { id: 'entertainment', label: 'Entertainment', icon: Music, color: 'text-purple-500' },
  { id: 'fitness', label: 'Fitness', icon: Dumbbell, color: 'text-green-500' },
];

export default function Sidebar({ selectedCategory, onSelectCategory }: SidebarProps) {
  return (
    <aside className="w-48 flex-shrink-0">
      <div className="sticky top-20 bg-card rounded-lg border border-border p-4 space-y-2">
        <h2 className="text-sm font-semibold text-muted-foreground px-2 mb-4">CATEGORIES</h2>
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = selectedCategory === category.id;
          
          return (
            <Button
              key={category.id}
              variant={isActive ? 'default' : 'ghost'}
              className={cn(
                'w-full justify-start gap-3 text-left',
                isActive && 'bg-primary text-primary-foreground'
              )}
              onClick={() => onSelectCategory(category.id)}
            >
              <Icon className={cn('w-5 h-5', !isActive && category.color)} />
              <span>{category.label}</span>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}
