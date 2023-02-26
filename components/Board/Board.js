import styles from "../../styles/Board.module.css"
import Workflow from "../Board/Workflow"
import MainBoard from "../Board/MainBoard"
const Board = () =>{

return <div className={styles.board}>

<Workflow/>
<MainBoard/>
</div>

}

export default Board;