import sc from 'styled-components'

export const ReadMoreBtn = sc.button`
  width: 20%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #eff0f4;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  &: hover{
    transform: scale(1.1);
    transition: transform 0.2s linear;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
  }
`
