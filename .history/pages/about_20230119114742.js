import data from '../data/education.json'
import { useState } from 'react'

export default function About() {
    console.log(data);
    const [information, setInformation] = useState([...data])
    return (

        <>
            <div>About Page</div>
            {
                information && information.map((info, index) => {
                    if (info.department=="Business"){
                    return(studentNumber == info.studentNumber) (firstName == info.firstName)(gpa == info.gpa)(graduated == info.graduated)
                        

                        
                    }
                }
                )
            }


        </>

    )
}