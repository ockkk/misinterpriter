import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import { Box, Logo, Category } from './style';

const Header: React.FC = () => {
  return <Box>
          <a href="http://localhost:3000/">
            <Logo src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Flb7fJ%2FbtqBeT6jL5R%2FaOKG42vUgVzibusCH4z4L1%2Fimg.png"/>
          </a>
          <Router>
            <div style={{"paddingTop": "10px"}}>
              <a href="http://localhost:3000/"> 
                <Category>
                  Article List
                </Category>
              </a>
              {/* <Link to="feedback"> */}
                <Category onClick={()=> alert("준비중 입니다🙂")}>
                  Feedback
                </Category>
              {/* </Link> */}
              <Link to="member">
                <Category>
                  Member
                </Category>
              </Link>
            </div>
          </Router>
        </Box>
}

export default Header;