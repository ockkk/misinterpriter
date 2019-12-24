import React from 'react';
import { Box, Logo, Line, Btn } from './Headerstyle'

const Header: React.FC = () => {

  return <Box>
          <Logo>
            Misinterpriter
            <Line/>
          </Logo>
          <div style={{"float":"right" , "padding": "3px"}}>
            <Btn size="large">
              main
            </Btn>
            <Btn size="large">
              member
            </Btn>
            <Btn size="large">
              project
            </Btn>
          </div>
        </Box>
}

export default Header;