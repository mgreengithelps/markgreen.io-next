import Link from 'next/link'
import Home from '../components/templates/Home'

type Props = {
  title?: string
}

const IndexPage = ({ title = 'Welcome | markGreen.io' }: Props) => (
  <Home title={title} />
)

export default IndexPage
