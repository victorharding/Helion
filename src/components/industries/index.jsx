import { industries } from "../../data/industriesData";
import styles from "../../utility/style";
import { arrow } from "../../../public/assets/index";

const Card = ({ title, link})=>(
  <div className={`flex flex-row p-6 rounded-[20px] mb-6 card`}>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-black text-[30px] leading-[32px] mb-6 min-w-[300px]'>
        {title}
      </h4>
    
    
    <div className="flex flex-row">
      <div className="flex flex-col ml-0">
        <a href= {link}>
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black hover:text-secondary cursor-pointer ">
            Learn More
        </p>
        </a>
    
        
      </div>
      <div className="flex flex-col ml-2 mt-2.5">
      <img src="/assets/arrow-left.svg" alt="arrow" className="sm:w-[7px] w-[7px] object-contain" />
      </div>
      </div>
      </div>
  </div>

)


const Industries = () =>(
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
  
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2}  underline decoration-orange-400 underline-offset-8 decoration-2`}>
      Industries
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        We assemble engineering teams across different technologies and areas of expertise:
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {industries.map((card) => <Card key={card.id} {...card} />)}
    </div>
  </section>
  )

export default Industries