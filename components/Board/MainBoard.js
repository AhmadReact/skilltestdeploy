
import Image from "next/image";
import styles from "../../styles/Board.module.css"
import List from "./List";

const MainBoard = () =>{

return <div className={styles.mainboard} >

            <div><List name="Backlog" card={2}/></div>
            <div><List name="To Do" card={5}/></div>
            <div><List name="In Process" card={35}/></div>
            <div><List name="In Review"  card={5}/></div>
            <div> <List name="Completed"  card={1}/></div>
      
         

            <Image src="/Group 1299.svg" width={32} height={32} style={{position:"absolute",right:0,top:"50%",transform:"scale(1.3)"}} />
            <Image src="/Group 202.svg" width={32} height={32} style={{position:"absolute",right:0,top:"55%"}} />
    </div>

}

export default MainBoard;