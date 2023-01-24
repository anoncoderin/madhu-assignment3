export default function Card(
    {
        degree="none",
        color="purple",
        font=0,
        image='icon/personTwo.png'
    }
){
    return(
        <div style={{color:color, fontSize:font}}>
            <img src={'icon/person.png'} width="50px"></img>
            degree
        </div>
    )
}