import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import { CustomIcon } from "./CustomIcon";
// import interpreters from "../../Assets/interpreters.json";

export const DeatailTitle = (props: any) => {
  //   const showImg = () => {
  //     const arr = interpreters["interpreters"];
  //     for (let i = 0; i < arr.length; i = i + 1) {
  //       if (props.name === arr[i].name.toUpperCase()) {
  //         return arr[i]["image"];
  //       }
  //     }
  //   };

  return (
    <MainBox>
      <div
        style={{
          float: "left",
          width: "50%"
        }}
      >
        {/* {showImg.length!==0 ? : } */}
        <Avatar
          size={64}
          icon="user"
          //   src={showImg}
          style={{ float: "left", width: 64 }}
        />

        <TextBox>
          <div>{props.name}</div>
          <div>2020/00/00</div>
        </TextBox>
      </div>
      <div
        style={{
          float: "left",
          width: "50%",
          paddingTop: "2.5%"
        }}
      >
        <CustomIcon size={27} thema="github" name={props.name} />
        <CustomIcon size={27} thema="home" name={props.name} />
      </div>
    </MainBox>
  );
};

const MainBox = styled.div`
  float: left;
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 4%;
  margin-bottom: 4%;
  padding-left: 15%;
`;

const TextBox = styled.div`
  float: left;
  padding-top: 8px;
  padding-bottom: 5px;
  padding-left: 5%;
`;
