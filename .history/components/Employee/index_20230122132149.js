import styles from '@/styles/about.module.css'
export default function Employee(
    {
        employeeNumber = "none",
        firstName = "none",
        lastName = "none",
        department = "none",
        image = 'icon/person.png'
    }
) {
    return (
        <div>
            <div className={styles.dpt}>
                <img src={image} width="45px"></img>
            </div>

            <div className={styles.dpt}>

                <p> {firstName} &nbsp;
                    {lastName}<br></br>
                    {employeeNumber}
                </p>
            </div>
        </div>
    )
}

