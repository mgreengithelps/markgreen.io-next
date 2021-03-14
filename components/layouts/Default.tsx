import { useState, ReactNode } from 'react'
import Header from '../modules/Header'
import Footer from '../modules/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'markGreen.io' }: Props) => {
  let [hasShown, setShown] = useState(false)
  setTimeout(() => {
    // Stop from displaying console logo multiple times
    if (!hasShown) {
      console.log('%c                                 ', 'font-size:400px; background:url(https://firebasestorage.googleapis.com/v0/b/markgreenio.appspot.com/o/img%2Ficon.png?alt=media&token=e5dbe8ce-ca7e-4912-96d1-7a3b70ed342c); background-repeat:no-repeat; background-size:contain;')
      console.info('%cHello, welcome to my console :) Feel free to email me at contact@markgreen.io. Have a great day!', 'font-size: 20px;')
      setShown(() => hasShown = true)
    }
  }, 50)
  return (
    <div className="min-h-screen w-screen bg-gradient pb-48 md:pb-72">
      <Header title={title}></Header>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
