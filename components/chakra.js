import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from '@chakra-ui/react'
import axios from 'axios'
import config from '../config'
import theme from '../lib/theme'

export default function Chakra({ cookies, children }) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export async function getServerSideProps({ req }) {
  let excludeRepo = ``
  config.github.exclude.projects.forEach(project => {
    excludeRepo += `+-repo:${config.github.username}/${project}`
  })
  let query = `user:${config.github.username}${excludeRepo}`

  const reposReq = axios({
    method: 'GET',
    url: `https://api.github.com/search/repositories?q=${query}&type=Repositories`,
    headers: {
      'Content-Type': 'application/vnd.github.v3+json'
    }
  })

  const [repos] = await Promise.all([reposReq])

  return {
    props: {
      repos: repos.data.items,
      cookies: req.headers.cookie ?? ''
    }
  }
}
