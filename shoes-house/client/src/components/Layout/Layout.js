import React from 'react'
import Footer from './Footer';
import Header from './Header';
// for seo we use metatag via this npm package react-helmet
import {Helmet} from "react-helmet";
import {ToastContainer} from 'react-toastify';
 const Layout = (props,title,description,keywords,author) => {
  return (
    <div>
            <Helmet>
            <div>
  <meta charSet="UTF-8" />
  <meta name="description" content={description}/>
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />
  <title>My Title</title>
</div>

            </Helmet>

    <Header/>
    <main style={{minHeight:'100vh'}}>
    <ToastContainer/>
    {props.children}
    </main>
    <Footer/>
    </div>
  )
}

Layout.defaultProps={
  title:'Shoes house',
  description:'we prove a good quality shoes',
  keywords:'shoes,mens shoes, women shoes',
  author:'Aditya'
}
export default Layout;