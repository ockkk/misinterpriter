import sc from 'styled-components'

export const Box = sc.div`
  border: solid 2px #d9d9d9;
  height: 90px;
  padding: 15px;
  border-radius: 5px;
`
export const Logo = sc.h1`
  position: relative;
  float: left;
  bottom: 20px;
  margin-bottom: ;
  font-size: 50px;
`

export const Line = sc.hr`
  height: 5px;
  background-color: blue;
  position: relative;
  bottom: 35px; 
`
export const Btn = sc.button`
  border: solid 1px;
  padding: 15px 40px;
  border-radius: 3px;
  margin-right: 10px;
`

// export const Btn2 = Button`
//   margin-right: 10px;
//   width: 100px;
//   height: 50px;
// `