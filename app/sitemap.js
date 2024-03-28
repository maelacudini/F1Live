import { getData } from "./_utils/func"

export default async function sitemap() {
    const latest = await getData('https://ergast.com/api/f1/current/last/results.json')
    const race = latest?.MRData?.RaceTable?.Races[0];

    return [
        {
            url: 'https://flive-eight.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://flive-eight.vercel.app/drivers',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://flive-eight.vercel.app/teams',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://flive-eight.vercel.app/schedule',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `https://flive-eight.vercel.app/latest/${race?.raceName}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ]
}