import React from "react";
import Disqus from "disqus-react";

type disqusData = {
  disqusShortname: string;
  disqusConfig: {
    url: string; // 블로그 페이지 url 입니다.
    identifier: string; // 디스커스 디스커션 식별에 사용되는 유니크 ID입니다. '1' 이런건 안되는 것 같더라구요. url 같은 것들을 사용해야 하나 봅니다.
    title: string; //  블로그 제목
  };
};

const Discussion: React.FC<disqusData> = props => {
  return (
    <div className="article-container">
      <Disqus.DiscussionEmbed
        shortname={props.disqusShortname}
        config={props.disqusConfig}
      />
    </div>
  );
};

export default Discussion;
