import React from 'react';

const services = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?auto=format&fit=crop&w=600&q=80",
    title: "子ども食堂",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80",
    title: "ふるさと納税",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?auto=format&fit=crop&w=600&q=80",
    title: "子どもの居場所づくり",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80",
    title: "通信制高等学校との連携",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    title: "uniSQUARE ぴこっと",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
    title: "フリースクール",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80",
    title: "放課後デイサービス",
  },
];

export default function TopicsSection() {
  return (
    <section className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-center text-custom-blue">
          ご利用できるサービス
        </h2>
        <p className="text-gray-600 text-center mb-6">
          サービス内容をご紹介いたします
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              <div className="aspect-video rounded-lg overflow-hidden mb-2 shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-custom-pink transition-colors text-center">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}