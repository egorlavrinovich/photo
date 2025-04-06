
import { Layout } from 'antd';
import { PhoneOutlined, InstagramOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import './Footer.css';

const { Footer: AntFooter } = Layout;

export const Footer = () => {
    return (
        <AntFooter className="footer">
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-contact">
                        <div className="contact-item">
                            <PhoneOutlined /> <a href="tel:+375292284213">+375 (29) 228-42-13</a>
                        </div>
                        <div className="contact-item">
                            <InstagramOutlined /> <a href="https://instagram.com/photobudka_brest" target="_blank" rel="noopener noreferrer">@photobudka_brest</a>
                        </div>
                        <div className="contact-item">
                            <EnvironmentOutlined /> г. Брест
                        </div>
                        <div className="contact-item">
                            <ClockCircleOutlined /> Пн-Вс: 9:00 - 21:00
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 PhotoBooth - Аренда фотобудок в Бресте</p>
            </div>
        </AntFooter>
    );
}; 