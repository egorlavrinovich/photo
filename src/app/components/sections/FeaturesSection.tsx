import React from 'react';
import { SectionTitle } from '../common/SectionTitle';

interface Feature {
    icon: string;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: '📸',
        title: 'Качественная печать',
        description: 'Мгновенная печать фотографий высокого качества'
    },
    {
        icon: '🎨',
        title: 'Стильные реквизиты',
        description: 'Большой выбор аксессуаров для создания ярких фото'
    },
    {
        icon: '⚡',
        title: 'Быстрая настройка',
        description: 'Профессиональная установка и настройка за 30 минут'
    },
    {
        icon: '💾',
        title: 'Цифровая копия',
        description: 'Все фотографии доступны в электронном виде'
    }
];

export const FeaturesSection: React.FC = () => {
    return (
        <section id="features" className="features-section">
            <SectionTitle title="Почему выбирают нас" />
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}; 