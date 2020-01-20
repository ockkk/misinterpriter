import React, { useState, useEffect } from 'react';
import Board from 'Components/Board/Board'
import articleData from '../../Assets/articleData.json'
import {Row, Col} from 'antd'

const Main: React.FC= () =>{
  var articledata = Object.entries(articleData)
  const articleList:any = []
  
  for(let i in articledata){
    for(let j=0; j < articledata[i][1].length; j++){
      articleList.push(articledata[i][1][j])
    }
  }
  
  let articleSlice: any = articleList.slice(0, 12);
  let articleComponent: any = articleSlice.map((data: any) => {
    return (
      <Col key={data["title"]} span={6}>
        <Board data={data} handleTag={handleTag} />
        <div style={{ margin: "20px" }} />
      </Col>
    );
  });

  const [articleArr, setarticleArr] = useState(articleComponent)
  const [length, setlength] = useState({"Preitems":0, "items":12})

  const CallArticle = () => {
    let temp: [JSX.Element];
    temp = articleSlice.map((data: any) => {
      return (
        <Col key={data["title"]} span={6}>
          <Board data={data} handleTag={handleTag} />
          <div style={{ margin: "20px" }} />
        </Col>
      );
    });
    articleComponent = [...articleComponent, ...temp];
    setarticleArr(articleComponent);
  }

  const handleReadMore = async() => {
    if (articleList.length > length.items) {
      setlength({ Preitems: length.items, items: length.items + 12 });
    }
  }

  function FilterArticle(tag:any){
    const filterArticleArr:any = []
    for(let i=0; i < articledata.length; i++){
      articledata[i][1].map(data => {
        if(data["category"] === tag){
          filterArticleArr.push(
            <Col key={data["title"]} span={6}>
              <Board data={data} handleTag={handleTag}/>
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

  useEffect(() => {
    if (length.items !== 12) {
      articleSlice = articleList.slice(length.Preitems, length.items);
      CallArticle();
    }
  }, [length]);

  return (
    <div style={{padding:"10px", backgroundColor:"#f4f5f8"}}>
      <Row style={{paddingLeft:"100px", paddingRight:"100px"}}>
          {articleArr}
      </Row>
      <button onClick={handleReadMore}>read more</button>
    </div>
  )
}

export default Main
