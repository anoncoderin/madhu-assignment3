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
           <img src={'icon/person.png'} width="70px"></img>  
           <ul> <li>{degree}
            </li>
            {degree}
            </li>
            </ul>
        </div>
    )
}