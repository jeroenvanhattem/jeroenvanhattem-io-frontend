import Header from '../Components/Header/Header'
import Introduction from '../Components/Introduction/Introduction'
import Portfolio from '../Components/Portfolio/Portfolio'
import Footer from '../Components/Footer/Footer'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Footer />
    </div>
  )
}
