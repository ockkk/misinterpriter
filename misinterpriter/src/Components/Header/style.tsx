import sc from 'styled-components'
import {Row,Col} from 'antd'

export const Box = sc(Row)`
  height: 75px;
  padding-top: 10px;
  background-color: white;
  position: sticky;
  z-index: 3;
  width: 100%;
  top: 0px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
  @media only screen and (max-width: 631px) {
    height: 100px
    padding-top: 0px;
    margin-bottom: 10px;
  }
`

export const Logo = sc.img`
  padding-left: 10px;
  padding-top: 20px;
  width: 250px;
`

export const CategoryBox = sc(Row)`
  position: relative;
  float: right;
  top: 23px;
  &: after {
    content: "";
    clear: both;
    display: table;
  }
  @media only screen and (max-width: 767px) {
    margin-left: 20px;
  }
  @media only screen and (max-width: 631px) {
    top:0px
  }
`
export const Category = sc.span`
  color: gray;
  font-size: 20px;
  position: relative;
  left: 10px;
  font-weight: 700;
  margin-right: 30px;
  &: hover{
    color:black
  }
`
