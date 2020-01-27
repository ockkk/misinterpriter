import React from 'react'
import {Link} from 'react-router-dom'
import { Image, Title, Name, Tag, Tagbox, Box, ProfileImg, NameBox } from './style'
import { Detail } from '../../Pages/Detail/Detail'
import ujeon from "../../Assets/image/profile/ujeon.png"
import jongock from "../../Assets/image/profile/jongock.jpg"
import minhee from "../../Assets/image/profile/minhee.png"
import hyunseo from "../../Assets/image/profile/hyunseo.jpg"

type Articleprops = {
  data: object;
  handleTag: (e: any) => void;
};

const Board: React.FC<Articleprops> = ({data, handleTag}:any) => {
  const name = data["author"]
  const title = data["title"]
  const image = data["image"]
  const tag = data["category"]
  const filepath = data["filepath"]
  const profileArr:any = {"ujeon": ujeon, "jongock": jongock, "minhee": minhee, "hyunseo": hyunseo}
  let profile

  for(let i in profileArr){
    if(name === i){
      profile = profileArr[i]
      break
    }
  }
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
      <NameBox>
        <ProfileImg src={profile}/>
        <Name>{name}</Name>
      </NameBox>
    </Box>
  )
}

export default Board
