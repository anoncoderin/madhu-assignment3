export default function Employee(
    {
        employeeNumber="none",
        firstName="none",
        lastName="none",
        department="none",
        image='icon/person.png'
    }
){
    return(
        <div>
           <img src={image} width="50px"></img>  
           <p> {firstName}<br></br>
           {lastName}<br></br>
           {employeeNumber}
            {degree}</p>
        </div>
    )
}

