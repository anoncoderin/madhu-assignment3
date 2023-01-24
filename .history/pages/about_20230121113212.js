import data from '../data/employee.json'
import { useState } from 'react'
import Link from 'next/link'
import Card from '../components/Card'
import styles from '@/styles/about.module.css'



export default function About() {
    console.log(data);
    const [information, setInformation] = useState([...data])
    return (

        <>
        <Link href="index"><b>Back</b></Link>

            <div className={'styles.header'}>About Page</div>
            {
                information && information.map((info, index) => {
                    if (info.department === "Media") {
                        return (
                            <Card key={index} >
                                
                               employeeNumber= {info.employeeNumber}
                                
                                
                            </Card>

                        )
                    }
                }
                )
            }

{
                information && information.map((info, index) => {
                    if (info.department === "Media") {
                        return (
                            <Card key={index} >
                                
                               employeeNumber= {info.employeeNumber}
                                
                                
                            </Card>
                            
                        )
                    }
                }
                )
            }


        </>

    )
}