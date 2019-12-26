import React, { useState, useEffect } from "react";
import { RouteComponentProps } from 'react-router-dom'
import { StyledReactMarkdown, MainDiv, NaviBtn, BtnConatiner } from "./style";
import FootBar from "../../Components/Footbar/Footbar";
import { Match } from "@testing-library/dom";

// interface match<P> {
//   params:P;
//   isExact: boolean;
//   path: string;
//   url: string;
// };

export const Detail: React.FC = (props: any) => {
  const [text, setText] = useState<string>("");
  useEffect(() => {
    async function getPosts() {
      const mdFile = await fetch(
        require(`Assets/${props.match.params.name}/${props.match.params.title}`)
      );
      const Post = await mdFile.text();
      console.log(Post);
      setText(Post);
    }
    getPosts();
  }, [props.name, props.postTitle]);

  const scrollBtn = (position: number) => {
    window.scrollTo(0, position);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100%"
      }}
    >
      <MainDiv>
        <StyledReactMarkdown source={text}></StyledReactMarkdown>
        <div
          style={{
            position: "fixed",
            right: "6.5%",
            bottom: "45%"
          }}
        >
          <BtnConatiner>
            <div>
              <NaviBtn
                onClick={() => {
                  scrollBtn(0);
                }}
              >
                Top
              </NaviBtn>
            </div>
            <NaviBtn
              onClick={() => {
                scrollBtn(30000);
              }}
            >
              Bot
            </NaviBtn>
          </BtnConatiner>
        </div>
      </MainDiv>
      <FootBar />
    </div>
  );
};
