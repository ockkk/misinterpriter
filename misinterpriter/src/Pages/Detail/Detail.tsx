import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";
import styled from "styled-components";

const StyledReactMarkdown = styled(ReactMarkdown).attrs({
  className: "markdown-body"
})`
  padding: 5px;
  min-width: 300;
  max-width: 100%;
`;

export const Detail: React.FC = () => {
  const name = "hyunseo";
  const postNum = 1;

  const [text, setText] = useState<string>("");
  useEffect(() => {
    async function getPosts() {
      const mdFile = await fetch(
        require(`Assets/hyunseo/${name}${postNum}.md`)
      );
      const Post = await mdFile.text();
      console.log(Post);
      setText(Post);
    }
    getPosts();
  }, []);

  return (
    <div style={{ fontWeight: "bold", width: "60%" }}>
      <StyledReactMarkdown source={text}></StyledReactMarkdown>
    </div>
  );
};
