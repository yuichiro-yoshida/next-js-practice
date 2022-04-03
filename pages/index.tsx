import type { NextPage } from 'next'
import Head from 'next/head'
import Contents from '../components/organisms/Contents'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js practice by yuichiro-yoshida</title>
        <meta name="description" content="This is a Next.js practice project created by yuichiro-yoshida." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contents />
    </div>
  )
}

export default Home
