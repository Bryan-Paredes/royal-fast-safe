import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    const robotsTxt = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /_astro/

# Allow important files
Allow: /sitemap.xml
Allow: /robots.txt
Allow: /manifest.json

# Crawl delay for better server performance
Crawl-delay: 1

# Host and sitemap
Host: https://royalfastandsafe.com
Sitemap: https://royalfastandsafe.com/sitemap.xml

# Allow important pages
Allow: /en/
Allow: /es/
Allow: /contact
Allow: /quote
Allow: /privacy

# Specific rules for different bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /`;

    return new Response(robotsTxt, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain'
        }
    });
}; 