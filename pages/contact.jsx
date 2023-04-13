import Contact from '../src/components/contact/index';
import Meta from '../src/components/Meta'

const contact = () =>{
    return(
        <>
          <Meta title={"Helion Contact"} ogTitle={"Helion Contact"} ogUrl={"https://www.helion.digital/contact"}/> 
          <Contact/>
        </>
    );
}; export default contact