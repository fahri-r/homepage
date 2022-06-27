import { SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Works = ({ repos }) => (
  <Layout title="Works">
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      {repos.map((repo, index) => (
        <Section key={index}>
          <WorkGridItem
            url={repo.html_url}
            title={repo.name}
            thumbnail={`https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/master/README.md`}
            star={repo.stargazers_count}
            fork={repo.forks_count}
            language={repo.language}
          >
            {repo.description ? repo.description : ''}
          </WorkGridItem>
        </Section>
      ))}
    </SimpleGrid>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
