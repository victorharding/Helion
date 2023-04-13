import Portfolio from '../src/components/portfolio/index';
import Meta from '../src/components/Meta'

const portfolio = () =>{
    return(
        <>
            <Meta title={"Helion Portfolio"} ogTitle={"Helion Portfolio"} ogUrl={"https://www.helion.digital/portfolio"}/> 
            <Portfolio/>
        </>
    );
}; export default portfolio