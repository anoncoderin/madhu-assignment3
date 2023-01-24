export default function Card(
    {
        degree="none",
        color="purple",
        font=0,
        image='icon/personTwo.png'
    }
){
    return(
        <div  style={{backgroundcolor:color, fontSize:font , display:}}>
            <img src={'icon/person.png'} width="50px"></img>
           <p> {degree}
            {degree}</p>
        </div>
    )
}