import data from '../data/employee.json'
import { useState } from 'react'

export default function About() {
    console.log(data);
    const [information, setInformation] = useState([...data])
    return (

        <>
        <Link href="index"><b>Back</b></Link>
            <div>About Page</div>
            {
                information && information.map((info, index) => {
                    if (info.department === "Media") {
                        return (
                            <div key={index}>
                                
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