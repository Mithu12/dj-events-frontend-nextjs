import Head from 'next/head';
import {useRouter} from "next/router";


import styles from '../styles/Layout.module.css'
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "@/components/Showcase";

const Layout = ({title, description, keywords, children}) => {
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
            </Head>
            <Header/>
            {router.pathname === '/' && <Showcase/>}
            <div className={styles.container}>
                {children}
            </div>
            <Footer/>

        </div>
    )
};

Layout.defaultProps = {
    title: 'DJ events | Find your DJ',
    description: "Find latest DJ and Parties",
    keywords: 'music, dj, edm, events'

}


export default Layout;