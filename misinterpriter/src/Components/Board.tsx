import React from 'react'
import { Card } from 'antd';
import { Image, Image2, Title, Name } from './Boardstyle'
import { Detail } from '../Pages/Detail/Detail'

type Articleprops = {
  data: string;
}

const Board: React.FC<Articleprops> = ({data}) => {
  const name = data.split("_")[0]
  const title = data.split("_")[1].replace(/-/gi," ")

  const handleClick = () => {
    return <Detail/>
  }

  return (
    <div onClick={()=> handleClick()}>
      <Image2 src="https://static.wixstatic.com/media/72c0b2_a4dca20a8e2a4ff7a21b8f51b38820c8~mv2.gif"></Image2>
      <Title>{title}</Title>
      <Name>{name}</Name>
    </div>
        // <Card
        //   onClick={() => handleClick()}
        //   style={{"width":"90%"}}
        // >
        //   <Image src="https://static.wixstatic.com/media/72c0b2_b309efbc0d03462a985e8f1aaa1995af~mv2.png/v1/fill/w_1064,h_608,al_c,q_90/72c0b2_b309efbc0d03462a985e8f1aaa1995af~mv2.webp"></Image>
        //   <Meta title={title} description={name} />
        // </Card> 
  )
}

export default Board