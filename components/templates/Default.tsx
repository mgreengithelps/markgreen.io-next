import Link from 'next/link'
import Layout from '../layouts/Default'

type Props = {
  title?: string
}

const Template = ({ title = 'markGreen.io | Welcome' }: Props) => (
  <Layout title={title}>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default Template
