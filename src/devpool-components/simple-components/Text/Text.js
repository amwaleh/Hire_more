import styled from 'styled-components'

const Text = styled.div`
/*height: 14px;*/
/* max-width: 600px; */
/* font-family: Karla,helvetica; */
/* font-weight: normal; */
/* font-style: normal; */
/* font-stretch: normal; */
/* line-height: normal; */
/* letter-spacing: normal; */
max-width: ${props => props.maxWidth || '457px'};
font-size: ${props => props.size || '16px'};
color: #7f7f7f;
text-align: ${props => props.align || 'left'};
color: ${props => props.color || '#7f7f7f'};
line-height: 25px;

`

export default Text
