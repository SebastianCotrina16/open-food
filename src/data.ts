export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image?: string
  isPopular?: boolean
  isVegetarian?: boolean
  isGlutenFree?: boolean
}

export interface RestaurantInfo {
  name: string
  tagline: string
  description: string
  address: string
  phone: string
  email: string
  hours: {
    [key: string]: string
  }
}

export const restaurantInfo: RestaurantInfo = {
  name: 'Open Food',
  tagline: 'Sabores auténticos, experiencias únicas',
  description:
    'En Open Food creemos que la buena comida une a las personas. Nuestro chef combina técnicas tradicionales con ingredientes frescos locales para crear platos que despiertan todos tus sentidos.',
  address: 'Calle Principal 123, Centro Histórico',
  phone: '+52 55 1234 5678',
  email: 'hola@openfood.mx',
  hours: {
    'Lunes - Jueves': '12:00 - 22:00',
    'Viernes - Sábado': '12:00 - 23:00',
    Domingo: '12:00 - 21:00',
  },
}

export const categories = [
  { id: 'appetizers', name: 'Entradas', icon: '🥗' },
  { id: 'mains', name: 'Platos Principales', icon: '🍽️' },
  { id: 'pasta', name: 'Pastas', icon: '🍝' },
  { id: 'desserts', name: 'Postres', icon: '🍰' },
  { id: 'beverages', name: 'Bebidas', icon: '🥤' },
]

export const menuItems: MenuItem[] = [
  // Entradas
  {
    id: '1',
    name: 'Ensalada César con Pollo',
    description:
      'Lechuga romana fresca, crutones artesanales, parmesano y nuestro aderezo César especial',
    price: 185,
    category: 'appetizers',
    isPopular: true,
    image:
      'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '2',
    name: 'Tabla de Quesos Artesanales',
    description:
      'Selección de quesos locales acompañados de mermelada de higo, nueces y pan tostado',
    price: 220,
    category: 'appetizers',
    isVegetarian: true,
    image:
      'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '3',
    name: 'Ceviche de Pescado Blanco',
    description:
      'Pescado fresco marinado en limón con cebolla morada, cilantro y chiles jalapeños',
    price: 195,
    category: 'appetizers',
    isGlutenFree: true,
    image:
      'https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // Platos Principales
  {
    id: '4',
    name: 'Filete de Res a la Parrilla',
    description:
      'Corte premium acompañado de puré de papa trufado y vegetales de temporada',
    price: 420,
    category: 'mains',
    isPopular: true,
    image:
      'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '5',
    name: 'Salmón en Costra de Hierbas',
    description:
      'Filete de salmón fresco con costra de hierbas mediterráneas y risotto de limón',
    price: 380,
    category: 'mains',
    image:
      'https://images.pexels.com/photos/3679973/pexels-photo-3679973.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '6',
    name: 'Pechuga de Pollo Rellena',
    description:
      'Pechuga jugosa rellena de espinacas y queso de cabra, con salsa de vino blanco',
    price: 285,
    category: 'mains',
    image:
      'https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '7',
    name: 'Curry Vegetariano',
    description:
      'Mezcla de vegetales frescos en salsa de curry cremosa con arroz basmati',
    price: 245,
    category: 'mains',
    isVegetarian: true,
    isGlutenFree: true,
    image:
      'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // Pastas
  {
    id: '8',
    name: 'Spaghetti Carbonara',
    description:
      'Pasta italiana tradicional con pancetta, huevo, parmesano y pimienta negra',
    price: 265,
    category: 'pasta',
    isPopular: true,
    image:
      'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '9',
    name: 'Penne Arrabbiata',
    description:
      'Pasta penne en salsa de tomate picante con ajo, chile y albahaca fresca',
    price: 235,
    category: 'pasta',
    isVegetarian: true,
    image:
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '10',
    name: 'Ravioles de Ricotta y Espinaca',
    description:
      'Pasta fresca rellena servida con salsa de mantequilla y salvia',
    price: 285,
    category: 'pasta',
    isVegetarian: true,
    image:
      'https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // Postres
  {
    id: '11',
    name: 'Tiramisú Casero',
    description:
      'Clásico postre italiano con café, mascarpone y cacao en polvo',
    price: 125,
    category: 'desserts',
    isPopular: true,
    isVegetarian: true,
    image:
      'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '12',
    name: 'Crème Brûlée de Vainilla',
    description:
      'Crema francesa tradicional con azúcar caramelizada y vainilla de Madagascar',
    price: 115,
    category: 'desserts',
    isVegetarian: true,
    image:
      'https://images.pexels.com/photos/3992133/pexels-photo-3992133.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '13',
    name: 'Tarta de Chocolate y Frambuesa',
    description: 'Base de chocolate negro con mousse y frambuesas frescas',
    price: 135,
    category: 'desserts',
    isVegetarian: true,
    image:
      'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // Bebidas
  {
    id: '14',
    name: 'Limonada de Casa',
    description: 'Limonada fresca con hierbas aromáticas y agua mineral',
    price: 65,
    category: 'beverages',
    isVegetarian: true,
    isGlutenFree: true,
    image:
      'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '15',
    name: 'Café de Especialidad',
    description: 'Granos seleccionados de origen único, tostado artesanal',
    price: 45,
    category: 'beverages',
    isVegetarian: true,
    isGlutenFree: true,
    image:
      'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '16',
    name: 'Smoothie Verde',
    description: 'Mezcla de espinaca, manzana verde, pepino, jengibre y menta',
    price: 85,
    category: 'beverages',
    isVegetarian: true,
    isGlutenFree: true,
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
]

export const getMenuItemsByCategory = (categoryId: string): MenuItem[] => {
  return menuItems.filter((item) => item.category === categoryId)
}
