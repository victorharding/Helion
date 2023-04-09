import styles, { layout } from "../../utility/style";
import ContactForm from '../common/form/contact';

const Contact = () => (
  <section id="contact" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Let's Work <br className="sm:block hidden" /> Togehter 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Let's build something great together
      </p>
      <ul className={`max-w-[470px] mt-6`}>
        <li className={`mb-2 hover:text-secondary`}>
        <a href="mailto:info@helion.digital" target="_blank">info@helion.digital</a>
        </li>
        <li className={`mb-2 hover:text-secondary`}>
        <a href="https://goo.gl/maps/h1R6WKRvT8bUrL2z9" target="_blank">9461 Charleville <br/> BlvdBeverly Hills, CA 90212, USA</a>
        </li>
        <li className="hover:text-secondary">
        <a href="tel:740-847-1830">+1 740847183</a>
        </li>
      </ul>

      
    </div>

    <div className={layout.sectionImg}>
     <ContactForm/>
    </div>
  </section>
);

export default Contact;