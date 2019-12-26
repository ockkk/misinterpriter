import React from 'react'
import { Card } from 'antd';
import { Image } from './Boardstyle'
import { Detail } from '../Pages/Detail/Detail'
import { Match } from '@testing-library/dom';

type Articleprops = {
  data: string;
}

const Board: React.FC<Articleprops> = ({data}) => {
  const { Meta } = Card;
  const name = data.split("_")[0]
  const title = data.split("_")[1]

  const handleClick = () => {
    return <Detail/>
  }
  return (

        <Card
          onClick={() => handleClick()}
          style={{"width":"98%"}}
        >
          <Image src="https://static.wixstatic.com/media/72c0b2_b309efbc0d03462a985e8f1aaa1995af~mv2.png/v1/fill/w_1064,h_608,al_c,q_90/72c0b2_b309efbc0d03462a985e8f1aaa1995af~mv2.webp"></Image>
          <Meta title={title} description={name} />
        </Card>

  )
}

export default Board