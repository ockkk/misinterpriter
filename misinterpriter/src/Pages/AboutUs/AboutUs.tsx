import React from "react";

import {
  SectionMember,
  Title,
  Grid,
  GridItem,
  UserImage,
  DescList,
  DescItem,
  DescTitle,
  DescText
} from "./AboutUsStyle";

import interpreters from "../../Assets/interpreters.json";

type Image = {
  [ujeon: string]: string;
  minhee: string;
  hyunseo: string;
  jongock: string;
};

const profileImage: Image = {
  ujeon: require("../../Assets/image/profile/ujeon.png"),
  minhee: require("../../Assets/image/profile/minhee.png"),
  hyunseo: require("../../Assets/image/profile/hyunseo.jpg"),
  jongock: require("../../Assets/image/profile/jongock.jpg")
};

const AboutUs: React.FC = () => {
  const interpreterInfo: JSX.Element[] = interpreters.interpreters.map(el => {
    return (
      <GridItem key={el.name}>
        <UserImage src={profileImage[el.name]} alt={el.name} />
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
  return (
    <SectionMember>
      <Grid>{interpreterInfo}</Grid>
    </SectionMember>
  );
};

export default AboutUs;
