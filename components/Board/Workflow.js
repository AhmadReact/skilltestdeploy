import styles from "../../styles/Board.module.css"
import BoardCircle from "./BoardCircle";
import Circle from "../Common/Circle";
import Square from "../Navbar/Square";
const Workflow = () =>{

    return <div className={styles.workflow}>
        <div className="flex justify-center items-center" style={{columnGap:4}}>
        <h1 className={styles.heading}>Workflow 22</h1>
        <div style={{marginLeft:"24px"}}>
        <BoardCircle src="/Workflow.svg"  bg="#0E8CFF" />
        </div>
        <BoardCircle src="/Design.svg"  bg="#E7E7E9"/>
        <BoardCircle src="/Code.svg"  bg="#E7E7E9"/>
        <BoardCircle src="/Annoucement.svg"  bg="#E7E7E9"/>

        <div className={styles.line}></div>

        <Circle src="/Group 243.svg"  Cwidth="35"  Cheight="35" />   
        <Circle src="/Group 245.svg"  Cwidth="35"  Cheight="35" />   
        <Circle src="/Group 244.svg"  Cwidth="35"  Cheight="35" />   
        <Circle src="/Group 246.svg"  Cwidth="35"  Cheight="35" />  
        </div>
        <div className="flex justify-center items-center" style={{columnGap:12}}>
        <Square src="/Pinned.svg" Swidth={22} Sheight={22}/>
        <Square src="/double file.svg" Swidth={22} Sheight={22} />
        <Square src="/Frame 244.svg" Swidth={80} Sheight={20} />
        <Square src="/Frame 245.svg" Swidth={75} Sheight={20} />
        <Square src="/Frame 246.svg" Swidth={82} Sheight={20} />
        </div>
         </div>
}

export default Workflow;