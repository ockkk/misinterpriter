import sc from 'styled-components'

export const Box = sc.div`
  background-color: #f4f5f8;
  height: 140px;
  padding-left: 100px;
  padding-right: 100px;
  position: sticky;
  z-index: 3;
  width: 100%;
  top: 0px;
`

export const Logo = sc.img`
  padding-left: 10px;
  padding-top: 20px;
  width: 450px;
`

export const Category = sc.span`
  color: gray;
  font-size: 30px;
  position: relative;
  left: 10px;
  font-weight: 700;
  margin-right: 30px;
  &: hover{
    color:black
  }
`