import Link from 'next/link'
import Template from '../components/templates/Default'

const WorkPage = () => (
  <Template title="Work | markgreen.io">
    <h1>WorkPage</h1>
    <p>This is the Work page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Template>
)

export default WorkPage
