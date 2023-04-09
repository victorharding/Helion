import Head from 'next/head';

const SEO = ({pageTitle}) => {
  return (
    <Head>
        <title>
         Helion {pageTitle}
        </title>
        <meta name = "description" content='Helion'/>
    </Head>
  )
}

export default SEO
