import sc from 'styled-components'

export const Box = sc.div`
  height: 75px;
  padding-top: 10px;
  background-color: white;
  padding-left: 16%;
  padding-right: 16%;
  position: sticky;
  z-index: 3;
  width: 100%;
  top: 0px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
`

export const Logo = sc.img`
  padding-left: 10px;
  padding-top: 20px;
  width: 250px;
`

export const CategoryBox = sc.span`
  position: relative;
  float: right;
  top: 23px;
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