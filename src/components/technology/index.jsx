import { technology } from "../../data/technologyData";
import styles from "../../utility/style";
import Card from "../common/card";


const Technology = () =>(
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2}  underline decoration-orange-400 underline-offset-8 decoration-2`}>
      Technology
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        We assemble engineering teams across different technologies and areas of expertise:
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] ">
      {technology.map((card) => <Card key={card.id} {...card} />)}
    </div>
  </section>
  )

export default Technology