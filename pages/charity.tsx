import Link from 'next/link'
import Template from '../components/templates/Default'

const CharityPage = () => (
  <Template title="💗 | markgreen.io">
    <h1>Charity Page</h1>
    <p>This is the Charity page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Template>
)

export default CharityPage
