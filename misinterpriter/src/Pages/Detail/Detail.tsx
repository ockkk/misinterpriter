import React, { useState, useEffect } from "react";
import { StyledReactMarkdown, MainDiv } from "./style";
import FootBar from "../../Components/Footbar/Footbar";
import Discussion from "../../Components/Discussion";
import { RemoteBtn } from "./RemoteBtn";
import { Avatar } from "antd";

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
      <div>
        <Avatar />
      </div>
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
