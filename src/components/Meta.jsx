import Head from "next/head";

const Meta = ({title, keywords, description, ogTitle, ogType, ogUrl, ogImage}) => {
    return ( 
       <Head>
           <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
           <meta charSet="utf-8"></meta>
           <meta property="title" content="{title}"/>
           <meta name="description" content={description}></meta>
           <meta name="keywords" content={keywords}></meta>
           <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={description}/>
            <meta property="og:site_name" content="Helion Studio"/>
           <meta property="og:type" content={ogType} />
           <meta property="og:url" content={ogUrl} />
           <meta property="og:image" content={ogImage} />
            <!--   Facebook App ID->
            <meta property="fb:app_id" content=""/>
            <!--    TWITTER     -->
           <meta name="twitter:card" content="summary_large_image"/> 
           <meta name="twitter:site" content="@helion_studio"/>
           <meta name="twitter:title" content={title}/>
           <meta name="twitter:description" content={description}/>
           <meta name="twitter:image:src" content={ogImage}/>
               
             <!--    ----------   -->
           <link rel="icon" href="/favicon.ico"></link>  
           <link rel="apple-touch-icon" href="/favicon.ico"></link> 
           <title>{title}</title>
           
       </Head>
     )
}
 Meta.defaultProps = {
     title: "Helion Studio | Leading software development and innovation firm",
     keywords: "Software Development Company, Helion Studio, Helion",
     description: "Helion is a leading software development and innovation firm that empowers the world’s most influential brands through software development.",
     ogTitle:"Helion Studio | Leading software development and innovation firm",
     ogType: "website",
     ogUrl: "https://helion.digital/",
     ogImage :"/favicon.ico",

 }
export default Meta;
