import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Babyyy i love U🥺❤️</h1>
        <p className={styles.text}>Babe i need U🥺😽❤️</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente in, nam fugit incidunt sint, laborum reiciendis fugiat minima consequatur quidem porro ut exercitationem. Hic libero ab accusantium! In excepturi rem dolores sunt, consequuntur obcaecati vero sapiente. Dolorum eum beatae, doloremque rerum voluptates sint maxime, et, neque nemo?</p>

        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
