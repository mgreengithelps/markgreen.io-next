import Link from 'next/link'

type Props = {
    link?: {
        href?: string,
        title?: string
    }
}

const NavLink = ({link}: Props) => (
    <li className="py-6">
        <Link href={link.href}>
            <a
              className="py-6 text-beige hover:text-blue transition-colors duration-700 ease-in text-6xl md:text-8xl font-bold leading-none tracking-wider uppercase select-none"
            >
                {link.title}
            </a>
        </Link>
    </li>
)

export default NavLink