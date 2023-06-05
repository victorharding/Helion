import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
                <script type="application/ld+json">
            {JSON.stringify(
            {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Helion Studio",
  "image": "https://www.helion-studio.com/assets/logo.svg",
  "@id": "",
  "url": "https://www.helion-studio.com/",
  "telephone": "06722336609",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "374 Emus Erasmus Ave",
    "addressLocality": "Pretoria",
    "postalCode": "0165",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -25.8160485,
    "longitude": 28.2514558
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://twitter.com/helion_studio",
    "https://www.instagram.com/helion_studio_",
    "https://www.helion-studio.com/"
  ] 
};
            )}
           </script>
          <NextScript />
        </body>
      </Html>
    )
  }
}
