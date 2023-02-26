import Image from "next/image";
import styles from "../../styles/Board.module.css";

import dynamic from 'next/dynamic';
const Card = dynamic(() => import('./Card'), {
  ssr: false,
})
const List = ({name,card}) => {
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
        <div className="flex justify-center">
        <div className={styles.addcard}>
          <Image src="/Plus2.svg" height={22} width={22} style={{margin:"0px 5px 0px 9px"}}></Image>Add Card
        </div> 
        </div>
     </div>
  );
};

export default List;
