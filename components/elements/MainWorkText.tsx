import { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
    children?: ReactNode,
    link?: {
        href?: string,
        text?: string
    },
    title?: string,
    years?: string
}

const MainWorkText = ({ children, link, title, years }: Props) => (
    <div>
        <h2 className="text-3xl text-beige uppercase tracking-wider leading-none">
            {title}
        </h2>
        <small className="text-xs uppercase tracking-widest text-beige italic opacity-50">
            {years}
        </small>
        <div className="pt-4">
            {children}
        </div>
        <Link href={link.href}>
            <a className="text-blue hover:text-green duration-700 ease-in">
                {link.text}
            </a>
        </Link>
    </div>
)

export default MainWorkText