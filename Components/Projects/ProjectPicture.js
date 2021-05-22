import styles from './ProjectPicture.module.css'

const ProjectPicture = (props) => {
  return (
    <div className={styles.projectPicture}>
      <img src={props.image} />
    </div>
  )
}

export default ProjectPicture