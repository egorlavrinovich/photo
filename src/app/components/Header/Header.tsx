
import { Layout } from 'antd';
import { Contacts } from '../Contacts/Contacts';
import { Navigation } from '../Navigation/Navigation';
import './Header.css';

const { Header: AntHeader } = Layout;

export const Header = () => {

    return (
        <AntHeader className='header'>
            <div className='header-content'>
                <Contacts />
                <img className='logo' src='https://instabudka.ru/wp-content/themes/instabudka/img/logo.svg' />
                <Navigation />
            </div>
        </AntHeader>
    );
}; 