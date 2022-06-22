import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import Image from 'next/image'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import config from '../config'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = ({ repos }) => {
  let languages = []
  repos.map(repo => languages.push(repo.language))
  languages = [...new Set(languages)]

  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {config.name}
            </Heading>
            <p>{config.branding}</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/fahri.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>{config.description}</Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          {config.biodate.map((bio, index) => (
            <BioSection key={index}>
              <BioYear>{bio.year}</BioYear>
              {bio.description}
            </BioSection>
          ))}
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>{config.hobby}</Paragraph>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            I've Used
          </Heading>
          <Wrap>
            {languages.map((language, index) => (
              <WrapItem key={index}>
                <Badge
                  variant="outline"
                  colorScheme={useColorModeValue('purple', 'orange')}
                >
                  {language}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Reach Me
          </Heading>
          <List>
            <ListItem>
              <Link
                href={`https://github.com/${config.github.username}/`}
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue('purple', 'orange')}
                  leftIcon={<IoLogoGithub />}
                >
                  {config.github.username}
                </Button>
              </Link>
            </ListItem>

            {config.social.instagram && (
              <ListItem>
                <Link
                  href={`https://instagram.com/${config.social.instagram}/`}
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    colorScheme={useColorModeValue('purple', 'orange')}
                    leftIcon={<IoLogoInstagram />}
                  >
                    {config.social.instagram}
                  </Button>
                </Link>
              </ListItem>
            )}

            {config.social.linkedin && (
              <ListItem>
                <Link
                  href={`https://www.linkedin.com/in/${config.social.linkedin}/`}
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    colorScheme={useColorModeValue('purple', 'orange')}
                    leftIcon={<IoLogoLinkedin />}
                  >
                    {config.social.linkedin}
                  </Button>
                </Link>
              </ListItem>
            )}

            {config.social.phone && (
              <ListItem>
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue('purple', 'orange')}
                  leftIcon={<PhoneIcon />}
                >
                  {config.social.phone}
                </Button>
              </ListItem>
            )}

            {config.social.email && (
              <ListItem>
                <Link href={`mailto:${config.social.email}/`}>
                  <Button
                    variant="ghost"
                    colorScheme={useColorModeValue('purple', 'orange')}
                    leftIcon={<EmailIcon />}
                  >
                    {config.social.email}
                  </Button>
                </Link>
              </ListItem>
            )}
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
