'use client';

export default function Error({ error, reset }) {
    return (
        <div>
            <h1>500 - Ошибка сервера</h1>
            <button onClick={reset}>Попробовать снова</button>
        </div>
    );
}