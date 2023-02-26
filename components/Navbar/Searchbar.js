import Image from "next/image";
import styles from "../../styles/Navbar.module.css"


const Searchbar = () =>{

    return <div className={styles.searchbar}>

        <Image src="/Search.svg" width="20" height="20" alt="search"></Image>
        <input placeholder="Search" className={styles.searchinput}/>
    </div>
}

export default Searchbar;