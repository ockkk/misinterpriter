import React, { useState, useEffect } from "react";
import { StyledReactMarkdown, MainDiv } from "./style";
import FootBar from "../../Components/Footbar/Footbar";
import { RemoteBtn } from "./RemoteBtn";
import Discussion from "Components/Discussion";
import { Avatar } from "antd";

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
  }, [null]);

  const Upper = props.match.params.name.toUpperCase();
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100%"
      }}
    >
      <div style={{ float: "left", width: "100%", paddingBottom: 20 }}>
        <Avatar size={64} icon="user" style={{ float: "left", width: "7%" }} />
        <div style={{ float: "left", width: "93%" }}>
          <div>{Upper}</div>
          <div>2020/00/00</div>
        </div>
      </div>
      <div></div>
      <MainDiv>
        <StyledReactMarkdown source={text}></StyledReactMarkdown>
        <RemoteBtn />
      </MainDiv>
      <div
        style={{
          width: "70%",
          marginLeft: "15%",
          marginRight: "15%",
          marginTop: "5%"
        }}
      >
        <Discussion
          disqusShortname="misinterpreters"
          disqusConfig={{
            url: `http://localhost:3000/${props.postTitle}`,
            identifier: `http://localhost:3000/${props.postTitle}`,
            title: `${props.postTitle}`
          }}
        />
      </div>
      <FootBar />
    </div>
  );
};
