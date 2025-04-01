import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';

interface PricingTier {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
}

const pricingTiers: PricingTier[] = [
    {
        title: 'Базовый',
        price: 'от 150 BYN',
        features: [
            'Аренда фотобудки на 2 часа',
            'Неограниченное количество фотографий',
            'Печать фотографий 10x15',
            'Цифровая копия всех фото',
            'Базовый набор реквизита'
        ]
    },
    {
        title: 'Стандарт',
        price: 'от 250 BYN',
        features: [
            'Аренда фотобудки на 4 часа',
            'Неограниченное количество фотографий',
            'Печать фотографий 10x15',
            'Цифровая копия всех фото',
            'Расширенный набор реквизита',
            'Стилизованная рамка для фото'
        ],
        isPopular: true
    },
    {
        title: 'Премиум',
        price: 'от 350 BYN',
        features: [
            'Аренда фотобудки на 6 часов',
            'Неограниченное количество фотографий',
            'Печать фотографий 10x15',
            'Цифровая копия всех фото',
            'Премиум набор реквизита',
            'Стилизованная рамка для фото',
            'Брендирование фотографий'
        ]
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
                        {tier.isPopular && <div className="popular-badge">Популярный</div>}
                        <h3>{tier.title}</h3>
                        <div className="price">{tier.price}</div>
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