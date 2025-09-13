import React from 'react';
import { restaurantInfo } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-light text-gray-900 dark:text-slate-100 mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-600 dark:text-slate-400 font-light">
              <p>{restaurantInfo.address}</p>
              <p>{restaurantInfo.phone}</p>
              <p>{restaurantInfo.email}</p>
            </div>
          </div>

          <div>
            <h3 className="font-light text-gray-900 dark:text-slate-100 mb-4">Horarios</h3>
            <div className="space-y-2 text-gray-600 dark:text-slate-400 font-light">
              {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between">
                  <span>{day}</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-light text-gray-900 dark:text-slate-100 mb-4">Acerca de</h3>
            <p className="text-gray-600 dark:text-slate-400 font-light leading-relaxed">
              {restaurantInfo.description}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-slate-800 pt-8 mt-12 text-center">
          <p className="text-gray-500 dark:text-slate-500 text-sm font-light">
            © 2025 {restaurantInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
