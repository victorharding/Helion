import About from '../src/components/about/index'
import Meta from '../src/components/Meta'

const about = () =>{
    return(
        <>
            <Meta title={"Helion About"} ogTitle={"Helion About"} ogUrl={"https://www.helion.digital/about"}/> 
            <About/>
        </>
    );
}; export default about