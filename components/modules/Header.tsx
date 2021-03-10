import Head from 'next/head'
import Link from 'next/link'
import Logo from '../elements/Logo'

type Props = {
  title?: string
}

const Header = ({ title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>
        {title}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="w-full flex justify-between items-center pt-4 pb-2 px-4">
        <div className="branding">
          <Link href="/" className="name opacity-0 transform-all duration-700 ease-out uppercase font-bold text-2xl text-green hover:text-beige tracking-wider leading-none cursor-pointer flex flex-col md:flex-row items-center">
            <div>
              <div className="w-12 h-12 mb-4 md:mb-0 mr-0 md:mr-4">
                <Logo />
              </div>
              <a>
                Mark A. Green
              </a>
            </div>
          </Link>{' '}
        </div>

        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        <div className="nav-links flex flex-col md:flex-row">
          <a className="bio opacity-0 transform-all duration-700 ease-out p-4 uppercase font-bold text-xl text-green hover:text-beige tracking-wider leading-none cursor-pointer">
            Bio
          </a>
          <a className="contact opacity-0 transform-all duration-700 ease-out p-4 uppercase font-bold text-xl text-green hover:text-beige tracking-wider leading-none cursor-pointer">
            Contact
          </a>
          <a className="work opacity-0 transform-all duration-700 ease-out p-4 uppercase font-bold text-xl text-green hover:text-beige tracking-wider leading-none cursor-pointer">
            Work
          </a>
        </div>
      </nav>
    </header>
  </div>
)

export default Header
