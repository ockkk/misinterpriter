import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import { Box, Logo, Btn } from './style';

const Header: React.FC = () => {
  return <Box>
          <a href="http://localhost:3000/">
            <Logo src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdCLd9f%2FbtqBcL2scTA%2FQYjRUXA9lu4XuwSmm2S8AK%2Fimg.png"/>
          </a>
          <div style={{"float":"right"}}>
            <Router>
              <Link to="member">
                <Btn size="large">
                  member
                </Btn>
              </Link>
            </Router>
          </div>
        </Box>
}

export default Header;