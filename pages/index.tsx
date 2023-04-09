import Home from '../src/components/home/index';
import Meta from '../src/components/meta';

const index = () =>{
    return(
        <>
            <Meta title="Helion Home" ogUrl="/"/>
            <Home/>
        </>
    );
}; export default index