import About from '../src/components/about/index'
import Meta from '../src/components/meta';

const about = () =>{
    return(
        <>
            <Meta title="Helion About" ogUrl="/about"/>
            <About/>
        </>
    );
}; export default about