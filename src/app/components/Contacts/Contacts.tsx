
import { message } from 'antd';
import { useState } from 'react';
import { InstagramOutlined } from '@ant-design/icons';
import './Contacts.css';

export const Contacts = () => {
    const [copied, setCopied] = useState<'phone' | null>(null);
    const [messageApi, contextHolder] = message.useMessage();

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied('phone');
            messageApi.success({
                content: 'Номер телефона скопирован в буфер обмена',
                duration: 2,
                style: {
                    marginTop: '20vh',
                    fontSize: '16px',
                    padding: '10px 20px',
                    borderRadius: '8px',
                }
            });
            setTimeout(() => setCopied(null), 2000);
        } catch (err) {
            messageApi.error({
                content: 'Не удалось скопировать',
                duration: 2,
                style: {
                    marginTop: '20vh',
                    fontSize: '16px',
                    padding: '10px 20px',
                    borderRadius: '8px'
                }
            });
        }
    };

    return (
        <>
            {contextHolder}
            <div className='contacts'>
                <a
                    href="tel:+375292284213"
                    className={`phone ${copied === 'phone' ? 'copied' : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        copyToClipboard('+375292284213');
                    }}
                >
                    +375292284213
                </a>
                <a
                    href="https://instagram.com/photobudka_brest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                >
                    <InstagramOutlined /> photobudka_brest
                </a>
            </div>
        </>
    );
}; 