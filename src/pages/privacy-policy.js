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

const H3 = styled.h3`
    width: 70%;
`

const ContentText = Text.extend`
    padding: 0.2rem 0 3rem 0;
`

class PrivacyPolicy extends Component {
  render () {
    return (
      <Fragment>
        <H2> Cookies and Privacy Policy </H2>
        <Flex flexDirection='column' width={[ 3 / 4 ]} alignSelf='center'>
          <Box alignSelf='center'>
            <H3>1. Introduction</H3>
            <ContentText maxWidth='max-content'>
                At Spark developers we take Users’ privacy seriously. Our aim is to only collect and use your personal data for the purpose of providing the Spark developers Products – nothing more.
              <br />
              <br />
                Spark developers is a global company. Spark recruits and employs senior software developers and seconds the developers to companies. The secondment is done on a remote basis.
                This Policy is drafted with reference to the EU General Data Protection Regulation (from 25th May 2018) (the “Data Protection Legislation”).
                Spark developers believes that compliance with the data protection principles outlined in the Data Protection Legislation creates a strong framework to ensure that individuals’
                personal data is secured, protected and used appropriately.
              <br />
              <br />
                This Policy addresses how Spark developers uses, transfers and stores the personal data we collect about individuals (“Users”) when they access our website (the “Site”) or use any of our services
                or products (collectively, the “Spark developers Products”), or otherwise have their personal data submitted to us.
              <br />
              <br />
                By visiting the Site and using the Spark developers Products and/or agreeing to our Terms and Conditions, Users are accepting the practices and guidelines set out in this document (the “Policy”),
                so please take a few minutes to read it over carefully.
              <br />
              <br />
                When we refer to Spark developers, “we” or “us” in this Policy, we are referring to Spark developers itself together with, as applicable, the Spark developers Products.
              <br />
              <br />
                For the purposes of the Data Protection Legislation, where we are the party that determines the purposes for which and the manner in which any personal data is processed,
                the data controller of any such personal data is Spark’s Coding Holding B.V. of Prinsengracht 362B, Amsterdam, the Netherlands (“Spark developers”).
                However, we may also collect or be provided with certain personal data pursuant to our agreements with our customers and partners
                who remain the data controller of that personal data – in this case, we act as a data processor of the relevant customer or partner. Where we act as a data processor of any personal data,
                we will process such personal data in accordance with this Privacy Policy.
              <br />
              <br />
                If you have questions or concerns regarding this Policy, please contact us via milly@Sparkcoding.com.
            </ContentText>
          </Box>
          <Box>
            <H3>2. Limiting the use and collection of personal data</H3>
            <ContentText maxWidth='max-content' py={2}>
                Collecting personal data allows Spark developers to offer a more customised, secure, and efficient service to our Users. Here’s a brief description of how we use personal data:
              <ul>
                <li>To provide, operate, maintain, and improve the Spark developers Products.</li>
                <li>To provide customer service.</li>
                <li>To communicate upcoming features, developments, and news relating to the Spark developers Products.</li>
                <li>To protect, investigate, and deter against fraudulent, unauthorised, or illegal activity.</li>
                <li>To provide and deliver any other products and services that Users request.</li>
              </ul>
                We will take all steps reasonably necessary to ensure that personal data is treated securely and in accordance with this Policy and, where it applies, the Data Protection Legislation.
            </ContentText>
          </Box>
          <Box>
            <H3>3. The information we collect</H3>
            <ContentText maxWidth='max-content'>
              <b>Information provided when Users leave their information on the Site. </b>When Users register for more information through the Site, we collect personal details which can include: ‎
                names, postal addresses, email addresses, phone numbers, fax numbers, usernames, passwords and demographic information (for example, a User’s occupation).
              <br />
              <br />
              <b>Information provided through use of the Spark developers Products.</b> Users may also provide us with personal data which relates not only to Users themselves,
                but also certain third party individuals. We will treat such data in accordance with this Policy. Users may also provide us with certain personal data when they report a problem with
                the Spark developers Products or send us any other information either directly on the Site.
              <br />
              <br />
              <b>Information we get from others. </b>We may get personal data about Users from other sources. As an example of how we might get personal data other than the Site – we might collect certain information Users have.
                We may add this to information we get from this Site or otherwise through Users’ use of the Spark developers Products.
              <br />
              <br />
              <b>Information automatically collected through the Site and the Apps.</b> Each time Users visit the Site we may automatically collect the following information:
              <ul>
                <li>
                    <b>Technical Information</b> – this includes the type of mobile or tablet device Users use, a unique device identifier (for example, a device's IMEI number,
                        the MAC address of the device's wireless network interface, or the mobile phone number used on a device), network information, operating system, the browser,
                        and time zone settings.
                  </li>
                <li>
                  <b>Content Information </b>– this includes information stored on Users’ devices such as contact information, friends lists, login information, photos, videos or other digital content.
                </li>
                <li><b>Usage Information </b>– this includes: web traffic data, location data, weblogs and other communication data, whether this is required for our own billing purposes or otherwise; the resources that Users access;
                        the website(s) visited before browsing to the Site, pages viewed, how long spent on a page, access times; and other information about use of and actions on our Site.
                  </li>
                <li><b>Testimonials and Feedback. </b> - Spark developers does not post any personal data relating to its Users along with testimonials, unless we have been given permission to do so by the User. We get in touch with our Users
                        to confirm that they are happy for their personal data to be posted on our Site before anything is posted to request their permission to do so.
                        Users may submit or ask us to withdraw a testimonial by contacting us via milly@Sparkcoding.com
                </li>
              </ul>
            </ContentText>
          </Box>
          <Box>
            <H3>4. Cookies</H3>
            <ContentText maxWidth='max-content'>
                We may log and collect certain personal data using "Cookies". Cookies are small data files stored on Users’ hard drives by a website. We may use both session Cookies
                (which expire once Users close their web browser) and persistent Cookies (which stay on Users’ computers or devices until they delete them) to provide Users with a more personal and
                interactive experience on our Site. This type of information is collected to distinguish different Users of the Site. This helps us to provide Users with a good experience when they browse the Site.
                It also allows us to improve the Site to make them more useful and to tailor each User's experience to meet their special interests and needs.
              <br />
              <br />
                Please note that the Cookies that we may use include both Cookies we place and those which are placed by our third party partners – these are commonly referred to as “third party Cookies”.
                Third party Cookies are Cookies that are set by a domain other than the one being visited by the User – for example, if an individual visits the Site and a company other than Spark developers sets a
                cookie through the Site, this would be a third party cookie.
              <br />
              <br />
                Some of the Cookies we place are essential to allow us to provide certain aspects of the Site – for example, some are necessary to enable Users to log into certain secure areas. Users will typically be able to remove and reject Cookies from our Site by changing their settings. Many browsers and devices are set to accept Cookies until you change your settings. If Users remove or reject our Cookies, it could affect how our Site works for them.
            </ContentText>
          </Box>
          <Box>
            <H3>5. Analytics Services</H3>
            <ContentText maxWidth='max-content'>
                We may use third party analytics services (“Analytics Services”), to help analyse how Users use our Site. The information generated by the Cookies or other technologies about
                Users use of the Spark developers Products (the “Analytics Information”) is transmitted to the Analytics Services. The Analytics Services use Analytics Information to compile
                reports on User activity. The Analytics Services may also transfer the Analytics Information to third parties where required to do so by law,
                or where such third parties process Analytics Information on their behalf. Each Analytics Service’s ability to use and share Analytics Information is restricted by such Analytics Service’s
                particular Terms of Use and Privacy Policy. By using the Spark developers Products, Users consent to the processing of their personal data by Analytics Services in the manner and for the
                purposes set out above. For a full list of Analytics Services we use, please contact us at milly@Sparkcoding.com.
            </ContentText>
          </Box>
          <Box>
            <H3>6. How personal information is secured?</H3>
            <ContentText maxWidth='max-content'>
                Personal data on Spark developers is protected by an email address and password login. Users are responsible for keeping their password secret, and should be careful to log out of
                their accounts after they
                have finished any given session, especially if they are using a public computer. The security of personal data is important to us. When Users enter sensitive information on our
                registration forms
                (such as their name, mailing address, or credit card information), we encrypt that information using secure socket layer technology.
              <br />
              <br />
                Only employees or service providers that need to access personal data (such as customer service representatives or our data processing teams) will have access to personal data.
                Spark developers takes reasonable
                steps to ensure that it keeps all employees informed and reminded of privacy and security practices.
              <br />
              <br />
                We seek to use reasonable organisational, technical and administrative measures to protect personal data within our organisation. Unfortunately, no transmission or storage system can be
                guaranteed to
                be completely secure, and transmission of information via the internet is not completely secure. If a User has any reason to believe that their interaction with us is no longer secure
                (for example, if they feel that the security of their account might have been compromised), they should notify us of this problem immediately
                by contacting us via milly@Sparkcoding.com.
              <br />
              <br />
                We note that retention time can also impact the security of personal data and should be considered. In compliance with our obligations under the
                Data Protection Legislation, we only retain Users’ personal
                data for so long as necessary to meet the purposes for which it was collected.
            </ContentText>
          </Box>
          <Box>
            <H3>7. Sharing personal information</H3>
            <ContentText maxWidth='max-content'>
                Spark developers does not use Users' personal data to introduce them to third parties.
              <br />
              <br />
                However, we may share certain personal data as follows:
              <ul>
                <li>
                  <b>Other third parties.</b> We may share Users’ personal data with our third party service providers who need it to do work for us. For example:
                    <ul>
                    <li>
                            As described below, we may make available Users’ personal data to our third party data processing team who are based outside the EEA.
                    </li>
                  </ul>
                  </li>
                <li>
                  <b>Corporate restructuring.</b> We may share personal data when we do a business deal, or negotiate a business deal, involving the sale or transfer of all or a part of our business or assets.
                        These deals can include any merger, financing, acquisition, or bankruptcy transaction or proceeding.
                </li>
                <li>
                  <b>Other disclosures. </b>We may share personal data for legal, protection, and safety purposes, in accordance with this Policy:
                  <ul>
                    <li>We may share personal data to comply with laws or to allow us to enforce the terms of this Policy and/or our then current Terms and Conditions.</li>
                    <li>We may share information to respond to lawful requests and legal processes.</li>
                    <li>We may share personal data to protect the rights and property of Spark developers, our agents, customers, and others. This includes enforcing our agreements, policies and Terms and Conditions.</li>
                    <li>We may share personal data in an emergency. This includes protecting the safety of our employees and agents, our customers, or any person.</li>
                    <li>We may share personal data with those who need it to do work for us.</li>
                    <li>For information on how we may also share Anonymous Data, see the section titled “Anonymous Data”.</li>
                  </ul>
                </li>
              </ul>
            </ContentText>
          </Box>
          <Box>
            <H3>8. International Data Transfer</H3>
            <ContentText maxWidth='max-content'>
                Spark developers uses various cloud-based systems and tools, including certain customer relationship management and marketing automation services (“Tools”) to allow us to provide the Spark developers Products to
                our Users quickly and efficiently. For example, to help us manage our client relationships, we may use software provided by internationally renowned companies such as Pipedrive, Zendesk and Intercom .
                As part of our use of the Tools, certain limited client and User profile information is sent to the providers of the Tools, some of whom are based outside the EEA.
                Where Users' personal data is sent by Spark developers to Tool providers based outside the EEA, we ensure such transfers are conducted in accordance with this policy.
              <br />
              <br />
                By accepting this Policy, Users’ agree to the transfer of their personal data outside the EEA in accordance with the practices described in this Policy. We will take all steps reasonably necessary to ensure that such personal data is treated securely and in accordance with this Policy.
            </ContentText>
          </Box>
          <Box>
            <H3>9. Legal basis of our processing</H3>
            <ContentText maxWidth='max-content'>
                The Data Protection Legislation requires that we have a legal basis for processing your personal data. To be open and transparent with you in respect of our use of your personal data, here are the legal bases for our processing:
            </ContentText>
          </Box>
          <Box>
            <H3>10. Automated decision making and profiling</H3>
            <ContentText maxWidth='max-content'>
                We do not use your personal data for the purposes of automated decision-making or profiling as those terms’ meanings apply in the context of the Data Protection Legislation. However, we may do so in order to fulfil obligations imposed by law, in which case we will inform you of any such processing and provide you with an opportunity to object.
            </ContentText>
          </Box>
          <Box>
            <H3>11. Anonymous data</H3>
            <ContentText maxWidth='max-content'>
                When we use the term “Anonymous Data”, we are referring to data and information that does not permit an individual person to be identified or identifiable, either alone or when combined with any other
                information available to a third party – this could include data derived from personal data which is aggregated and compiled in anonymous form.
              <br />
              <br />
                We may create Anonymous Data records from the personal data we receive about our Users and other individuals whose personal data is submitted to us.
                We make personal data into Anonymous Data by excluding information (such as a User’s name) that makes the data personally identifiable to them. We use this Anonymous Data to analyse requests
                and usage patterns so that we may enhance the Spark developers Products and improve Site navigation.
              <br />
              <br />
                We may use Anonymous Data for a number of purposes, which could include disclosing that Anonymous Data to third parties.
            </ContentText>
          </Box>
          <Box>
            <H3>12. Users choices about privacy</H3>
            <ContentText maxWidth='max-content'>
                Users may always opt not to disclose certain personal data, but that may mean that they will not be able to access certain Spark developers Products.
                For example, a User's name and email address are necessary to complete the registration process.
              <br />
              <br />
                If Users have a complaint about this Policy, please send it via email to milly@Sparkcoding.com. Users’ complaints will be filed and reviewed by a qualified member of the Spark developers team. If required, Users will receive a response to their message as soon as possible.
            </ContentText>
          </Box>
          <Box>
            <H3>13. Changes to this Privacy Policy</H3>
            <ContentText maxWidth='max-content'>
                Spark developers may amend or change this Policy at its sole discretion at any time. The use of the personal data we collect at any given point is subject to the Policy in effect at the time of collection.
                Users should periodically check the Policy to make sure they understand the current Policy.
              <br />
              <br />
                Spark developers will notify Users by sending an email to the email address they have registered with their account, or by posting a prominent notice on the Site before we implement any material changes regarding our privacy practices or this Policy.
            </ContentText>
          </Box>
          <Box>
            <H3>14. Email communications</H3>
            <ContentText maxWidth='max-content'>
                Although we do not use Users’ personal data to send them marketing emails, we may still send non- marketing emails. Non-marketing emails include emails about Users’ accounts and our business dealings
                with them - for example, if any part of the Spark developers Products is temporarily disrupted or suspended or if there are any upcoming features or developments to the Spark developers Products we need to communicate.
                In addition, please note that all Users will receive an automatic welcome email necessary to complete their registration process.
              <br />
              <br />
                If Users do not wish to receive these communications, they have the option of deactivating their account. Users may request that their account be deleted or deactivated from Spark developers by sending an email at milly@Sparkcoding.com.
            </ContentText>
          </Box>
          <Box>
            <H3>15. Your rights and privacy protection measures</H3>
            <ContentText maxWidth='max-content'>
                The Data Protection Legislation gives you certain rights in respect of your personal data (these are listed below). Spark developers has put in place policies and procedures to ensure that it respects those rights.
                If you wish to exercise any of these rights, please contact us at and make clear: (i) what personal data is concerned; and (ii) which of the rights below you would like to enforce.
              <ul>
                <li>
                  <b>Opt-out.</b> Users may contact us at any time to opt out of:
                  <br />
                        (i) direct marketing communications (if applicable);<br />
                        (ii) automated decision making and/or profiling (if applicable); <br />
                        (iii) any new processing or your personal data we carry out beyond the original purpose for which we collected (which will be as described in this Policy); or <br />
                        (iv) the transfer of your personal data outside the EEA. <br />
                        Please note that your use of some of the Services may be ineffective upon opt-out – for example, if you opt out of the transfer of your personal data to parties outside the EEA, we will not be able to provide you with the vital services that our data extraction teams provide.
                </li>
                <li>
                    <b>Access.</b> You may access the personal data we hold about you at any time by contacting us directly at milly@Sparkcoding.com.
                  </li>
                <li>
                  <b>Amend.</b> You can also contact us to update or correct any inaccuracies in your personal data.
                </li>
                <li><b>Move.</b> Your personal data is portable – i.e., you to have the flexibility to move your personal data to other service providers as you wish. This means that we are required to keep that personal data in a commonly-used, interoperable format to facilitate this transfer between providers. Please note that this right extends only to your personal data, it does not cover all information provided to or extracted from Transactions uploaded to our Services.
                </li>
                <li>
                  <b>Erase and forget.</b> In certain situations, for example when the personal data we hold about you is no longer relevant or is incorrect, you can request that we erase such personal data.
                        Please let us know if you have any concerns about the operation of this Privacy Policy.
                </li>
              </ul>
            </ContentText>
          </Box>
          <Box>
            <H3>16. Third party sites</H3>
            <ContentText maxWidth='max-content'>16. Third party sites
                Our Site may contain links to and from the websites of our partner networks, advertisers and affiliates. If Users follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Users should please check these policies before they submit any personal data to these websites. The links to third party websites or locations are for convenience only and do not signify our endorsement of such third parties or their products, content, or websites. If Users disclose information to others, or authorise us to do the same under this Policy, the use and disclosure restrictions contained in this Policy will not apply to any third party. We do not control the privacy policies of third parties, and Users are subject to the privacy policies of those third parties where applicable.
            </ContentText>
          </Box>
          <Box>
            <H3>17. Children’s privacy protection</H3>
            <ContentText maxWidth='max-content'>
                Our Services are developed, marketed and intended for use by businesses only. We do not knowingly engage in any data collection, processing or storage of Users under 18. Our communication, marketing, and sales activities are never aimed at children. In the event that we identify a User who is under-age, we will take all the reasonable measures to prevent this person from continuing their interaction with the Service, and delete the information. If you are 18 or under, please do not access or use our Services without parental consent and supervision. If you are a parent or a legal guardian or concerned third party of a child under 18 who interacted with the Services, please alert us via milly@Sparkcoding.com.
            </ContentText>
          </Box>
          <Box>
            <H3>18. Sensitive information</H3>
            <ContentText maxWidth='max-content'>
                We ask that Users not send us, and that Users not disclose, any sensitive personal data about themselves or anyone else (e.g., social security numbers, information related to racial or ethnic origin, political opinions, religion or other beliefs, health, biometrics or genetic characteristics, criminal background or trade union membership) on or through the Spark developers Products or otherwise to us.
            </ContentText>
          </Box>
        </Flex>
      </Fragment>
    )
  }
}

export default basePage()(PrivacyPolicy)
