import Header from '../Components/Header/Header'
import Portfolio from '../Components/Portfolio/Portfolio'
import Footer from '../Components/Footer/Footer'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Portfolio />
      <Footer />
    </div>
  )
}
