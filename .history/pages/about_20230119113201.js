import data from '../data/education.json'
import { useState } from 'react'

export default function About(){
    console.log(data);
    const [information, setInformation]= useState([...data])
    return(

<>
<div>About Page</div>
{
    information && setInformation.map((info, index)=>
    
    )
}


</>

    )
}