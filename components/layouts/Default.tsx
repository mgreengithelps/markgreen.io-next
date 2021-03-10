import React, { ReactNode } from 'react'
import Header from '../modules/Header'
import Footer from '../modules/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'markGreen.io | Welcome' }: Props) => (
  <div>
    <Header title={title}></Header>
    {children}
    <Footer></Footer>
  </div>
)

export default Layout
