'use client';

import { Layout } from 'antd';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { OrderForm } from './components/OrderForm/OrderForm';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { GallerySection } from './components/sections/GallerySection';
import { PricingSection } from './components/sections/PricingSection';
import { FAQSection } from './components/sections/FAQSection';
import { useState } from 'react';

const { Content } = Layout;

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOrderClick = () => {
    setIsOrderModalOpen(true);
  };

  return (
    <Layout className="h-screen flex flex-col">
      <Header />
      <Content className="flex-grow">
        <HeroSection onOrderClick={handleOrderClick} />
        <FeaturesSection />
        <GallerySection />
        <PricingSection onOrderClick={handleOrderClick} />
        <FAQSection />
      </Content>
      <Footer />
      <OrderForm open={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </Layout>
  );
}
