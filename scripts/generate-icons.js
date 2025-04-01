const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
    { size: 16, name: 'favicon-16.png' },
    { size: 32, name: 'favicon-32.png' },
    { size: 32, name: 'icon.png' },
    { size: 180, name: 'apple-icon.png' },
    { size: 192, name: 'icon-192.png' },
    { size: 512, name: 'icon-512.png' },
];

const publicDir = path.join(__dirname, '../public');

async function generateIcons() {
    // Создаем все PNG иконки
    for (const { size, name } of sizes) {
        await sharp(path.join(publicDir, 'icon.svg'))
            .resize(size, size)
            .png()
            .toFile(path.join(publicDir, name));
    }

    // Создаем ICO файл из 16x16 и 32x32 PNG
    const icoBuffer = await sharp(path.join(publicDir, 'favicon-16.png'))
        .toBuffer();
    const icoBuffer32 = await sharp(path.join(publicDir, 'favicon-32.png'))
        .toBuffer();

    // Объединяем буферы для создания ICO
    const combinedBuffer = Buffer.concat([icoBuffer, icoBuffer32]);
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), combinedBuffer);

    // Создаем OG изображение
    await sharp(path.join(publicDir, 'icon.svg'))
        .resize(1200, 630)
        .png()
        .toFile(path.join(publicDir, 'og-image.png'));

    // Удаляем временные файлы
    fs.unlinkSync(path.join(publicDir, 'favicon-16.png'));
    fs.unlinkSync(path.join(publicDir, 'favicon-32.png'));
}

generateIcons().catch(console.error); 