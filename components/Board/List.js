import Image from "next/image";
import styles from "../../styles/Board.module.css";

import dynamic from 'next/dynamic';
import { useState } from "react";
const Card = dynamic(() => import('./Card'), {
  ssr: false,
})
const List = ({name,card}) => {

  const [toggle,settoggle] = useState(card==2?1:0);

  return (
    <div className={styles.list}>
      <div className="flex justify-between" style={{marginBottom:8}} >
        <div className="flex items-center" style={{columnGap:8}}>
          {" "}
          <h3 className={styles.backlog}>
            {name}<span className={styles.span}>({card})</span>
          </h3>
          <Image src="/Filters.svg" width={14} height={14}></Image>
          <Image src="/Vector.svg" width={14} height={14}></Image>
        </div>
        <div className="flex items-center">
        <Image src="/Menu Dot.svg" width={16} height={16} style={{marginRight:5}}></Image>
        </div>
      </div>

        <div className={styles.carddiv} >
        {
            [...Array(card)].map((obj,i)=>{
              return <Card key={i}/>
            })
        }
          
          
        </div>
        {toggle==0&&
        <div className="flex justify-center">
        <div className={styles.addcard} onClick={()=>settoggle(!toggle)}>
          <Image src="/Plus2.svg" height={22} width={22} style={{margin:"0px 5px 0px 9px"}}></Image>Add Card
        </div> 
        </div>
        }
        {toggle==1&&
        <div className={styles.showcard}>
        <div className={styles.blueline}></div>
        <div className="flex justify-between"><h2 className={styles.cardtitle}>Card title</h2>
          <button className="btn"><img src="/Close.svg" onClick={()=>settoggle(!toggle)} /></button>
        </div>
        <textarea className={styles.mytextarea} placeholder="Enter card name"></textarea>
        <div className="flex justify-between" style={{marginTop:4}}>
          <select className={styles.selectproject}>
            <option>Contact RM</option>
            <option>Agent Book</option>
            <option>W4RTeam</option>
            <option>LeadBank</option>
          </select>
          <button className={styles.addbtn} onClick={()=>settoggle(!toggle)}>
            Add
          </button>
        </div>

        </div>

      }
        
     </div>
  );
};

export default List;
