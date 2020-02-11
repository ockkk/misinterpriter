import React from "react";
import { Icon } from "antd";
import styled from "styled-components";
import interpreters from "../../Assets/interpreters.json";

export const CustomIcon = (props: any) => {
  const movePage = () => {
    const arr = interpreters["interpreters"];
    for (let i = 0; i < arr.length; i = i + 1) {
      if (props.name === arr[i].name.toUpperCase()) {
        if (props.thema === "github") {
          return "https://www.opentutorials.org/course/2418/13406";
        }
        if (props.thema === "home") {
          return "https://poiemaweb.com/css3-flexbox";
        }
      }
    }
  };
  return (
    <a href={movePage()}>
      <Icons
        style={{ fontSize: props.size, margin: "3%" }}
        type={props.thema}
      />
    </a>
  );
};
const Icons = styled(Icon)`
  &:hover {
    transform: scale(1.1);
  }
`;
