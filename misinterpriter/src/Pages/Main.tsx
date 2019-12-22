import React from 'react';
import Board from 'Components/Board'
import articleData from '../Assets/articleData.json'
import {Row, Col} from 'antd'

const Main: React.FC= () =>{
  var articleArr = Object.entries(articleData)
  const articleComponent:any = []

  articleArr.map((data) => {
    for(let i= 0; i< data[1].length; i++){
      articleComponent.push(
        <Col span={8}>
          <Board name={data[0]} title={data[1][i]}/>
        </Col>
        )
    }
  })

  return (
    <div style={{padding:"10px"}}>
      <Row gutter={16}>
        {articleComponent}
      </Row>
    </div>
  )
}

export default Main