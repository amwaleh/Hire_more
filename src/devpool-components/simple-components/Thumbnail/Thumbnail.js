import React from 'react'
import styled, { css } from 'styled-components'
import { textAlign, space, zIndex, width } from 'styled-system'

const ThumbnailContainer = styled.div`
    display: block;
    background-image: url(${props => props.image || 'https://mdn.mozillademos.org/files/11991/startransparent.gif'});
    background-color: transparent;
    width: ${props => props.width || '200px'};
    height: ${props => props.width || '200px'};
    border-radius: 0.25rem !important;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
`

const ThumbnailContent = styled.div`
    ${props => props.content && css`
        cursor: pointer;
        &:hover,
        &focus {
            background: rgb(0, 0, 0, 0, 0.5);
        };
    `}
`

class Thumbnail extends React.PureComponent {
    render () {
        // return <ThumbnailContainer />
    };
};

export default Thumbnail
