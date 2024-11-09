import React from 'react';

export default function Header() {
  return (
    <header className="relative text-white h-[500px]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=2000&q=80"
          alt="元気に遊ぶ日本の子供達"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-custom-blue/40"></div>
      </div>

      <div className="relative z-10">
        <div className="absolute top-0 left-0 p-4">
          <p className="text-sm font-medium text-gray-800 bg-white/80 px-3 py-1 rounded-full">
            一般社団法人こども育成・女性支援協議会
          </p>
        </div>
      </div>
    </header>
  );
}