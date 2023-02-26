import styles from "../../styles/Sidebar.module.css"
import Header from "./Header"
import Sidebarbody from "./Sidebarbody"

const Sidebar = () =>{

    return (
        <div className={styles.sidebar}>

            <Header/>
            <Sidebarbody/>

        </div>
    )
    
    }
    
export default Sidebar;