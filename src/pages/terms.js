import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import basePage from 'hoc/BasePage'
import Text from 'simple-components/Text'


const H2 = styled.h2`
    padding: 4rem;
    text-align: center;
    font-size: 3rem;
`

class Terms extends Component {
  render () {
    return (
      <Fragment>
        <H2> Terms of Use </H2>
        <Flex width={[ 3 / 4 ]} alignSelf='center' px={[0, 1, 2]}>
          <Box alignSelf='center'>
            <h3 style={{width: '60%'}}>Sub line voor wanneer nodig altijd handig</h3>
            <Text>
                Welkom bij SoundCloud®, een dienst van SoundCloud Limited ("SoundCloud", "wij", "onze "of "ons").
              <br />
              <br />
                De Gebruiksvoorwaarden regelen jouw gebruik van soundcloud.com en m.soundcloud.com (tezamen: de “Website”), onze mobiele en desktop-apps (onze "Apps") en alle daarmee verband houdende spelers, widgets, tools, features, applicaties, data, software, API’s (die weer kunnen vallen onder afzonderlijke API-Gebruiksvoorwaarden) en overige diensten die SoundCloud aanbiedt (de “Diensten”).
              <br />
              <br />
                Deze Gebruiksvoorwaarden, tezamen met onze Gemeenschapsrichtlijnen en overige voorwaarden waarnaar in een of meer van deze documenten specifiek wordt verwezen, die alle met een verwijzing zijn opgenomen in deze Gebruiksvoorwaarden, vormen een juridisch bindend contract (de "Overeenkomst") tussen jou en SoundCloud met betrekking tot jouw gebruik van de Website, Apps en Diensten (tezamen: het "Platform").
              <br />
              <br />
                Bestudeer voor de zekerheid ook ons Privacybeleid en Cookiebeleid voor meer informatie over hoe wij data verzamelen en gebruiken in verband met het gebruik en de functioneren van het Platform, alsmede voor onze verantwoordelijkheden en jouw rechten in verband met het verwerken van jouw persoonsgegevens.
              <br />
              <br />
                Deze Gebruiksvoorwaarden zijn bestaan uit de volgende paragrafen:
            </Text>
          </Box>
        </Flex>
      </Fragment>
    )
  }
}

export default basePage()(Terms)
