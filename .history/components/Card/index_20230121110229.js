export default function Card(
    {
        degree="none",
        color="purple",
        font=0,
        image='icon/personTwo.png'
    }
){
    return(
        <div  style={{backgroundcolor:color, fontSize:font , display:flex, flex-}}>
            <img src={'icon/person.png'} width="50px"></img>
           <p> {degree}
            {degree}</p>
        </div>
    )
}