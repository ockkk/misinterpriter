import styled from "styled-components";
import { Layout } from "antd";
const { Footer } = Layout;

export const FooterSpan = styled.span`
  float: left;
  width: 29%;
  margin: 2%;
`;

export const TitleText = styled.div`
  font-weight: 600px;
  font-size: 23px;
  font-family: Fjalla One;
  color: white;
`;

export const LinkText = styled.a`
  color: gray;
  float: right;
  width: 100%;
`;

export const Foot = styled(Footer)`
  color: white;
  padding-left: 15%;
  padding-right: 15%;
  margin-top: 5%;
`;
