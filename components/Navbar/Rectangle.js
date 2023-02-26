
import styles from "../../styles/Navbar.module.css"


const Rectangle = ({color,number}) =>{

    return <div className={styles.rectangle} style={{backgroundColor:color}}>
        {number}
    </div>
}

export default Rectangle;
