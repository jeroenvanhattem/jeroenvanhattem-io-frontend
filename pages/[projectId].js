import Head from 'next/head'
import Header from '../Components/Header/Header'
import ProjectDetail from '../Components/Projects/ProjectDetail'

import styles from '../styles/ProjectDetails.module.css'

const ProjectDetails = (props) => {

  return (
    <>
      <Head>
        <title>{`jeroen | ${props.project.title}`}</title>
        <meta
          name='description'
          content={`jeroenvanhattem.io ${props.project.name} ${props.project.description}`}
        />
      </Head>
    <div className={styles.container}>
      <Header />
      <div className={styles.projectDetails}>
        <h1>{props.project.title}</h1>

        <div className={styles.project}>
          <ProjectDetail
            className={styles.project}
            id={props.project.id}
            techniques={props.project.techniques}
            title={props.project.title}
            description={props.project.description}
            image={props.project.image}
            link={props.project.link}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const BACKEND_URL = process.env.BACKEND_URL
  const response = await fetch(BACKEND_URL + '/projects')
  const projects = await response.json()

  return {
    fallback: 'blocking',
    paths: projects.map((project) => ({
      params: { projectId: project._id.toString() }
    }))
  }
}

export const getStaticProps = async (context) => {
  // Fetch data for a single project

  const BACKEND_URL = process.env.BACKEND_URL
  const projectId = context.params.projectId
  const response = await fetch(BACKEND_URL + '/projects/' + projectId)
  const project = await response.json()

  return {
    props: {
      project: {
        id: project._id.toString(),
        title: project.title,
        description: project.description,
        techniques: project.techniques,
        image: project.image,
        link: project.link,
      }
    },
    revalidate: 60
  }
}

export default ProjectDetails