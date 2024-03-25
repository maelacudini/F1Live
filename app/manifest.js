export default function manifest() {
    return {
        name: 'FrontEnd Dev | Maela Cudini',
        short_name: 'Maela Cudini',
        description: "I am Maela, a FrontEnd Developer based in Italy. Looking for someone to bring your concept to code? Let's talk!",
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}