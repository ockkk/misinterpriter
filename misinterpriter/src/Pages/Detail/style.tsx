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
  width: 100%;
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
  margin-bottom: 4px;
`;

export const BtnConatiner = styled.div`
  width: 100%;
  height: 80px;
  text-align: center;
  border-radius: 10px;
`;

export const TopDiv = styled.div`
  &:after {
    display: block;
    height: 2px;
    background-color: #e67e22;
    content: " ";
    width: 100px;
    margin: 0 auto;
    margin-top: 30px;
  }
`;
