import Link from 'next/link'
import styles from './Project.module.css'

const Project = (props) => {
  const backgroundCSS={
    color: '#ccc',
    backgroundImage: 'url(' + props.image + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div style={backgroundCSS} className={styles.project} >
      <h1>{props.title}</h1>
      <h1><Link href={`${props.id}`}>Visit here for more</Link></h1>
      <h3>{props.description}</h3>
    </div>
  )
}

export default Project