

import styles from "../../styles/Sidebar.module.css"
import Image from "next/image"

const Sidebar = () =>{

    return (
        <div className={styles.header}>
            <div className="flex justify-center items-center"  style={{columnGap:8,position: "relative",left: "15px"}}>
            <Image src="/pink.png" width="18" height="18" alt="pink"></Image> 
            <h1 className={styles.name}>Zaan Corp</h1>
            <Image className={styles.downarrow} src="/downarrow.svg" width="12" height="12" alt="downarrow" ></Image>
            </div>
            <div>
                <Image className={styles.downarrow} src="/doublearrow.svg" width="20" height="20" alt="doublearrow" ></Image>
            </div>
        </div>
    )
    
    }
    
export default Sidebar;