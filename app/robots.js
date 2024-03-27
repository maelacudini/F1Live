export default function robots() {
    return {
        rules: {
            userAgent: '*',
            // allow: '/',
            disallow: '/',
        },
        sitemap: 'https://flive-eight.vercel.app/sitemap.xml',
    }
}