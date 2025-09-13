import React from 'react';
import { getMenuItemsByCategory } from '../data';
import MenuCard from './MenuCard';

interface MenuSectionProps {
  categoryId: string;
  categoryName: string;
  categoryIcon: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ categoryId, categoryName }) => {
  const items = getMenuItemsByCategory(categoryId);

  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-light text-gray-900 dark:text-slate-100 mb-12">{categoryName}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
