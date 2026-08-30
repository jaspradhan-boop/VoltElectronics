import React from 'react';
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Gamepad2, 
  Watch, 
  Camera, 
  Tv, 
  Cpu, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { CategoryId } from '../types';

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: CategoryId) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-6 h-6" />,
  Laptop: <Laptop className="w-6 h-6" />,
  Headphones: <Headphones className="w-6 h-6" />,
  Gamepad2: <Gamepad2 className="w-6 h-6" />,
  Watch: <Watch className="w-6 h-6" />,
  Camera: <Camera className="w-6 h-6" />,
  Tv: <Tv className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
};

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories-section" className="py-16 sm:py-24 bg-[#F8F9FC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-5">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-orange-600 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>Browse By Department</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-[#0F1219] tracking-tight font-sans">
              Featured Tech Categories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl font-normal">
              Explore authentic high-grade consumer electronics with official UAE manufacturer guarantees and same-day delivery.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-slate-200/90 text-sm font-bold text-orange-600 hover:text-orange-700 hover:border-orange-300 hover:shadow-md transition-all group self-start md:self-auto cursor-pointer"
          >
            <span>View All Departments</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              id={`category-card-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className="group cursor-pointer relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-orange-400/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(255,90,31,0.10)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle background image wash */}
              <div className="absolute top-0 right-0 w-36 h-36 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none overflow-hidden rounded-bl-full">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div>
                {/* Icon box */}
                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 flex items-center justify-center mb-5 border border-orange-100 shadow-xs group-hover:scale-105">
                  {iconMap[cat.iconName] || <Cpu className="w-6 h-6" />}
                </div>

                {/* Name and count */}
                <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-orange-600 transition-colors tracking-tight">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 font-medium">
                  {cat.description}
                </p>
              </div>

              {/* Footer highlight */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700 group-hover:text-orange-600 transition-colors">
                  {cat.itemCount}+ Products
                </span>
                <span className="text-orange-600 group-hover:translate-x-1.5 transition-transform flex items-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
