import Link from 'next/link'
import Template from '../components/templates/Default'

type Props = {
  title?: string
}

const IndexPage = ({ title = 'Home | markGreen.io' }: Props) => (
  <Template title={title} />
)

export default IndexPage
