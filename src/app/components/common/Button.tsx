import React from 'react';
import { Button as AntButton } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './Button.css';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
    size?: 'large' | 'middle' | 'small';
    icon?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    type = 'primary',
    size = 'middle',
    icon = false,
    className = '',
}) => {
    return (
        <AntButton
            type={type}
            size={size}
            onClick={onClick}
            className={`custom-button ${type === 'primary' ? 'custom-button-primary' : ''} ${className}`}
            icon={icon ? <ShoppingCartOutlined className="button-icon" /> : undefined}
        >
            {children}
        </AntButton>
    );
}; 