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

const SubWorkText = ({ children, link, title, years }: Props) => (
    <div>
        <h4 className="text-2xl text-beige uppercase tracking-wider leading-none">
            {title}
        </h4>
        <small className="text-xs uppercase tracking-widest text-beige italic opacity-50">
            {years}
        </small>
        <div className="pt-4">
            {children}
        </div>
        {link ? (
            <p className="text-beige">
                <Link href={link.href}>
                    <a className="text-blue hover:text-green duration-700 ease-in">
                        {link.text}
                    </a>
                </Link>
            </p>
        ) : null}
    </div>
)

export default SubWorkText