import { Container, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Works = ({ repos }) => (
  <Layout title="Works">
    <Container>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {repos.map((repo, index) => (
          <Section key={index}>
            <WorkGridItem
              url={repo.html_url}
              title={repo.name}
              thumbnail={`https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/master/README.md`}
            >
              {repo.description ? repo.description : ''}
            </WorkGridItem>
          </Section>
        ))}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
