import { DEV_URL, PROD_URL } from '../utils/constants';
import fs from 'fs';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: DEV_URL,
    production: PROD_URL,
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync('src/pages')
    .filter(staticPage => {
      return ![
        '_app.tsx',
        '_document.tsx',
        '_error.tsx',
        'api',
        'sitemap.xml.tsx',
      ].includes(staticPage);
    })
    .map(staticPagePath => {
      return `${baseUrl}/${staticPagePath.split('.tsx')[0]}`;
    });

  console.log(staticPages);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(url => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
export default Sitemap;
