import type { AppProps /*, AppContext */ } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/globals.scss'

library.add(fab, faLinkedin, faGithub)

const MyApp = ({ Component, pageProps }: AppProps) => {
  const showConsoleImage = () => {
    console.log('%c                                 ', 'font-size:400px; background:url(https://firebasestorage.googleapis.com/v0/b/markgreenio.appspot.com/o/img%2Ficon.png?alt=media&token=e5dbe8ce-ca7e-4912-96d1-7a3b70ed342c); background-repeat:no-repeat; background-size:contain;')
    console.info('%cHello, welcome to my console :) Feel free to email me at contact@markgreen.io. Have a great day!', 'font-size: 20px;')
  }
  setTimeout(() => showConsoleImage(), 50)
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
