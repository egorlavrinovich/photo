import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';

interface PricingTier {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
    priceDescription: string;
}

const pricingTiers: PricingTier[] = [
    {
        title: 'Стандарт',
        price: 'от 250 BYN',
        features: [
            'Аренда фотобудки от 1 часа',
            'Неограниченное количество фотографий',
            'Печать фотографий 10x15',
            'Цифровая копия всех фото',
            'Базовый набор реквизита',
            'Постоянная связь с фотографом',
        ],
        isPopular: true,
        priceDescription: 'Последующие часы аренды фотобудки 125 BYN/час'
    },
    {
        title: 'Премиум',
        price: 'от 320 BYN',
        features: [
            'Аренда фотобудки от 2 часов',
            'Неограниченное количество фотографий',
            'Печать фотографий 10x15',
            'Цифровая копия всех фото',
            'Премиум набор реквизита',
            'Постоянная связь с фотографом',
            'Брендирование фотографий',
            'Оклейка фотобудки пленкой',
        ],
        priceDescription: 'Последующие часы аренды фотобудки 160 BYN/час'
    }
];

interface PricingSectionProps {
    onOrderClick: () => void;

}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOrderClick }) => {
    return (
        <section id="pricing" className="pricing-section">
            <SectionTitle title="Тарифы" />
            <div className="pricing-grid">
                {pricingTiers.map((tier, index) => (
                    <div key={index} className={`pricing-card ${tier.isPopular ? 'popular' : ''}`}>
                        <h3>{tier.title}</h3>
                        <div className="price">{tier.price}</div>
                        <div className="price-description">
                            {tier.priceDescription}
                        </div>
                        <ul className="features-list">
                            {tier.features.map((feature, featureIndex) => (
                                <li key={featureIndex}>{feature}</li>
                            ))}
                        </ul>
                        <Button onClick={onOrderClick} type="primary" icon={true}>
                            Заказать
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
}; 