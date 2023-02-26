
import styles from "../../styles/Navbar.module.css"
import Image from "next/image";

const Square = ({color,src,Swidth,Sheight}) =>{

    return <div className={styles.square} style={{backgroundColor:color}}>
        <Image src={src} height={Sheight} width={Swidth} style={{objectFit:"contain"}} alt="square"></Image>
    </div>
}

export default Square;
