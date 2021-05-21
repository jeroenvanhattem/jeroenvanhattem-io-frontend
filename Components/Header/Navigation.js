import Logo from './Logo'
import Link from 'next/link'
import Socials from './Socials'

import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <Logo />
        </li>
        <li><Link href='/'>home</Link></li>
        <li><Link href='/what-i-do'>what i do</Link></li>
        <li><Link href='/portfolio'>portfolio</Link></li>
      </ul>
      <ul className={styles.socials}>
        <Socials />
      </ul>

    </div>
  )
}

export default Navigation