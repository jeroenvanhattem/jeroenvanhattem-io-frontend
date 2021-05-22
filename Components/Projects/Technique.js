import styles from './Technique.module.css'

const Technique = (props) => {
  console.log(props.name)
  return (
    <div className={styles.technique}>
      {props.name}
    </div>
  )
}

export default Technique