import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {face} from "../src/face.js"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>qv.vg</title>
        <meta name="description" content="qv.vg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <pre>{face}</pre>
    </div>
  )
}
