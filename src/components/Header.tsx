import React from 'react';
import { restaurantInfo } from '../data';

interface HeaderProps {
  onCategorySelect: (categoryId: string) => void;
  categories: { id: string; name: string; icon: string }[];
  selectedCategory?: string;
}

const Header: React.FC<HeaderProps> = ({ onCategorySelect, categories, selectedCategory = 'appetizers' }) => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          <h1 className="text-2xl font-light text-gray-900">{restaurantInfo.name}</h1>
          
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`text-sm font-light transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'text-gray-900 border-b border-gray-900 pb-1'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="md:hidden pb-4">
          <div className="flex space-x-6 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`text-sm font-light whitespace-nowrap transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'text-gray-900 border-b border-gray-900 pb-1'
                    : 'text-gray-500'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;