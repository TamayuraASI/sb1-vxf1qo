import React, { useState } from 'react';
import { Building2, Users, GraduationCap, MessageCircle, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-custom-pink text-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="hidden md:flex space-x-8">
            <NavItem icon={<Building2 />} text="当会概要" />
            <NavItem icon={<Users />} text="事業者様へ" />
            <NavItem icon={<GraduationCap />} text="ご父兄様へ" />
            <NavItem icon={<MessageCircle />} text="お問い合わせ" />
          </div>
          
          <button 
            className="md:hidden p-2 rounded-md hover:bg-custom-blue/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavItem icon={<Building2 />} text="当会概要" />
            <MobileNavItem icon={<Users />} text="事業者様へ" />
            <MobileNavItem icon={<GraduationCap />} text="ご父兄様へ" />
            <MobileNavItem icon={<MessageCircle />} text="お問い合わせ" />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a href="#" className="flex items-center space-x-2 hover:bg-custom-blue/20 px-3 h-full transition-colors duration-200">
      {icon}
      <span>{text}</span>
    </a>
  );
}

function MobileNavItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a href="#" className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium hover:bg-custom-blue/20">
      {icon}
      <span>{text}</span>
    </a>
  );
}