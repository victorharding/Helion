const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

export default async (req, res) => {
  // An array with your pages.
  const links = [
    { url: 'https://www.helion-studio.com/', changefreq: 'weekly', priority: 1 },
    {
      url: 'https://www.helion-studio.com/about',
      changefreq: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.helion-studio.com/contact',
      changefreq: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.helion-studio.com/portfolio',
      changefreq: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.helion-studio.com/services',
      changefreq: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.helion-studio.com/services/Dedicated-Development-Team',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion-studio.com/services/Custom-Software-Development',
      changefreq: 'weekly',
      priority: 1,
    },

     {
       url: 'https://www.helion-studio.com/technology',
      changefreq: 'weekly',
      priority: 1,
    },

     {
      url: 'https://www.helion-studio.com/technology/front-end',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion-studio.com/technology/node',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion-studio.com/technology/php',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion-studio.com/technology/net',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion-studio.com/technology/mobile',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion-studio.com/technology/java',
      changefreq: 'weekly',
      priority: 1,
    },
      {
      url: 'https://www.helion-studio.com/industries',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion-studio.com/industries/real-estate',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion-studio.com/industries/travel',
      changefreq: 'weekly',
      priority: 1,
    },
      {
      url: 'https://www.helion-studio.com/industries/eCommerce',
      changefreq: 'weekly',
      priority: 1,
    },

  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
