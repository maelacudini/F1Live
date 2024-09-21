import path from 'path';
import { fileURLToPath } from 'url';

const withPWA = await import('next-pwa').then(mod => mod.default({
    dest: 'public'
}));

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, '_styles')],
    },
}

export default withPWA(nextConfig)