import React, { useState, useEffect } from "react";
import { StyledReactMarkdown, MainDiv } from "./style";
import FootBar from "../../Components/Footbar/Footbar";
import { RemoteBtn } from "./RemoteBtn";
import Discussion from "Components/Discussion";
import { DeatailTitle } from "./DeatailTitle";

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

      setText(Post);
    }
    getPosts();
  }, [props.match.params.name, props.match.params.title]);

  const Upper = props.match.params.name.toUpperCase();
  // console.log(Upper);
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100%"
      }}
    >
      <MainDiv>
        <div style={{
          padding: "20px",
          height: "230px",
          width: "100%",
          paddingLeft: "7%",
          paddingRight: "7%",
          marginBottom: "20px"
        }}>
          <div
            style={{
              fontWeight: 900,
              fontSize: 40,
              fontFamily: "Fjalla One",
              textAlign: "left",
              color: "black"
            }}
          >
            {text.split("\n")[0].replace("#", "")}
          </div>
          <DeatailTitle name={Upper} />
        </div>
        <StyledReactMarkdown source={text.split("\n").slice(2).join("\n")}></StyledReactMarkdown>
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
