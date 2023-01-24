export default function Card(
    {
        degree="none",
        color="purple",
        font=10,
        image='icon/personTwo.png'
    }
){
    return(
        <div  style={{backgroundcolor:color, fontSize:font }}>
           <img src={'icon/person.png'} width="700px"></img>  
           <p> {degree}
            {degree}</p>
        </div>
    )
}