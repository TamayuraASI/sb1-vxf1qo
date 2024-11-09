import React from 'react';
import { Building2, Users, GraduationCap, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">一般社団法人こども育成・女性支援協議会</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>〒100-0001 東京都千代田区1-1-1</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>03-1234-5678</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@example.com</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">メニュー</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-custom-pink transition-colors flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  当会概要
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-custom-pink transition-colors flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  事業者様へ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-custom-pink transition-colors flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  ご父兄様へ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-custom-pink transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">法人情報</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-custom-pink transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-custom-pink transition-colors">利用規約</a></li>
              <li><a href="#" className="hover:text-custom-pink transition-colors">特定商取引法に基づく表記</a></li>
              <li><a href="#" className="hover:text-custom-pink transition-colors">反社会的勢力に対する基本方針</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} 一般社団法人こども育成・女性支援協議会. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}