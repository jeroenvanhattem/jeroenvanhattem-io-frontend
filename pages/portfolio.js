import Head from 'next/head'
import Header from '../Components/Header/Header'
import Portfolio from '../Components/Portfolio/Portfolio'
import Footer from '../Components/Footer/Footer'

import styles from '../styles/Home.module.css'

export default function Page (props) {
  return (
    <>
      <Head>
        <title>{`jeroen | what i made`}</title>
        <meta
          name='description'
          content={`jeroenvanhattem.io what i made`}
        />
      </Head>
    <div className={styles.container}>
      <Header />
      <Portfolio projects={props.projects} />
      <Footer />
    </div>
    </>
  )
}

export const getStaticProps = async () => {
  const BACKEND_URL = process.env.BACKEND_URL

  const response = await fetch(BACKEND_URL + '/projects/')
  const projects = await response.json()

  return {
    props: {
      projects: projects.map((project) => ({
        id: project._id.toString(),
        title: project.title,
        description: project.description,
        techniques: project.techniques,
        image: project.image,
        link: project.link
      }))
    },
    revalidate: 1
  }
}