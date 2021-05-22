import Link from 'next/link'
import styles from './Project.module.css'

const Project = (props) => {
  const backgroundCSS = {
    color: '#ccc',
    backgroundImage: 'url(' + props.image + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div style={backgroundCSS} className={styles.project} >
      <div className={styles.empty}>

      </div>
      <Link href={`${props.id}`}>
        <div className={styles.description}>
          <h1>{props.title}</h1>
        </div>
      </Link>
    </div>
  )
}

export default Project