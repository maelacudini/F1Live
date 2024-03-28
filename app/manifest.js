export default function manifest() {
    return {
        name: 'Flive',
        short_name: 'Flive',
        description:
            "Flive is the ultimate companion for motor sport enthusiasts. Stay ahead of the curve with the latest races, driver standings, championship updates, and more.",
        start_url: '/',
        display: 'standalone',
        background_color: '#000',
        theme_color: '#000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}