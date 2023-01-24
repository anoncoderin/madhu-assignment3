export default function Card(
    {
        degree="none",
        color="purple",
        font=10,
        image='icon/personTwo.png'
    }
){
    return(
        <div  className={styles.iconstyle={{backgroundcolor:color, fontSize:font }}>
           <img src={'icon/personThree.png'} width="50px"></img>  
           <p> {degree}
            {degree}</p>
        </div>
    )
}