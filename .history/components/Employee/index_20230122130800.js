import styles from '@/styles/about.module.css'
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
        <div className={styles.dpt}>
           <img src={image} width="50px"></img>  
           <p> {firstName}<br></br>
           {lastName}<br></br>
           {employeeNumber}
            </p>
        </div>
    )
}

