import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";

import { RouteComponentProps } from "react-router-dom";

import Board from "../../Components/Board/Board";
import articleData from "../../Assets/articleData.json";
import { Row, Col } from "antd";
import { ReadMoreBtn } from "./style";

type Article = {
  author: string;
  title: string;
  image: string;
  filepath: string;
  category: string;
};

const articledata = Object.values(articleData);
let articleList: Article[] = [];

articledata.forEach(data => {
  articleList = [...articleList, ...data];
});

const Main: React.FC<RouteComponentProps> = ({
  location
}: RouteComponentProps) => {
  const page = location.pathname;

  ReactGA.set({ page });
  ReactGA.pageview(page);

  const [articlesForView, setArticlesForView] = useState();
  const [viewCount, setViewCount] = useState(12);
  const count = 12;

  const handleReadMore = () => {
    if (articleList.length > viewCount) {
      setViewCount(viewCount + count);
    }
  };

  useEffect(() => {
    const handleTag = (e: any) => {
      FilterArticle(e.target.innerHTML);
    };

    function FilterArticle(tag: string) {
      const filterArticleArr: any = [];
      articleList.map(data => {
        if (data["category"] === tag) {
          filterArticleArr.push(
            <Col key={data["title"]} span={8}>
              <Board data={data} handleTag={handleTag} />
            </Col>
          );
        }
      });
      setArticlesForView(filterArticleArr);
    }

    const makeArticlesForView = (count: number) => {
      let forRender: JSX.Element[];
      const slicedList = articleList.slice(0, count);
      forRender = slicedList.map((data: any) => {
        return (
          <Col key={data["title"]} span={8}>
            <Board data={data} handleTag={handleTag} />
            {/* <div style={{ margin: "20px" }} /> */}
          </Col>
        );
      });
      setArticlesForView(forRender);
    };

    makeArticlesForView(viewCount);
  }, [viewCount]);

  return (
    <div style={{ padding: "10px", backgroundColor: "white" }}>
      <Row
        style={{ paddingLeft: "17%", paddingRight: "17%", margin: "0px" }}
        gutter={[40, 40]}
      >
        {articlesForView}
      </Row>
      <div style={{ textAlign: "center" }}>
        <ReadMoreBtn onClick={handleReadMore}>read more</ReadMoreBtn>
      </div>
    </div>
  );
};

export default Main;
