import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import { Box, Logo, Category, CategoryBox } from './style';

const Header: React.FC = () => {
  return <Box>
          <a href="http://misinterpriter.com">
            <Logo src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Flb7fJ%2FbtqBeT6jL5R%2FaOKG42vUgVzibusCH4z4L1%2Fimg.png"/>
          </a>
          <Router>
            <CategoryBox>
              <a href="http://misinterpriter.com"> 
                <Category>
                  Article List
                </Category>
              </a>
              {/* <Link to="feedback"> */}
                <Category onClick={()=> alert("준비중 입니다🙂 feedback은 \njongokhwang@gmail.com\nwj9304@gmail.com\nwjsdbtjs131313@gmail.com 으로 보내주세요")}>
                  Feedback
                </Category>
              {/* </Link> */}
              <Link to="member">
                <Category>
                  Member
                </Category>
              </Link>
            </CategoryBox>
          </Router>
        </Box>
}

export default Header;