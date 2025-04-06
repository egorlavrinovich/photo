
import { Button, Drawer } from 'antd';
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { OrderForm } from '../OrderForm/OrderForm';
import './Navigation.css';

export const Navigation = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    const handleOrderClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOrderModalOpen(true);
        setIsDrawerOpen(false);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80; // Высота хедера + отступ
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsDrawerOpen(false);
    };

    return (
        <>
            <nav className="desktop-nav">
                <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="nav-link">
                    Преимущества
                </a>
                <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }} className="nav-link">
                    Галерея
                </a>
                <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="nav-link">
                    Цены
                </a>
                <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="nav-link">
                    FAQ
                </a>
                <a href="#" onClick={handleOrderClick} className="order-btn">
                    <ShoppingCartOutlined className="order-icon" />
                    Заказать
                </a>
            </nav>
            <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setIsDrawerOpen(true)}
                className="mobile-menu-btn"
            />
            <Drawer
                title="Меню"
                placement="right"
                onClose={() => setIsDrawerOpen(false)}
                open={isDrawerOpen}
                width={300}
            >
                <div className="mobile-nav">
                    <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="mobile-nav-link">
                        Преимущества
                    </a>
                    <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }} className="mobile-nav-link">
                        Галерея
                    </a>
                    <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="mobile-nav-link">
                        Цены
                    </a>
                    <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="mobile-nav-link">
                        FAQ
                    </a>
                    <a href="#" onClick={handleOrderClick} className="order-btn-mobile">
                        <ShoppingCartOutlined className="order-icon" />
                        Заказать
                    </a>
                </div>
            </Drawer>
            <OrderForm open={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
        </>
    );
}; 