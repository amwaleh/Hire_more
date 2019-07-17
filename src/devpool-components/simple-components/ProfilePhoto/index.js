import styled from 'styled-components'
import {Grid} from 'semantic-ui-react'
const ProfilePhoto = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin-left: 4px;
  width: 100%;
  height: 180px;
  max-width: 180px;
  min-width: 64px;
  min-height: 64px;
  background-color: #cfcfcf;
  display: flex;
  align-items: flex-end;
  :hover {
    transition-timing-function: linear;
    transition: 0.3s;
    transform: translateY(-20%);
    margin: 0 5px;
    div {
      display: flex;
      flex-flow: column;
      background-color: #000;
      width: 180px;
      height: 60px;
      opacity: 0.75;
      color: #fff;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.2px;
      text-align: left;
      color: #ffffff;
      cursor: pointer;
      padding: 10px;
    }
  }
  span {
    width: 100%;
  }
  div {
    display: None;
    span.title {
      width: 100%;
      opacity: 0.6;
      font-size: 14px;
      font-weight: normal;
      text-align: left;
      color: #ffffff;
    }
  }
`

export default ProfilePhoto
