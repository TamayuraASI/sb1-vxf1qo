import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ActivitySection() {
  return (
    <section className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-center text-custom-blue">
          当会の活動内容について
        </h2>
        <div className="aspect-video rounded-lg overflow-hidden mb-6">
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
            alt="Happy Japanese children playing and learning together"
            className="w-full h-full object-cover"
          />
        </div>
        <button className="flex items-center justify-center space-x-2 w-full bg-custom-pink text-gray-800 py-3 px-6 rounded-lg hover:bg-custom-pink/90 transition-colors">
          <span>当会の活動内容について</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}