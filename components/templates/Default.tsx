import { ReactNode } from 'react'
import Layout from '../layouts/Default'

type Props = {
  children?: ReactNode,
  title?: string
}

const Template = ({ children, title = 'markGreen.io' }: Props) => (
  <Layout title={title}>
    {children}
  </Layout>
)

export default Template
