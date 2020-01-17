import React from 'react'
import {Link} from 'react-router-dom'
import { Image, Title, Name, Tag, Tagbox, Box } from './style'
import { Detail } from '../../Pages/Detail/Detail'


type Articleprops = {
  data: object;
  handleTag: any;
};

const Board: React.FC<Articleprops> = ({data, handleTag}:any) => {
  const name = data["author"]
  const title = data["title"]
  const image = data["image"]
  const tag = data["category"]
  const filepath = data["filepath"]

  const handleClick = () => {
    return <Detail/>
  }

  return (
    <Box>
      <Link to={`/${name}/${filepath}`}>
      <Image src={image} onClick={()=> handleClick()}></Image>
      <Title>
        {title}
      </Title>
      </Link>
      <Tagbox>
        <Tag onClick={handleTag}>{tag}</Tag>
      </Tagbox>
      <Name>{name}</Name>
    </Box>
  )
}

export default Board
