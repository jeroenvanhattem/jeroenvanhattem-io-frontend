import { useEffect, useState } from 'react'
import Project from './Project'
import styles from './Portfolio.module.css'

const Portfolio = (props) => {
  const [projects, setProjects] = useState(null)
  const BACKEND_URL = process.env.BACKEND_URL

  useEffect(async () => {
    const response = await fetch(BACKEND_URL + '/projects')
    const projects = await response.json()

    console.log(projects)
    setProjects(projects)
  }, [])

  return (
    <div className={styles.portfolio}>
      <h1>what i made</h1>
      <div className={styles.projects}>
        {projects && projects.map((project) => {
          return (
            <div
              key={props.project._id}
              className={styles.project}>
              <Project
                key={props.project._id}
                className={props.styles.project}
                id={props.project._id}
                title={props.project.title}
                description={props.project.description}
                image={props.project.image}
              />
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  // Fetch data from an API
  const BACKEND_URL = process.env.BACKEND_URL

  const response = await fetch(BACKEND_URL + '/projects/')
  const projects = await response.json()

  return {
    props: {
      projects: projects
    },
    revalidate: 1
  }
}

export default Portfolio