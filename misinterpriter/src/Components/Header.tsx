import React from 'react';
import sc from 'styled-components'
import { Button }from 'antd'

const Header: React.FC = () => {
  const Box = sc.div`
    border: solid 1px silver;
    height: 51px;
    padding: 15px;
    border-radius: 5px;
  `
  const Logo = sc.h1`
    width: 200px;
    float: left;
    bottom: 18px;
    position: relative;
  `;

  const Line = sc.hr`
    height: 5px;
    background-color: blue;
    position: relative;
    bottom: 17px;
  `
  const Btn = sc.button`
    border: solid 1px;
    padding: 15px 40px;
    border-radius: 3px;
    margin-right: 10px;
  `
  return <Box>
          <Logo>
            Misinterpriter
            <Line/>
          </Logo>
          <span style={{"float":"right"}}>
            <Btn>
              main
            </Btn>
            <Btn>
              member
            </Btn>
            <Button>
              project
            </Button>
          </span>
        </Box>
}

export default Header;