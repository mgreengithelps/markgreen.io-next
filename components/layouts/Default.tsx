import React, { ReactNode } from 'react'
import Header from '../modules/Header'
import Footer from '../modules/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'markGreen.io' }: Props) => (
  <div className="min-h-screen w-screen bg-gradient">
    <Header title={title}></Header>
    {children}
    <Footer />
  </div>
)

export default Layout
