import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import { Box, Logo, Line, Btn } from './Headerstyle';

const Header: React.FC = () => {
  return <Box>
          <Logo>
            Misinterpriter
            <Line/>
          </Logo>
          <div style={{"float":"right" , "padding": "3px"}}>
            <Router>
              {/* <Link to="/"> */}
              <a href="http://localhost:3000/">
                <Btn size="large">
                  main
                </Btn>
              </a>
              {/* </Link> */}
              <Link to="member">
                <Btn size="large">
                  member
                </Btn>
              </Link>
              <Link to="project">
                <Btn size="large">
                  project
                </Btn>
              </Link>
            </Router>
          </div>
        </Box>
}

export default Header;