import styles from './Bubble.module.css'

const Bubble = (props) => {
  console.log(props.name)
  return (
    <div className={styles.bubble}>
      {props.name}
    </div>
  )
}

export default Bubble