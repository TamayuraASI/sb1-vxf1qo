import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function SupporterSection() {
  return (
    <section className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-center text-custom-blue">
          入会のご案内
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-8">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=300&q=80"
            alt="Support and guidance"
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
          <p className="text-lg text-gray-700 max-w-xl text-center md:text-left">
            当会のサポートについてご紹介いたします
          </p>
        </div>
        <button className="flex items-center justify-center space-x-2 w-full bg-custom-pink text-gray-800 py-3 px-6 rounded-lg hover:bg-custom-pink/90 transition-colors">
          <span>詳しくはこちら！</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}