import React, { useState, useEffect } from "react";
import { StyledReactMarkdown, MainDiv, NaviBtn, BtnConatiner } from "./style";

type DetailProps = {
  name: string;
  postTitle: string;
};

export const Detail: React.FC<DetailProps> = props => {
  const [text, setText] = useState<string>("");
  useEffect(() => {
    async function getPosts() {
      const mdFile = await fetch(
        require(`Assets/${props.name}/${props.postTitle}.md`)
      );
      const Post = await mdFile.text();
      console.log(Post);
      setText(Post);
    }
    getPosts();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black"
      }}
    >
      <div style={{ height: 130, backgroundColor: "black" }}>Header</div>
      <MainDiv>
        <StyledReactMarkdown source={text}></StyledReactMarkdown>
        <div
          style={{
            position: "fixed",
            right: "5%",
            bottom: "45%"
          }}
        >
          <BtnConatiner>
            <div>
              <NaviBtn
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Top
              </NaviBtn>
            </div>
            <NaviBtn
              onClick={() => {
                window.scrollTo(0, 30000);
              }}
            >
              Bot
            </NaviBtn>
          </BtnConatiner>
        </div>
      </MainDiv>
    </div>
  );
};
