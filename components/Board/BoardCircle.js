import Image from "next/image";
import styles from "../../styles/Board.module.css"

const BoardCircle = ({src,bg}) =>{

    return <div className={styles.boardcircle} style={{backgroundColor:bg,borderRadius:"50%",width:35,height:35}}>

        <Image src={src} height="20" width="20" ></Image>
    </div>
}

export default BoardCircle;