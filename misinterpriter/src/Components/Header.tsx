import React from 'react';
import sc from 'styled-components'
import { PageHeader, Button }from 'antd'

const Header: React.FC = () => {
  const Box = sc.div`
    border: solid 1px silver;
    height: 80px;
    padding: 20px;
    border-radius: 5px;
  `
  const Logo = sc.h1`
    font-size: 40px;
    width: 235px;
    float: left;
    bottom: 16px;
    position: relative;
  `;

  const Line = sc.hr`
    height: 5px;
    background-color: blue;
    position: relative;
    bottom: 27px;
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
            <Button size="large">
              main
            </Button>
            <Button  size="large">
              member
            </Button>
            <Button  size="large">
              project
            </Button>
          </span>
        </Box>
}

export default Header;