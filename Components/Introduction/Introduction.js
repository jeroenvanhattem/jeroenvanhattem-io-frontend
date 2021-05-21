import Picture from './Picture'
import About from './About'
import BigText from './BigText'

import styles from './Introduction.module.css'

const Introduction = () => {
  return (
    <div className={styles.introduction}>

      <div className={styles.rowUpper}>
        <div className={styles.picture}>
          <Picture />
        </div>
        <div className={styles.bigText}>
          <BigText />
        </div>
      </div>

      <div className={styles.rowLower}>
        <div className={styles.about}>
          <About />
        </div>
      </div>

    </div>
  )
}

export default Introduction