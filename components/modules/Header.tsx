import { useState, useEffect } from 'react'
import Link from 'next/link'
import HtmlHead from '../elements/HtmlHead'
import Logo from '../elements/Logo'
import Menu from '../elements/Menu'

type Props = {
  title?: string
}

const Header = ({ title = 'markgreen.io' }: Props) => {
  const [show, setShow] = useState(false)
  const toggleShow = () => setShow(show === true ? false : true)
  return (
    <div>
      <HtmlHead title={title} />
      <header className="w-screen flex justify-center">
        <nav className="container flex justify-between items-center py-2 relative z-20">
          <Link href="/">
            <a className="font-thin uppercase leading-none text-beige tracking-widest text-xs">
              Mark Green&emsp;|&emsp;Developer
            </a>
          </Link>
          <div
            className="w-12 h-12 cursor-pointer"
            onClick={toggleShow}
          >
            <Logo />
          </div>
        </nav>
      </header>
      <Menu show={show} setShow={setShow} />
    </div>
  )
}

export default Header
