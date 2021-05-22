import Head from 'next/head'
import Header from '../Components/Header/Header'
import Introduction from '../Components/Introduction/Introduction'
import Footer from '../Components/Footer/Footer'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`jeroen | home`}</title>
        <meta
          name='description'
          content={`jeroenvanhattem.io home`}
        />
        <meta
          name='tags'
          content='jeroen van hattem jeroenvanhattem jeroenvanhattem.io websites react node express next.js home developer music hiphop hip-hop'
        />
      </Head>
    <div className={styles.container}>
      <Header />
      <Introduction />
      <Footer />
    </div>
    </>
  )
}
