import React from 'react';
import { Button } from '../common/Button';

interface HeroSectionProps {
    onOrderClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOrderClick }) => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Аренда фотобудки</h1>
                <p>Создайте незабываемые воспоминания на вашем мероприятии</p>
                <Button onClick={onOrderClick} size="large" icon>
                    Заказать фотобудку
                </Button>
            </div>
        </section>
    );
}; 