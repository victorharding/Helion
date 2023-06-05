import React from 'react'
import styles from '../../utility/style';

const about = () => {
  return (
    <section id="about" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2}  underline decoration-orange-400 underline-offset-8 decoration-2`}>
       Who we are
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Helion leverages exceptional engineering talent to digitalize small and medium businesses
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
    <p className={`${styles.paragraph} text-left max-w-[800px]`}>
    Helion is a leading software development and innovation firm that empowers the world’s most influential brands through software development. Our expertise spans the entire application development lifecycle including dedicated development teams, custom software development, and world-class advice. We deliver best-in-class software solutions that empower our clients to achieve their dreams. With the world’s brightest software professionals.
    </p>
    </div>
  </section>
  )
}

export default about
