import data from '../data/employee.json'
import { useState } from 'react'
import Link from 'next/link'
import Employee from '../components/Employee'
import styles from '@/styles/about.module.css'
import Icons from '../p'



export default function About() {
    console.log(data);
    const [information, setInformation] = useState([...data])
    return (

        <>
            <Link href="/"><button className={styles.button}>&lt;&lt;&nbsp;&nbsp;<b>BACK</b></button></Link>

            <div className={styles.header}>Our Team</div>

            <div className={styles.main}>
            <div className={styles.record}>MEDIA:</div>
            
            <div className={styles.row}>
            {

                information && information.map((info, index) => {
                    if (info.department === "Media") {
                        return (
                            <Employee key={index} employeeNumber={info.employeeNumber}
                                firstName={info.firstName}
                                lastName={info.lastName}
                            >
                            </Employee>

                        )
                    }

                }
                )
            }
            </div>

            <div className={styles.record}>BIO:</div>
            <div className={styles.row}>
            {
                information && information.map((info, index) => {
                    if (info.department === "Bio") {
                        return (
                            <Employee key={index} employeeNumber={info.employeeNumber}
                                firstName={info.firstName}
                                lastName={info.lastName}
                            >
                            </Employee>

                        )
                    }
                }
                )
            }
            </div>
            </div>

        </>

    )
}