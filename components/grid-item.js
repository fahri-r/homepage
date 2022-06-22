import {
  Box,
  Img,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import NextLink from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.text())

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Img
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, url, title, thumbnail }) => {
  const { data } = useSWR(thumbnail, fetcher)

  let thumbnailData
  if (data) {
    thumbnailData = data.match(/(\[product-screenshot]: )[^\s]+/i)
  }
  let thumbnailUrl = `/images/work-placeholder${useColorModeValue(
    '',
    '-dark'
  )}.png`

  if (thumbnailData) {
    thumbnailData = thumbnailData[0].split(' ')
    thumbnailUrl = thumbnailData[1]
  }

  return (
    <Box w="100%" textAlign="center">
      <NextLink href={url} passHref scroll={false}>
        <LinkBox cursor="pointer">
          <Img src={thumbnailUrl} alt={title} borderRadius="xl" />
          <LinkOverlay href={url}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
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
