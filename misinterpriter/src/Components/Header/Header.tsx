import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from 'antd'
import { Box, Logo, Category, CategoryBox } from "./style";
import { device } from '../../display'

const Header: React.FC = () => {
  return (
    <Box
    type="flex" 
    justify="center"
    >
      <Col md={8} lg={8} xl={6}>
        <Link to="/">
          <Logo src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Flb7fJ%2FbtqBeT6jL5R%2FaOKG42vUgVzibusCH4z4L1%2Fimg.png" />
        </Link>
      </Col>
      <Col md={12} lg={12} xl={10}>
        <CategoryBox>
          <Link to="/">
            <Category>Article List</Category>
          </Link>
          {/* <Link to="feedback"> */}
          <Category
            onClick={() =>
              alert(
                "준비중 입니다🙂 feedback은\nmini150146@gmail.com\njongock.dev@gmail.com \nwj9304@gmail.com\nwjsdbtjs131313@gmail.com 으로 보내주세요"
              )
            }
          >
            Feedback
          </Category>
          {/* </Link> */}
          <Link to="member">
            <Category>Member</Category>
          </Link>
        </CategoryBox>
      </Col>
    </Box>
  );
};

export default Header;
