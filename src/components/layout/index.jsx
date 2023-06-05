import styles from "../../utility/style"

import Navbar from '../common/nav/index'
import Footer from '../common/nav/footer'
import Hero from '../common/hero'

export default function Layout({ children }) {
  return (
    <>
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
    </div>
    </>
  )
}
