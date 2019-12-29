import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Board from 'Components/Board'
import articleData from '../Assets/articleData.json'
import {Row, Col} from 'antd'
import {ColBox, TagBox} from './Mainstyle'

const Main: React.FC= () =>{
  var articleArr = Object.entries(articleData)
  const articleComponent:any = []

  // const [articleArr, setarticleArr] = useState(Object.entries(articleData))

  articleArr.map((data) => {
    for(let i= 0; i< data[1].length; i++){
      articleComponent.push(
        <Col key={data[1][i]} span={6}>
          <Link to={`/${data[0]}/${data[1][i]}`}>
            <Board data={data[1][i]}/>
          </Link>
          <div style={{"margin":"10px"}}/>
        </Col>
        )
    }
  })

  useEffect(()=> {
    // articleArr.map((data) => {
    //   for(let i= 0; i< data[1].length; i++){
    //     articleComponent.push(
    //       <Col span={6}>
    //         <Link to={`/${data[0] + data[1][i]}`}>
    //         <Board name={data[0]} title={data[1][i]}/>
    //         </Link>
    //         <div style={{"margin":"10px"}}/>
    //       </Col>
    //       )
    //   }
    // })
  })

  return (
    <div style={{padding:"10px"}}>
      <Row>
        <Col span={6}>
          <ColBox>
            <TagBox></TagBox>
          </ColBox>
        </Col>
        {articleComponent}
      </Row>
    </div>
  )
}

export default Main