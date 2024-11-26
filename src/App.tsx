import React from 'react';
import Navigation from './components/Header/Navigation';
import Carousel from './components/Carousel/Carousel';
import ProductCategoriesSection from './components/ProductCategories/ProductCategoriesSection';
import CircularEconomySection from './components/CircularEconomy/CircularEconomySection';
import RecyclingProcess from './components/RecyclingProcess/RecyclingProcess';
import ShoppingExperience from './components/ShoppingExperience/ShoppingExperience';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Carousel />
      <ProductCategoriesSection />
      <CircularEconomySection />
      <RecyclingProcess />
      <ShoppingExperience />
      <Footer />
    </div>
  );
}