const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

export default async (req, res) => {
  // An array with your pages.
  const links = [
    { url: 'https://www.helion.digital/', changefreq: 'weekly', priority: 1 },
    {
      url: 'https://www.helion.digital/about',
      changefreq: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.helion.digital/contact',
      changefreq: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.helion.digital/portfolio',
      changefreq: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.helion.digital/services',
      changefreq: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.helion.digital/services/Dedicated-Development-Team',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion.digital/services/Custom-Software-Development',
      changefreq: 'weekly',
      priority: 1,
    },

     {
       url: 'https://www.helion.digital/technology',
      changefreq: 'weekly',
      priority: 1,
    },

     {
      url: 'https://www.helion.digital/technology/front-end',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion.digital/technology/node',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion.digital/technology/php',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion.digital/technology/net',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion.digital/technology/mobile',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion.digital/technology/java',
      changefreq: 'weekly',
      priority: 1,
    },
      {
      url: 'https://www.helion.digital/industries',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion.digital/industries/real-estate',
      changefreq: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.helion.digital/industries/travel',
      changefreq: 'weekly',
      priority: 1,
    },
      {
      url: 'https://www.helion.digital/industries/eCommerce',
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
