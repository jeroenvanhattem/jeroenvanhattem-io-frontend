import styles from './BigText.module.css'

const BigText = () => {
  return (
    <div className={styles.bigText}>
      <div className={styles.small}>
        i am
      </div>
      <div className={styles.big}>
        jeroen
      </div>
      <div className={styles.bar} />
    </div>
  )
}

export default BigText