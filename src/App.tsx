import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import { categories } from './data'

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('appetizers')

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    // Smooth scroll to menu section
    const element = document.getElementById('menu-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='min-h-screen bg-white'>
      <Header
        onCategorySelect={handleCategorySelect}
        categories={categories}
        selectedCategory={selectedCategory}
      />
      <Hero />

      <main id='menu-section' className='bg-white'>
        {categories.map((category) => (
          <div
            key={category.id}
            className={selectedCategory === category.id ? 'block' : 'hidden'}
          >
            <MenuSection
              categoryId={category.id}
              categoryName={category.name}
              categoryIcon={category.icon}
            />
          </div>
        ))}
      </main>

      <Footer />
    </div>
  )
}

export default App
