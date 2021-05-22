import Header from '../Components/Header/Header'
import WhatIDo from '../Components/WhatIDo/WhatIDo'
import Footer from '../Components/Footer/Footer'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <WhatIDo />
      <Footer />
    </div>
  )
}
