import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ioToad</title>
        <meta name="description" content="Official ioToad website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div></div>
      </main>

      <footer className={styles.footer}>
        <div></div>
      </footer>
    </div>
  )
}
