import Bubble from '../UI/Bubble'
import styles from './WhatIDo.module.css'

export default function Home() {
  return (
    <div className={styles.whatIDo}>
      <h1>what i do</h1>

      <div className={styles.introduction}>
        <p>hey, i'm jeroen. i'm 22 years old. living near utrecht.</p>
        <p>i make music (hip-hop). i develop websites using react, getting better at it. i workout a lot, play football regularly.</p>
        <p>i'd love to move to new york</p>
        <p>if you want to reach out to me. don't think twice and send me an email at jeroenvanhattem[at]outlook.com</p>
      </div>

      <div className={styles.skills}>
        <h4>skills</h4>
        <p>i'm a beginning react developer. i also know some node.js</p>
        <Bubble name='React' />
        <Bubble name='Node.js' />
        <Bubble name='Next.js' />
        <Bubble name='CSS' />
        <Bubble name='Express' />
        <Bubble name='JavaScript' />

      </div>
    </div>
  )
}
