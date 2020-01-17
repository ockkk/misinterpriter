import React, { useState, useEffect } from 'react';
import Board from 'Components/Board/Board'
import articleData from '../../Assets/articleData.json'
import {Row, Col, Tag} from 'antd'
import {Title} from './style'

const Main: React.FC= () =>{
  var articledata = Object.entries(articleData)
  const articleComponent:any = []
  const TagName:Array<string> = []
  const [articleArr, setarticleArr] = useState(articleComponent)

  articledata.map((data) => {
    for(let i= 0; i< data[1].length; i++){
      articleComponent.push(
        <Col key={data[1][i]["title"]} span={6}>
            <Board data={data[1][i]} handleTag={handleTag}/>
          <div style={{"margin":"20px"}}/>
        </Col>
        )
      if(!TagName.includes(data[1][i]["category"])){
        TagName.push(data[1][i]["category"])
      }
    }
  })

  function FilterArticle(tag:any){
    const filterArticleArr:any = []
    for(let i=0; i < articledata.length; i++){
      articledata[i][1].map(data => {
        if(data["category"] === tag){
          filterArticleArr.push(
            <Col key={data["title"]} span={5}>
              <Board data={data} handleTag={handleTag}/>
              {/* <div style={{"margin":"20px"}}/> */}
            </Col>
          )
        }
      })
    }
    setarticleArr(filterArticleArr)
  }

  function handleTag(e:any){
    FilterArticle(e.target.innerHTML)
  }

  useEffect( () => {
    articledata.map((data) => {
      for(let i= 0; i< data[1].length; i++){
        articleComponent.push(
          <Col key={data[1][i]["title"]} span={6}>
              <Board data={data[1][i]} handleTag={handleTag}/>
          </Col>
          )
        if(!TagName.includes(data[1][i]["category"])){
          TagName.push(data[1][i]["category"])
        }
      }
    })
  },[])
  return (
    <div style={{padding:"10px", backgroundColor:"#f4f5f8"}}>
      <Row style={{paddingLeft:"100px", paddingRight:"100px"}}>
          {articleArr}
      </Row>
      <button onClick={FilterArticle}>read more</button>
    </div>
  )
}

export default Main
