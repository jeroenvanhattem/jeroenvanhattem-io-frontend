import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import styles from '../../styles/AddProject.module.css'

const AddProject = () => {
  const router = useRouter()

  const [projectTitle, setProjectTitle] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectTechniques, setProjectTechniques] = useState('')
  const [projectImage, setProjectImage] = useState('')
  const [projectLink, setProjectLink] = useState('')

  const backendURL = process.env.BACKEND_URL

  useEffect(() => {
    // If the user is not logged in, redirect them to the homepage.
    if (!localStorage.getItem('token')) {
      router.replace('/')
    }
  }, [])

  const submitHandler = async (event) => {
    event.preventDefault()

    const techniques = projectTechniques.split(' ')
    console.log(techniques)

    // Fetch to the login route with login data
    try {
      const response = await fetch(backendURL + '/project', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          title: projectTitle,
          description: projectDescription,
          image: projectImage,
          techniques: techniques,
          link: projectLink
        })
      })

      const responseData = await response.json()
      console.log(responseData)

      // If registration was successful
      if (responseData.project) {
        alert('Successfully added project.')
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>

      {/* Add Project form */}
      <div className={styles.form}>
        <div className={styles.header}>
          <h1>Add Project</h1>
        </div>

        <form onSubmit={submitHandler}>
          <label>Project Title</label>
          <div className={styles.input}>
            <input placeholder='Project title' onChange={(event) => setProjectTitle(event.target.value)} />
          </div>
          <label>Project Description</label>
          <div className={styles.input}>
            <input placeholder='Project description' onChange={(event) => setProjectDescription(event.target.value)} />
          </div>
          <label>Project Techniques</label>
          <div className={styles.input}>
            <input placeholder='Project techniques' onChange={(event) => setProjectTechniques(event.target.value)} />
          </div>
          <label>Project Image (URL)</label>
          <div className={styles.input}>
            <input placeholder='Project image' onChange={(event) => setProjectImage(event.target.value)} />
          </div>
          <label>Project Link (URL)</label>
          <div className={styles.input}>
            <input placeholder='Project link' onChange={(event) => setProjectLink(event.target.value)} />
          </div>
          <button type='submit'>Add project</button>
        </form>
      </div>
    </div>
  )
}

export default AddProject