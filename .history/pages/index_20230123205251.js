import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import data from '../data/education.json'
import Link from 'next/link'
import Card from '../components/Card'
import style from '../components/Card/Card.module.css'

export default function Home() {
  console.log(data);
  const [information, setInformation] = useState([...data])
  return (
    <>
    

      <Head>
        
      </Head>

      <main className={styles.main}>
        <div className={styles.nav}>
        <p> 
          
          <Link href="/"><b>Home &nbsp;&nbsp;</b></Link>
          <Link href="about"><b>About</b></Link>
        </p>
        </div>
        <h1>Program & Courses</h1>
      <div className={styles.heading}>Business:</div>
      <div className={styles.row}>
      {
        information && information.map((info, index)=>{
          if(info.department === "Business"){
            return(
              <Card key={index} degree={info.degree} font={20}></Card>
            )
          }
        })
      }
      </div>
      <div className={styles.heading}>Computing:</div>
      <div className={styles.row}>
      {
        information && information.map((info, index)=>{
          if(info.department === "Computing"){
            return(
              
              <Card key={index} degree={info.degree} font={20}></Card>
            )
          }
        })
      }
      </div>
      </main>
    </>
  )
}
