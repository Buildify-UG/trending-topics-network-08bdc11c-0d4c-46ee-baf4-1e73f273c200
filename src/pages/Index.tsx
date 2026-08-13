import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ContentFeed from '@/components/ContentFeed';
import ChatModal from '@/components/modals/ChatModal';
import NotificationsModal from '@/components/modals/NotificationsModal';
import ReelsModal from '@/components/modals/ReelsModal';
import NewsModal from '@/components/modals/NewsModal';

export default function Index() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onIconClick={setActiveModal} />
      
      <div className="flex gap-6 max-w-7xl mx-auto px-4 py-6">
        {/* Sidebar */}
        <Sidebar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        
        {/* Main Content Feed */}
        <main className="flex-1 min-h-[calc(100vh-120px)]">
          <ContentFeed category={selectedCategory} />
        </main>
      </div>

      {/* Modals */}
      {activeModal === 'chat' && <ChatModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'notifications' && <NotificationsModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'reels' && <ReelsModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'news' && <NewsModal onClose={() => setActiveModal(null)} />}
    </div>
  );
}
