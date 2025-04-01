'use client';

import { Layout } from 'antd';
import { useState } from 'react';
import { Contacts } from '../Contacts/Contacts';
import { Navigation } from '../Navigation/Navigation';
import './Header.css';

const { Header: AntHeader } = Layout;

export const Header = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <AntHeader className='header'>
            <div className='header-content'>
                <Contacts />

                <img className='logo' src='https://instabudka.ru/wp-content/themes/instabudka/img/logo.svg' />

                <Navigation open={open} onClose={onClose} />

            </div>
        </AntHeader>
    );
}; 