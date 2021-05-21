import Navigation from './Navigation'

import styles from './Header.module.css'

const Header = () => {

  return (
    <div className={styles.header}>
      <Navigation />
    </div>
  )
}

export default Header