import React from 'react'
import { Card } from 'antd';
import { Image } from './Boardstlye' 

type Articleprops = {
  title: string
  name: string
}

const Board: React.FC<Articleprops> = ({title, name}) => {
  const { Meta } = Card;
  console.log(title, name)
  return (

        <Card
          style={{ width: 350 }}
        >
          <Image src="https://static.wixstatic.com/media/72c0b2_b309efbc0d03462a985e8f1aaa1995af~mv2.png/v1/fill/w_1064,h_608,al_c,q_90/72c0b2_b309efbc0d03462a985e8f1aaa1995af~mv2.webp"></Image>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

  )
}

export default Board