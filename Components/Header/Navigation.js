import Logo from './Logo'
import Socials from './Socials'

import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <Logo />
        </li>
        <li><a>home</a></li>
        <li><a>what i do</a></li>
        <li><a>portfolio</a></li>
      </ul>
      <ul className={styles.socials}>
        <Socials />
      </ul>

    </div>
  )
}

export default Navigation