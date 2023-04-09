import Portfolio from '../src/components/portfolio/index';
import Meta from '../src/components/meta';

const portfolio = () =>{
    return(
        <>
             <Meta title="Helion Portfolio" ogUrl="/portfolio"/>
            <Portfolio/>
        </>
    );
}; export default portfolio