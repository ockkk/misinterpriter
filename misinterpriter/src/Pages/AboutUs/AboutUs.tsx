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

import interpreters from "../../Assets/interpreters.json";

const AboutUs: React.FC = () => {
  const interpreterInfo: JSX.Element[] = interpreters.interpreters.map(el => {
    return (
      <GridItem key={el.name}>
        <UserImage src="https://scx1.b-cdn.net/csz/news/800/2019/tiger.jpg" />
        <DescList>
          <DescItem>
            <DescTitle>{el.name_kr}</DescTitle>
          </DescItem>
          <DescItem>
            <DescText>{el.email}</DescText>
          </DescItem>
          <DescItem>
            <DescText>{el.message}</DescText>
          </DescItem>
        </DescList>
      </GridItem>
    );
  });
  return <Grid>{interpreterInfo}</Grid>;
};

export default AboutUs;
