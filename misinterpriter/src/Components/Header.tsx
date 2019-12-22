import React from 'react';
import { Button }from 'antd'
import { Box, Logo, Line, Btn } from './Headerstyle'

const Header: React.FC = () => {
  return <Box>
          <Logo>
            Misinterpriter
            <Line/>
          </Logo>
          <div style={{"float":"right" , "padding": "6px"}}>
            <Button size="large">
              main
            </Button>
            <Button size="large">
              member
            </Button>
            <Button size="large">
              project
            </Button>
          </div>
        </Box>
}

export default Header;