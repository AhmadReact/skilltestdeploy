
import Image from "next/image"


const Circle = ({src,Cheight,Cwidth,bg}) =>{

    return <Image  src={src} style={{objectFit:"contain",backgroundColor:bg}} width={Cwidth} height={Cheight} alt="circle"></Image>
  
}

export default Circle;