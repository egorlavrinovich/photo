import React from 'react';
import { SectionTitle } from '../common/SectionTitle';

const galleryItems = [
    {
        id: 1,
        title: 'Свадебная фотобудка',
        description: 'Создайте незабываемые воспоминания на вашей свадьбе',
        image: '/gallery/placeholder1.jpg'
    },
    {
        id: 2,
        title: 'Корпоративное мероприятие',
        description: 'Развлекательный элемент для вашего корпоратива',
        image: '/gallery/placeholder2.jpg'
    },
    {
        id: 3,
        title: 'День рождения',
        description: 'Уникальное развлечение для гостей',
        image: '/gallery/placeholder3.jpg'
    },
    {
        id: 4,
        title: 'Выпускной',
        description: 'Запечатлите важный момент в жизни',
        image: '/gallery/placeholder4.jpg'
    },
    {
        id: 5,
        title: 'Новый год',
        description: 'Создайте праздничное настроение',
        image: '/gallery/placeholder5.jpg'
    },
    {
        id: 6,
        title: 'Детский праздник',
        description: 'Весёлое развлечение для детей',
        image: '/gallery/placeholder6.jpg'
    }
];

export const GallerySection: React.FC = () => {
    return (
        <section id="gallery" className="gallery-section">
            <SectionTitle title="Галерея" />
            <div className="gallery-grid">
                {galleryItems.map((item) => (
                    <div key={item.id} className="gallery-item">
                        <div className="gallery-image-placeholder">
                            <span className="placeholder-text">{item.title}</span>
                        </div>
                        <div className="gallery-overlay">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}; 