import { useEffect, useState } from 'react'
import NavLink from './NavLink'
import Social from './Social'

type Props = {
    setShow?: Function,
    show?: Boolean
}

const Menu = ({setShow, show}: Props) => {
    const showClass = 'w-screen h-screen fixed inset-0 bg-gradient transition-opacity ease-in duration-500 z-50 opacity-100'
    const hideClass = 'w-screen h-screen fixed inset-0 bg-gradient transition-opacity ease-in duration-500 -z-1 opacity-0'
    const [containerClassName, setContainerClassName] = useState(showClass)
    const navItems = [
        {
            href: '/work',
            title: 'Work'
        },
        {
            href: '/charity',
            title: 'Charity'
        },
        {
            href: '/contact',
            title: 'Contact'
        }
    ]
    const hide = () => setShow(show === true ? false : true)
    const toggleClassName = (show) => show === true ? showClass : hideClass
    useEffect(() => setContainerClassName(toggleClassName(show)), [show])
    return (
        <nav
            className={containerClassName}
        >
            <div className="container flex justify-end items-center py-2">
                <div className="w-12 h-12 flex justify-center items-center">
                    <button
                        className="outline-none border border-beige rounded-full p-4 flex justify-center items-center h-8 w-8 text-beige bg-opacity-50 hover:bg-beige transition-colors duration-500 ease-in hover:text-darkBlue focus:outline-none select-none leading-none font-thin"
                        onClick={hide}
                    >
                        x
                </button>
                </div>
            </div>
            <ul className="text-center mt-12">
                {navItems.map((item, i) => <NavLink key={i} link={item} />)}
                <Social />
            </ul>
        </nav>
    )
}

export default Menu