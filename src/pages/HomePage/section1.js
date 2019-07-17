import { Component } from 'react'
import Button from 'devpool-components/simple-components/Button'
import Link from 'next/link'
import styled from 'styled-components'
import Title from 'simple-components/Title'
import Section from 'components/Section'
import LinearGradient from 'simple-components/LinearGradient'
import PhotoStrip from 'containers/PhotoStrip'
import Article from 'simple-components/Article'
import { Grid } from 'semantic-ui-react'
const developers = [
  {
    name: 'simon says',
    title: 'Snr. Software Developer - React Native',
    src: '../../static/images/profilepic-1.jpg',
  },
  {
    name: 'manly paul',
    title: 'snr. Software Developer - PHP',
    src: '../../static/images/profilepic-2.jpg',
  },
  {
    name: 'sadi sudi',
    title: 'Snr.  Software Developer - React',
    src: '../../static/images/profilepic-4.jpg',
  },
  {
    name: 'karuiki paul',
    title: 'snr. Software Developer - PHP',
    src: '../../static/images/profilepic-3.jpg',
  },
]

const SubTitle = styled.h2`
  font-family: Manrope, helvetica;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.8px;
  text-align: left;
  color: #039BE5;
  margin-top: 0px;
`

const ActionButtons = styled.div`
  padding: 24px 0 0 0;
`

const DevPictures = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 34px 2px 0 2px;
`

const LearnMore = styled.a`
  margin-left: 40px;
`

const tintColor = [
  {
    color: 'rgba(255, 255, 255, 1)',
    spread: '50%',
  },

  {
    color: 'rgba(0, 255, 212, 0.42)',
    spread: '10%',
  },
]

class IntroSection extends Component {
  render () {
    return (
      <div>
        <Section image='https://picsum.photos/500?image=77' ml='4rem'>
          <LinearGradient rotate={134} tint={tintColor}>
            <div style={{ height: '500px', paddingTop: '150px' }}>
              <Title>Expand your scope.</Title>
              <SubTitle>Hire Spark developers</SubTitle>
              <Article width={[1, 400, 500]}>
                Spark developers empower you to scalably grow into
                highly-skilled, motivated software team.
                <br />
                we do so , by contributing to the long-term,
                sustainable growth trajectory of your core business mission.
                <ActionButtons>
                  <Link href='/explore-developers'>
                    <Button bg='orange' color='white'>
                      Explore Developers
                    </Button>
                  </Link>
                  <LearnMore>
                    Learn More <span> &#8595;</span>
                  </LearnMore>
                </ActionButtons>
              </Article>
            </div>
            <Grid stacked='true' centered columns={4}>
              <Grid.Row style={{ paddingTop: '100px', width: '100%' }}>
                <Grid.Column className='three wide column' only='computer' />
                {developers.map((dev, key) => (
                  <PhotoStrip key={key} props={dev} />
                ))}
              </Grid.Row>
            </Grid>
          </LinearGradient>
        </Section>
        <Section />
      </div>
    )
  }
}

export default IntroSection
