import React from "react";

import { FooterSpan, TitleText, LinkText, Foot } from "./style";

const Footbar: React.FC = () => {
  return (
    <Foot
      style={{
        background: "rgba(0,0,0,0.9)"
      }}
    >
      <div>
        <FooterSpan>
          <TitleText>Who We Are</TitleText>
          <div>
            <LinkText href="https://tacocat.tistory.com/">tacocat</LinkText>

            <LinkText href="https://analogcoding.tistory.com/">
              hyunseo0419
            </LinkText>
            <LinkText href="ujeon.github.io/portfolio">ujeon</LinkText>
            <LinkText href="ock-nomad.tistory.com">ockkk</LinkText>
          </div>
        </FooterSpan>

        <FooterSpan>
          <TitleText>Topic Of Posting</TitleText>
          <div style={{ color: "gray" }}>
            100% 공정하게 각자 자기가 하고싶은 글을 번역하여 주 1회 서로
            공유합니다.
          </div>
        </FooterSpan>

        <FooterSpan>
          <TitleText>Become a Member</TitleText>
          <div style={{ color: "gray" }}>
            조만간 스터디 멤버를 추가 모집할 예정입니다! 영어를 못해도 개발을
            좋아하시는 분이라면 환영합니다.{"\n"}
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNwfZzlwjQlGnjWnfHxlCtxgKbJVKGPPXZvFFdqBFxdjRCdlGKKTwcVNGLzrFppWtRGCqB"
              style={{ color: "gray", textDecoration: "underline" }}
            >
              여기
            </a>
            로 메일 남겨주세요!
          </div>
        </FooterSpan>
      </div>

      <div style={{ margin: 5, color: "rgba(0,0,0,0.0)" }}>
        오역과 오타는 너그럽게
      </div>
      <div
        style={{ borderTop: "solid 1px white", margin: 5, paddingBottom: 30 }}
      >
        <div style={{ marginBottom: 30 }} />
        <TitleText>
          Misinterpr
          <span style={{ textDecorationLine: "line-through", color: "red" }}>
            i
          </span>
          ters
        </TitleText>
        <span style={{ float: "right", color: "gray" }}>
          #영어를 #잘하는 건 아니지만 #포기하지 않을꺼야
        </span>
      </div>
    </Foot>
  );
};

export default Footbar;
