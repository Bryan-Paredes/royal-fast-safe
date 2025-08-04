import type { APIRoute } from 'astro';
import { locales } from '@/i18n/config';

export const GET: APIRoute = async ({ url }) => {
    const baseUrl = 'https://royalfastandsafe.com';

    // Páginas principales con sus configuraciones específicas
    const pages = [
        { path: '', changefreq: 'weekly', priority: '1.0' },
        { path: '/contact', changefreq: 'monthly', priority: '0.8' },
        { path: '/quote', changefreq: 'monthly', priority: '0.8' },
        { path: '/privacy', changefreq: 'yearly', priority: '0.5' }
    ];

    // Generar URLs para todos los idiomas
    const urls = [];

    for (const locale of locales) {
        for (const page of pages) {
            const path = locale === 'en' ? page.path : `/${locale}${page.path}`;
            urls.push({
                loc: `${baseUrl}${path}`,
                lastmod: new Date().toISOString(),
                changefreq: page.changefreq,
                priority: page.priority
            });
        }
    }

    // Generar XML del sitemap con formato optimizado
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Log para debugging (opcional)
    console.log(`Generated sitemap with ${urls.length} URLs`);

    return new Response(sitemap, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}; 