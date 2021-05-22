import Head from 'next/head'
import { useEffect, useState } from 'react'
import Project from './Project'
import styles from './Portfolio.module.css'

const Portfolio = (props) => {

  console.log(props)

  return (
    <div className={styles.portfolio}>
      <h1>what i made</h1>
      <div className={styles.projects}>
        {props.projects && props.projects.map((project) => {
          return (
            <div
              key={project.id}
              className={styles.project}>
              <Project
                key={project.id}
                className={styles.project}
                id={project.id}
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

export default Portfolio