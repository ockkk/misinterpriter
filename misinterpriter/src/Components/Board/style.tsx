import sc from 'styled-components'

export const Box = sc.div`
  background: #fff;
  border: 1px solid #eff0f4;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  &: hover{
    transform: scale(1.03);
    transition: transform 0.2s linear;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
  }
`

export const Image = sc.img`
  border-radius: 5px 5px 0px 0px;
  width: 100%;
  height: 250px;
`

export const Title = sc.div`
  background-color: white;
  width: 100%;
  height: 60px;
  padding: 10px;
  color: black;
`

export const Tagbox = sc.div`
width: 100%;
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

export const NameBox = sc.div`
  padding: 5px;
`

export const Name = sc.span`
  position: relative;
  top: 1px;
  border-radius: 0px 0px 5px 5px;
  width: 100%;
  height: 40px;
  color: black;
`

export const ProfileImg = sc.img`
  margin-left: 10px;
  margin-right: 7px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #9e9e9e82;
`