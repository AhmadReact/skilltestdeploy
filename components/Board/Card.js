import styles from "../../styles/Board.module.css";
import Image from "next/image";
import Circle from "../Common/Circle";
import { useEffect } from "react";
const Card = () => {



  const array=["ContactRM" , "AgentBook" ,"DW4RTeam"];
  
  useEffect(()=>{

    const  red=()=>
    {
      return


    }


  },[])
  
  
  
  return (
    <div className={styles.card}>
      <div className="flex justify-between">
        <div className="flex items-center" style={{ columnGap: 4 }}>
          <div
            className={styles.indicator}
            style={Math.random() < 0.5?{backgroundColor: "#FF3477"}:{backgroundColor: "#6248FF" }}
          >
            {" "}
          </div>
          <div className={styles.contactRM}>{array[Math.floor(Math.random() * array.length)]}</div>
        </div>

        <div>
          <Image src="/Frame 6485.svg" width={14} height={14} />
        </div>
      </div>
      <div className={styles.design}>
        Design a Website
      </div>
      <div className="flex" style={{columnGap:4,margin:"8px 0px"}}>
            <div className={styles.orange}>api.contactrm.com</div>
            <div className={styles.pink}>api.contactrm</div>
      </div>
      <div className="flex items-center" style={{columnGap:8}}>
        <Image src="/Frame 6482.svg" width={14} height={14} />
        {Math.random() < 0.5&&<div className="flex items-center" style={{columnGap:4}}>
        <Image src="/Message.svg" width={14} height={14} />
          <span className={styles.carditemnumber}>12</span>
        </div>}
        {
          Math.random() < 0.5&&<div className="flex items-center" style={{columnGap:4}}>
        <Image src="/Checklist 3.svg" width={14} height={14} />
        <span className={styles.carditemnumber}>8/9</span>
        </div>
        }
        {Math.random() < 0.5&&
          <div className="flex items-center" style={{columnGap:4}}>
        <Image src="/Link.svg" width={14} height={14} />
        <span className={styles.carditemnumber}>2</span>
        </div>
        }
     
      </div>
      <div className="flex justify-between" style={{marginTop:8}}> 
        <div className={styles.created}>
        Created 3 days ago
        </div>
        <Circle src="/Ellipse 47.svg" Cheight="18" Cwidth="18" />
      </div>
    </div>
  );
};

export default Card;
