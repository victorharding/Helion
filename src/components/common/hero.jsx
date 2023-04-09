import styles from '../../utility/style';
import ContactForm from './form/contact';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} mt-[50px]`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[96px] text-[52px] text-black ss:leading-[100px] leading-[75px]'><span className='text-gradient'>Innovation 
        </span><br className='sm:block hidden'/> {" "}
         is in our {" "}
        </h1>
      </div>
      <h1  className='font-poppins font-semibold ss:text-[96px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full'>
      <span className='text-gradient'>DNA.
        </span>
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We engineer world-class software for SMBs
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} ml-[20px] mr-[20px]`}>
      <ContactForm/>
    </div>
  </section> 
)


export default Hero
