import Link from 'next/link'
import Layout from '../layouts/Default'

type Props = {
  title?: string
}

const Home = ({ title = 'markGreen.io | Welcome' }: Props) => (
  <Layout title={title}>
    <div>
      fg
    </div>
  </Layout>
)

export default Home
