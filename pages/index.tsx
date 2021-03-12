import Link from 'next/link'
import Template from '../components/templates/Default'

type Props = {
  title?: string
}

const IndexPage = ({ title = 'Welcome | markGreen.io' }: Props) => (
  <Template title={title}>
    Home
  </Template>
)

export default IndexPage
