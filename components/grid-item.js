import {
  Grid,
  GridItem,
  HStack,
  Img,
  LinkBox,
  LinkOverlay,
  Show,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { BiGitRepoForked, BiStar } from 'react-icons/bi'
import { BsCodeSquare } from 'react-icons/bs'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.text())

export const WorkGridItem = ({
  children,
  url,
  title,
  thumbnail,
  star,
  fork,
  language
}) => {
  const { data } = useSWR(thumbnail, fetcher)

  let thumbnailDefault = `/images/work-placeholder${useColorModeValue(
    '',
    '-dark'
  )}.png`

  let thumbnailData
  if (data) {
    thumbnailData = data.match(/(\[product-screenshot]: )[^\s]+/i)
  }
  let thumbnailUrl = thumbnailDefault

  if (thumbnailData) {
    thumbnailData = thumbnailData[0].split(' ')
    thumbnailUrl = thumbnailData[1]
  }

  let objectFit = thumbnailUrl == thumbnailDefault ? 'contain' : 'cover'

  return (
    <LinkBox
      cursor="pointer"
      bgColor="whiteAlpha.100"
      border="1px"
      borderColor="#ffffff00"
      _hover={{
        bgColor: 'whiteAlpha.300',
        border: '1px',
        borderColor: 'white'
      }}
      _focus={{
        border: '0px'
      }}
      borderRadius="xl"
      boxShadow="lg"
    >
      <LinkOverlay href={url} borderRadius="xl">
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
          paddingEnd={5}
        >
          <GridItem rowSpan={2}>
            <Show breakpoint="(min-width: 320px)">
              <Img
                src={thumbnailUrl}
                alt={title}
                borderLeftRadius="xl"
                objectFit={objectFit}
                boxSize="100%"
                placeholder="blur"
                loading="lazy"
              />
            </Show>
          </GridItem>
          <GridItem colSpan={2}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
            <Text mt={2} fontSize={14}>
              {children}
            </Text>
          </GridItem>
          <GridItem paddingBottom={4}>
            <HStack h="100%" alignItems="flex-end">
              <BiStar />
              <Text mt={2} fontSize={12}>
                {star}
              </Text>
              <BiGitRepoForked />
              <Text mt={2} fontSize={12}>
                {fork}
              </Text>
            </HStack>
          </GridItem>
          <GridItem justifySelf="end" paddingBottom={4}>
            <HStack h="100%" alignItems="flex-end">
              <BsCodeSquare />
              <Text mt={2} fontSize={12}>
                {language}
              </Text>
            </HStack>
          </GridItem>
        </Grid>
      </LinkOverlay>
    </LinkBox>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
