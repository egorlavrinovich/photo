import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import Image from 'next/image';
const galleryItems = [
    {
        id: 1,
        title: 'Свадьба',
        description: 'Создайте незабываемые воспоминания на вашей свадьбе',
        image: 'https://img01.kupiprodai.ru/052017/1493825902152.jpg',
        width: 400,
        height: 300
    },
    {
        id: 2,
        title: 'Корпоратив',
        description: 'Развлекательный элемент для вашего корпоратива',
        image: 'https://i.imgur.com/4ebiAkn.jpeg',
        width: 400,
        height: 300
    },
    {
        id: 3,
        title: 'День рождения',
        description: 'Уникальное развлечение для гостей',
        image: 'https://avatars.mds.yandex.net/get-altay/5503221/2a0000017efcb2683fa9a99655334c9d216c/XXL_height',
        width: 500,
        height: 300
    },
    {
        id: 4,
        title: 'Выпускной',
        description: 'Запечатлите важный момент в жизни',
        image: 'https://i.imgur.com/pQBedFp.jpeg',
        width: 400,
        height: 300
    },
    {
        id: 5,
        title: 'Новый год',
        description: 'Создайте праздничное настроение',
        image: 'https://i.imgur.com/1NjI7AE.jpeg',
        width: 350,
        height: 320
    },
    {
        id: 6,
        title: 'Детский праздник',
        description: 'Весёлое развлечение для детей',
        image: 'https://i.imgur.com/LbrbKgA.jpeg',
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
                        <Image loading="lazy" src={item.image} alt={item.title} width={item.width} height={item.height} />
                    </div>
                ))}
            </div>
        </section>
    );
}; 