import { X, Heart, MessageCircle, Share2, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

interface NotificationsModalProps {
  onClose: () => void;
}

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'share' | 'follow';
  user: string;
  avatar: string;
  action: string;
  content?: string;
  timestamp: string;
}

const initialNotifications: Notification[] = [
  {
    id: '1',
    type: 'like',
    user: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
    action: 'liked your post',
    content: 'Summer Fashion Trends 2024',
    timestamp: '2 mins ago',
  },
  {
    id: '2',
    type: 'comment',
    user: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
    action: 'commented on your post',
    content: 'Great workout tips!',
    timestamp: '15 mins ago',
  },
  {
    id: '3',
    type: 'share',
    user: 'Emma Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
    action: 'shared your post',
    content: 'Michelin Star Recipes You Can Make',
    timestamp: '1 hour ago',
  },
  {
    id: '4',
    type: 'follow',
    user: 'Alex Williams',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop',
    action: 'started following you',
    timestamp: '3 hours ago',
  },
  {
    id: '5',
    type: 'like',
    user: 'Lisa Park',
    avatar: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=40&h=40&fit=crop',
    action: 'liked your post',
    content: 'Best Calisthenics Workout Routine',
    timestamp: '5 hours ago',
  },
];

export default function NotificationsModal({ onClose }: NotificationsModalProps) {
  const [notifications, setNotifications] = useState(initialNotifications);

  const getIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <Heart className="w-4 h-4 text-red-500" />;
      case 'comment':
        return <MessageCircle className="w-4 h-4 text-blue-500" />;
      case 'share':
        return <Share2 className="w-4 h-4 text-green-500" />;
      case 'follow':
        return <UserPlus className="w-4 h-4 text-purple-500" />;
      default:
        return null;
    }
  };

  const clearNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md h-96 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-bold">Notifications</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              No notifications yet
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 border-b border-border hover:bg-secondary/50 transition-colors flex gap-3"
              >
                <img
                  src={notification.avatar}
                  alt={notification.user}
                  className="w-10 h-10 rounded-full flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2">
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-semibold">{notification.user}</span>
                        {' '}
                        <span className="text-muted-foreground">{notification.action}</span>
                      </p>
                      {notification.content && (
                        <p className="text-xs text-muted-foreground mt-1 truncate">
                          "{notification.content}"
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">{notification.timestamp}</p>
                    </div>
                    {getIcon(notification.type)}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => clearNotification(notification.id)}
                  className="h-auto p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}
