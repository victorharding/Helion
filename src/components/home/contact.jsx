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
        <a href="mailto:info@helion-studio.com" target="_blank">info@helion-studio.com</a>
        </li>
        <li className={`mb-2 hover:text-secondary`}>
        <a href="https://goo.gl/maps/ECi4a4ntsfTh9D7E6" target="_blank">374 Emus Erasmus Ave,<br/> Erasmusrand, Pretoria, 0165</a>
        </li>
        <li className="hover:text-secondary">
        <a href="tel:0672233609">+27 672233609</a>
        </li>
      </ul>

      
    </div>

    <div className={layout.sectionImg}>
     <ContactForm/>
    </div>
  </section>
);

export default Contact;
