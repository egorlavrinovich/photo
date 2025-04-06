
import { Modal, Form, Input, Checkbox, message } from 'antd';
import { useState } from 'react';
import './OrderForm.css';

interface OrderFormProps {
    open: boolean;
    onClose: () => void;
}

interface OrderFormData {
    name: string;
    email: string;
    phone: string;
    additionalInfo: string;
    agreement: boolean;
}

export const OrderForm = ({ open, onClose }: OrderFormProps) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const handleSubmit = async (values: OrderFormData) => {
        try {
            setLoading(true);

            const text = `
            📌 Новый заказ:
            👤 Имя: ${values.name}
            📧 Email: ${values.email}
            📞 Телефон: ${values.phone}
            ℹ️ Доп. информация: ${values.additionalInfo || 'не указано'}
          `;


            try {
                const response = await fetch(
                    `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
                            text,
                            parse_mode: 'Markdown',
                        }),
                    }
                );

                if (!response.ok) {
                    throw new Error(`Telegram API error: ${response.status}`);
                }

                messageApi.success({
                    content: 'Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.',
                    duration: 3,
                });
                form.resetFields();
                onClose();
            } catch (error) {
                messageApi.error({
                    content: 'Произошла ошибка при отправке заказа. Пожалуйста, попробуйте позже.',
                    duration: 3,
                });
            } finally {
                setLoading(false);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {contextHolder}
            <Modal
                title="Оформить заказ очень просто"
                open={open}
                onCancel={onClose}
                footer={null}
                width={600}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    requiredMark={false}
                >
                    <Form.Item
                        name="name"
                        label="Ваше имя"
                        rules={[{ required: true, message: 'Пожалуйста, введите ваше имя' }]}
                    >
                        <Input placeholder="Введите ваше имя" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"
                    >
                        <Input placeholder="Введите ваш email" />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Номер телефона"
                        rules={[
                            { required: true, message: 'Пожалуйста, введите номер телефона' },
                            { pattern: /^\+375\d{9}$/, message: 'Пожалуйста, введите корректный номер телефона в формате +375XXXXXXXXX' }
                        ]}
                    >
                        <Input
                            placeholder="+375XXXXXXXXX"
                            type="tel"
                        />
                    </Form.Item>

                    <Form.Item
                        name="additionalInfo"
                        label="Дополнительная информация"
                    >
                        <Input.TextArea
                            rows={3}
                            placeholder="Введите дополнительную информацию"
                        />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Необходимо согласиться с обработкой персональных данных')) }]}
                    >
                        <Checkbox>
                            Даю согласие на обработку персональных данных
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <button
                            type="submit"
                            className="submit-button"
                            disabled={loading}
                        >
                            {loading ? 'Отправка...' : 'Отправить заказ'}
                        </button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}; 