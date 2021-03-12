import type { AppProps /*, AppContext */ } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/globals.scss'

library.add(fab, faLinkedin, faGithub)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
