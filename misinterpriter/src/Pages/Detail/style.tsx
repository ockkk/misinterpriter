import "github-markdown-css/github-markdown.css";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Button } from "antd";

export const StyledReactMarkdown = styled(ReactMarkdown).attrs({
  className: "markdown-body"
})`
  padding-left: 7%;
  padding-right: 7%;
  min-width: 300;
  max-width: 100%;
  background-color: white;
`;

export const MainDiv = styled.div`
  margin-left: 17%;
  margin-right: 17%;
`;

export const NaviBtn = styled(Button)`
  width: 50px;
  height: 25px;
  font-size: 5px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border-radius: 35px;
  cursor: pointer;
  outline: none;
  margin: 1%;
`;

export const BtnConatiner = styled.div`
  background-color: black;
  width: 58px;
  height: 78px;
  text-align: center;
  border-radius: 10px;
  padding-top: 21%;
  border: 0.5px solid white;
`;
