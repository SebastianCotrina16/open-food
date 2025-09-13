import React from 'react';
import { MenuItem } from '../data';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square overflow-hidden mb-4 rounded-xl">
        <img
          src={item.image || 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400'}
          alt={item.name}
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-light text-gray-900 dark:text-slate-100">
            {item.name}
          </h3>
          <span className="text-lg font-light text-gray-900 dark:text-slate-100">
            ${item.price}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-400 font-light leading-relaxed">
          {item.description}
        </p>
        
        {(item.isVegetarian || item.isGlutenFree) && (
          <div className="flex space-x-2 text-xs text-gray-500 dark:text-slate-400">
            {item.isVegetarian && <span>Vegetariano</span>}
            {item.isGlutenFree && <span>Sin Gluten</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
