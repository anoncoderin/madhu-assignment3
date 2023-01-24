import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import data from '../data/education.json'




export default function Home() {
  console.log(data);
  const [information, setInformation] = useState([...data])
  return (
    <>
      <Head>
        
      </Head>
      <main className={styles.main}>

        <p>
          <link 
        </p>
        
      </main>
    </>
  )
}
