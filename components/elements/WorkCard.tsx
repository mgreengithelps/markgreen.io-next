import Image from 'next/image'

type Props = {
    challenge?: string,
    link?: {
        href?: string,
        text?: string
    },
    picture?: {
        alt?: string,
        url?: string
    },
    solution?: string,
    title?: string
}

const WorkCard = ({ challenge, link, picture, solution, title }: Props) => (
    <div className="w-full flex flex-wrap md:flex-nowrap pt-24">
        {picture ? (
            <a href={picture.url} target="_blank" className="image-container rounded-lg overflow-hidden block p-0 m-0 cursor-pointer">
                <Image
                  src={picture.url}
                  alt={picture.alt}
                  width={256}
                  height={256}
                />
            </a>
        ) : null}
        <div className="w-full md:max-w-xl pl-0 md:pl-10 pt-6 md:pt-0">
            <h3 className="text-beige font-bold text-3xl tracking-wide pb-4">
                {title}
            </h3>
            <h4 className="text-beige text-sm tracking-widest uppercase">
                The challenge
            </h4>
            <p className="text-beige pb-4">
                {challenge}
            </p>
            <h4 className="text-beige text-sm tracking-widest uppercase">
                The solution
            </h4>
            <p className="text-beige pb-4">
                {solution}
            </p>
            {link ? (
                <a href={link.href} target="_blank" rel="nofollow noreferrer" className="text-blue hover:text-green transition-colors duration-700 ease-in">
                    {link.text}
                </a>
            )
            : null}
        </div>
    </div>
)

export default WorkCard