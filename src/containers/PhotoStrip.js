import react from 'react'
import styled from 'styled-components'
import ProfilePhoto from 'simple-components/ProfilePhoto'

const DevName = styled.span`
  display: flex;
  justify-content: space-between;
  color: #fff;
`
const PhotoStrip = ({ props }) => {
  return (
    <ProfilePhoto src={props.src} >
      <div>
        <a href={props.link}>
          <DevName>
            { props.name } <label>&#10140;</label>
          </DevName>
          <span className='title'> { props.title }</span>
        </a>
      </div>
    </ProfilePhoto>
  )
}

export default PhotoStrip
