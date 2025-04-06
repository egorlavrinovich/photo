import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import Image from 'next/image';
const galleryItems = [
    {
        id: 1,
        title: 'Свадьба',
        description: 'Создайте незабываемые воспоминания на вашей свадьбе',
        image: '/wedding.webp',
        width: 400,
        height: 300
    },
    {
        id: 2,
        title: 'Корпоратив',
        description: 'Развлекательный элемент для вашего корпоратива',
        image: '/Corp.jpg',
        width: 400,
        height: 300
    },
    {
        id: 3,
        title: 'День рождения',
        description: 'Уникальное развлечение для гостей',
        image: '/Corp2.jpg',
        width: 400,
        height: 300
    },
    {
        id: 4,
        title: 'Выпускной',
        description: 'Запечатлите важный момент в жизни',
        image: '/school.jpg',
        width: 400,
        height: 300
    },
    {
        id: 5,
        title: 'Новый год',
        description: 'Создайте праздничное настроение',
        image: '/NY.jpg',
        width: 350,
        height: 320
    },
    {
        id: 6,
        title: 'Детский праздник',
        description: 'Весёлое развлечение для детей',
        image: '/childs.jpg',
        width: 380,
        height: 290
    }
];

export const GallerySection: React.FC = () => {
    return (
        <section id="gallery" className="gallery-section">
            <SectionTitle title="Галерея" />
            <div className="gallery-grid">
                {galleryItems.map((item) => (
                    <div key={item.id} className="gallery-item">
                        <span className="placeholder-text">{item.title}</span>
                        <Image src={item.image} alt={item.title} width={item.width} height={item.height} />
                    </div>
                ))}
            </div>
        </section>
    );
}; 