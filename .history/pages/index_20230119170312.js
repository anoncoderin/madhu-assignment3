import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import data from '../data/education.json'
import Link from 'next/link'





export default function Home() {
  console.log(data);
  const [information, setInformation] = useState([...data])
  return (
    <>
      <Head>
        
      </Head>
      <main className={styles.main}>

        <p>
          <Link href="about">About</Link>
        </p>
        
  <div class="heading">Business:</div>
  {
    information && information.map((info, index)=>{
      if(info.department== "Business"){
        return(
          <div> {info.degree}</div>
        )
      }
    }
    )
  }
  <div >
  Computing:</div>
  {
    information && information.map((info, index)=>{
      if(info.department=="Computing"){
        return(
          <div>{info.degree}</div>
        )
      }
    })
  }

      </main>
    </>
  )
}
