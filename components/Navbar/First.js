
import styles from "../../styles/Navbar.module.css"
import Image from "next/image"
import Circle from "../Common/Circle"
import Rectangle from "./Rectangle"
const First = () =>{

return (
    <div className={styles.first}>
<div className={styles.left}>
    <Circle src="/Ellipse 45.svg" Cwidth="30" Cheight="30"/>
    <Rectangle number={15} color="#FAAD14" />
    <div className={styles.line}></div>
    <Circle src="/Ellipse 46.svg"  Cwidth="30" Cheight="30"/>
    <Rectangle number={11} color="#B0A1DF" />
</div>
<div className={styles.right}>
<Image src="/Arrow Chevron.svg" width="22" height="22" alt="arrow"></Image>

</div>
</div>
)

}

export default First;