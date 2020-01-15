import sc from 'styled-components'

export const Image = sc.img`
  border-radius: 4px 4px 0px 0px;
  width: 95%;
  height: 250px;
`

export const Title = sc.div`
  background-color: white;
  width: 95%;
  height: 60px;
  padding: 10px;
  color: black;
`

export const Tagbox = sc.div`
width: 95%;
background-color: white;
height: 30px;
text-align: end;
border-bottom: solid 1px #f4f7f6;
padding-right: 10px;
`

export const Tag = sc.span`
text-decoration: underline;
color: gray;
cursor: pointer;
font-size: smaller;
`

export const Name = sc.div`
  border-radius: 0px 0px 4px 4px;
  background-color: white;
  width: 95%;
  height: 40px;
  padding: 8px;
  padding-left: 10px;
  color: black;
`