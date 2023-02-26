
import styles from "../../styles/Navbar.module.css"
import First from "./First"
import Square from "./Square"
import Searchbar from "./Searchbar"
import Circle from "../Common/Circle"
const Navbar = () =>{

return (
    <div className={styles.navbar}>
        <First/>
        <Square src="/Suggestions.svg" Sheight={24} Swidth={24}/>
        <Square src="Plus.svg" color="#0E8CFF" Sheight={24} Swidth={24} />
        <Searchbar />
        <Square src="/Annoucement.svg" Sheight={24} Swidth={24}/>
        <Square src="/Calendar.svg" Sheight={24} Swidth={24}/>
        <Square src="/Chat with alert.svg" Sheight={24} Swidth={24}/>
        <Circle src="/Ellipse 47.svg" Cheight="38" Cwidth="38" />
    </div>
)

}

export default Navbar;