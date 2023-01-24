import data from '../data/employee.json'
import { useState } from 'react'
import Link from 'next/link'


export default function About() {
    console.log(data);
    const [information, setInformation] = useState([...data])
    return (

        <>
        <Link href="index"><b>Back</b></Link>
            <div className='header'>About Page</div>
            {
                information && information.map((info, index) => {
                    if (info.department === "Media") {
                        return (
                            <Card key={index}>
                                
                                {info.employeeNumber}
                                {info.firstName}
                                {info.lastName}
                                
                            </div>
                        )
                    }
                }
                )
            }


        </>

    )
}