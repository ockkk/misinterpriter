import sc from 'styled-components'
import { Button }from 'antd'

export const TitleText = sc.div`
  font-weight: 600px;
  font-size: 23px;
  font-family: Fjalla One;
  color: white;
`;

export const Box = sc.div`
  border: solid 2px #d9d9d9;
  height: 70px;
  padding: 15px;
  border-radius: 5px;
`
export const Logo = sc.div`
  height: 60px;
  position: relative;
  float: left;
  bottom: 25px;
  margin-bottom: ;
  font-size: 50px;
`

export const Line = sc.hr`
  margin: 0px;
  height: 5px;
  background-color: blue;
  position: relative;
  bottom: 15px; 
`
export const Btn = sc(Button)`
  margin-right: 10px;
  width: 100px;
  font-weight: bold;
`