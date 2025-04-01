import React from 'react';

interface SectionTitleProps {
    title: string;
    className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, className = '' }) => {
    return (
        <h2 className={`text-center text-4xl font-bold mb-12 text-gray-800 ${className}`}>
            {title}
        </h2>
    );
}; 