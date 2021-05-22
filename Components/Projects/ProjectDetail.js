import ProjectPicture from './ProjectPicture'
import Technique from './Technique'
import styles from './ProjectDetail.module.css'

const ProjectDetail = (props) => {
  return (
    <div className={styles.ProjectDetail}>
      <ProjectPicture image={props.image} />

      <div className={styles.techniques}>
        <h3>Description</h3>
        <p>{props.description}</p>
      </div>

      <div className={styles.techniques}>
        <h3>Techniques</h3>
        {props.techniques && props.techniques.map((technique) => {
          return (
            <Technique name={technique} />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectDetail