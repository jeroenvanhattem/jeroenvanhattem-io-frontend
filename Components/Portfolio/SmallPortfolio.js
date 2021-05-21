import { useEffect, useState } from 'react'
import Project from './Project'
import styles from './SmallPortfolio.module.css'

const SmallPortfolio = () => {
  const [projects, setProjects] = useState(null)
  const BACKEND_URL = process.env.BACKEND_URL

  useEffect(async () => {
    const response = await fetch(BACKEND_URL + '/projects')
    const projects = await response.json()

    console.log(projects)
    setProjects(projects)
  }, [])

  return (
    <div className={styles.smallPortfolio}>
      <h1>what i made</h1>
      <div className={styles.projects}>
        {projects && projects.map((project) => {
          return (
            <div className={styles.project}>
              <Project
                className={styles.project}
                id={project._id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default SmallPortfolio