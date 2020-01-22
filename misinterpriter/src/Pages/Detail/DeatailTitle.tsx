import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import { CustomIcon } from "./CustomIcon";
import interpreters from "../../Assets/interpreters.json";
import ujeon from "../../Assets/image/profile/ujeon.png"
import jongock from "../../Assets/image/profile/jongock.jpg"
import minhee from "../../Assets/image/profile/minhee.png"
import hyunseo from "../../Assets/image/profile/hyunseo.jpg"

export const DeatailTitle = (props: any) => {
  const profileArr:any = {"UJEON": ujeon, "JONOCK": jongock, "MINHEE": minhee, "HYUNSEO": hyunseo}

  let profile
  for(let i in profileArr){
    if(props.name === i){
      profile = profileArr[i]
      break
    }
  }

  // const showImg:any = () => {
  //   const arr = interpreters["interpreters"];
  //   for (let i = 0; i < arr.length; i = i + 1) {
  //     if (props.name === arr[i].name.toUpperCase()) {
  //       image = arr[i]["image"];
  //     }
  //   }
  // };


  return (
    <MainBox>
      <span>
        {/* {showImg.length!==0 ? : } */}
        <Avatar
          size={50}
          icon="user"
          src={profile}
          style={{ float: "left", width: 50 }}
        />
        <TextBox>
          <div>{props.name}</div>
          <div>2020/00/00</div>
        </TextBox>
      </span>
      <span
        style={{
          position: "relative",
          float: "right",
          width: "10%",
          paddingTop: "2%"
        }}
      >
        <CustomIcon size={27} thema="github" name={props.name} />
        <CustomIcon size={27} thema="home" name={props.name} />
      </span>
    </MainBox>
  );
};

const MainBox = styled.div`
  margin-top: 10px;
  height: 32%;
  border-bottom: solid 2px gray;
`;

const TextBox = styled.span`
  float: left;
  padding-top: 4px;
  padding-left: 2%;
  font-weight: 900;
`;
