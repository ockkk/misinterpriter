import React from 'react'
import { Card } from 'antd';
import { Image } from './Boardstyle'

type Articleprops = {
  title: string
  name: string
}

const Board: React.FC<Articleprops> = ({title, name}) => {
  const { Meta } = Card;
  const handleClick = () => {
    // <Detail name={"hyunseo"} postTitle={"hyunseo_5reason-to-use-graphql"} />
  }
  return (

        <Card
          style={{"width":"98%"}}
        >
          <Image src="https://static.wixstatic.com/media/72c0b2_b309efbc0d03462a985e8f1aaa1995af~mv2.png/v1/fill/w_1064,h_608,al_c,q_90/72c0b2_b309efbc0d03462a985e8f1aaa1995af~mv2.webp"></Image>
          <Meta title={title} description={name} />
        </Card>

  )
}

export default Board