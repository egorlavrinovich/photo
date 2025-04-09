import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.photobudka-brest.ru',
            lastModified: new Date(),
        },
    ]
}