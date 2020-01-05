import React from "react";

import {
  Grid,
  GridItem,
  UserImage,
  DescList,
  DescItem,
  DescTitle,
  DescSubTitle,
  DescText
} from "./AboutUsStyle";

const AboutUs: React.FC = () => {
  return (
    <Grid>
      <GridItem>
        <UserImage src="https://scx1.b-cdn.net/csz/news/800/2019/tiger.jpg" />
        <DescList>
          <DescItem>
            <DescTitle>김민희</DescTitle>
          </DescItem>
          <DescItem>
            <DescText>misinterpreter@abc.com</DescText>
          </DescItem>
          <DescItem>
            <DescText>여기다가는 뭘 넣어야 하지?</DescText>
          </DescItem>
        </DescList>
      </GridItem>

      <GridItem>
        <UserImage src="https://scx1.b-cdn.net/csz/news/800/2019/tiger.jpg" />
        <DescList>
          <DescItem>
            <DescTitle>이현서</DescTitle>
          </DescItem>
          <DescItem>
            <DescText>misinterpreter@abc.com</DescText>
          </DescItem>
          <DescItem>
            <DescText>장우전</DescText>
          </DescItem>
        </DescList>
      </GridItem>

      <GridItem>
        <UserImage src="https://scx1.b-cdn.net/csz/news/800/2019/tiger.jpg" />
        <DescList>
          <DescItem>
            <DescTitle>장우전</DescTitle>
          </DescItem>
          <DescItem>
            <DescText>misinterpreter@abc.com</DescText>
          </DescItem>
          <DescItem>
            <DescText>장우전</DescText>
          </DescItem>
        </DescList>
      </GridItem>

      <GridItem>
        <UserImage src="https://scx1.b-cdn.net/csz/news/800/2019/tiger.jpg" />
        <DescList>
          <DescItem>
            <DescTitle>황종옥</DescTitle>
          </DescItem>
          <DescItem>
            <DescText>misinterpreter@abc.com</DescText>
          </DescItem>
          <DescItem>
            <DescText>장우전</DescText>
          </DescItem>
        </DescList>
      </GridItem>
    </Grid>
  );
};

export default AboutUs;
