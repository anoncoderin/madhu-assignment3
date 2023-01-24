import data from '../data/employee.json'
import { useState } from 'react'
import Link from 'next/link'
import Employee from '../components/Employee'
import styles from '@/styles/about.module.css'



export default function About() {
    console.log(data);
    const [information, setInformation] = useState([...data])
    return (

        <>
        <Link href="/"><b>Back</b></Link>

            <div className={'styles.header'}>About Page</div>
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

{
                information && information.map((info, index) => {
                    if (info.department === "Media") {
                        return (
                            <Employee key={index} >
                                
                               firstName= {info.firstName}
                                
                                
                            </Employee>
                            
                        )
                    }
                }
                )
            }


        </>

    )
}