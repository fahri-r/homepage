import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import config from '../config'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  gap: 4px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(-20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
          >
            {config.title}
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
