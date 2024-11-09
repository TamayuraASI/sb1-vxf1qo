import React from 'react';
import { Activity, ChevronRight, Users, HelpCircle } from 'lucide-react';
import Header from './components/Header';
import ActivitySection from './components/ActivitySection';
import TopicsSection from './components/TopicsSection';
import SupporterSection from './components/SupporterSection';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 flex-grow">
        <ActivitySection />
        <TopicsSection />
        <SupporterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;