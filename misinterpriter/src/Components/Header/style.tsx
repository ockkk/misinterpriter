import sc from 'styled-components'
import { Button }from 'antd'

export const Box = sc.div`
  height: 70px;
  padding: 15px;
  padding-left: 70px;
  padding-right: 100px;
`
export const Logo = sc.img`
  position: relative;
  width: 350px;
  bottom: 14px;
`

export const Btn = sc(Button)`
  color: black;
  border: solid 1px;
`