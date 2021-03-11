import Head from 'next/head'
import Link from 'next/link'
import Logo from '../elements/Logo'

type Props = {
  title?: string
}

const Header = ({ title = 'markgreen.io' }: Props) => (
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
          <Link href="/" className="name opacity-0 transform-all duration-700 ease-out uppercase font-bold text-2xl text-green hover:text-beige tracking-wider leading-none cursor-pointer">
            <a className="flex items-center">
              <div className="w-12 h-12 mb-4 md:mb-0 mr-0 md:mr-4">
                <Logo />
              </div>
              <h1 className="font-bold uppercase hidden">
                Mark A. Green
              </h1>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  </div>
)

export default Header
