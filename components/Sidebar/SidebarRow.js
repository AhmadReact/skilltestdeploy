import styles from "../../styles/Sidebar.module.css"
import Image from "next/image"


const SidebarRow =({name,src})=>{

return(

    <div className={styles.sidebarrow}>
                <Image style={{objectFit:"contain"}} src={src} width="20" height="20" alt="sidebarrow"></Image>
                <h1  className={styles.rowname}>{name}</h1>
    </div>
)

}

export default SidebarRow;