import styles from "../../utility/style"

import Navbar from '../common/nav/index'
import Footer from '../common/nav/footer'
import Hero from '../common/hero'

export default function Layout({ children }) {
  const SchemaMarkup ={
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
  ],
};
        
        
  return (
    <div className='bg-primary w-full overflow-hidden'>
         <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth} fixed z-10 top-0 bg-white`}>
               <Navbar />
            </div>
         </div>
         <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
               <Hero/>
            </div>
         </div>
         <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
                 <main>{children}</main>
                 <Footer />
            </div>
        </div>
        
        <script type="application/ld+json">
           {JSON.stringify(SchemaMarkup)}
        </script>

    </div>
    
  )
}
