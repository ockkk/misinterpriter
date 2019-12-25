import React, { useState, useEffect } from "react";
import { StyledReactMarkdown, MainDiv, NaviBtn, BtnConatiner } from "./style";
import FootBar from "../../Components/Footbar/Footbar";

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
      <div
        style={{
          height: 130,
          backgroundColor: "rgba(0,0,0,0.9)",
          color: "white"
        }}
      >
        임시 Header
      </div>
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
