import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import data from '../data/education.json'
import Link from 'next/link'
import Card from '../components/Card'

export default function Home() {
  console.log(data);
  const [information, setInformation] = useState([...data])
  return (
    <>
      <Head>
        
      </Head>
      <main className={styles.main}>

        <p>
          <Link href="about"><b>About</b></Link>
        </p>
        
      <div className={styles.heading}>Business:</div>
      {
        information && information.map((info, index)=>{
          if(info.department === "Business"){
            return(
              <div key={index}> {info.degree}</div>
            )
          }
        })
      }
      <div className={styles.heading}>Computing:</div>
      {
        information && information.map((info, index)=>{
          if(info.department === "Computing"){
            return(
              <Card className={styles.degree} key={index} degree{info.degree}</Card>
            )
          }
        })
      }

      </main>
    </>
  )
}
