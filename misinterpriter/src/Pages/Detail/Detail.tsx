import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

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
      setText(Post);
    }
    getPosts();
  }, []);

  return (
    <div style={{ fontWeight: "bold", width: "70%" }}>
      <ReactMarkdown source={text}></ReactMarkdown>
    </div>
  );
};
