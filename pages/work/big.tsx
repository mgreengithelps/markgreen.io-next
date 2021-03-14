import Template from '../../components/templates/Default'
import WorkCard from '../../components/elements/WorkCard'

const Big = () => {
    const projects = [
        {
            challenge: 'Wind River chimes needed an eCommerce website that would display seperate products and pricing for their B2C and B2B customers, allowing them to manage their inventory all in one place.',
            link: {
                href: 'https://windriverchimes.com/',
                text: 'Check out the Wind River website.'
            },
            picture: {
                alt: 'Wind River chimes website',
                url: '/windriver.jpg'
            },
            solution: 'In order to accomplish their needs, I built a Shopify theme from scratch. I was able to tag customers based on whether they were B2B or B2C, and used this tagging system to create logical statements in Liquid to display different pages, products, prices, etc. to the customer.',
            title: 'Wind River'
        },
        {
            challenge: 'With COVID-19 Bard HVAC could not showcase their products at any tradshows.',
            link: {
                href: 'https://bard-virtual-trade-show.web.app/',
                text: 'Bard virtual tradeshow can be found here (This is a preview link as the tradeshow is now over).'
            },
            picture: {
                alt: 'Bard virtual tradeshow website',
                url: '/bard.jpg'
            },
            solution: 'I built out a Virtual tradeshow using Vue/Nuxtjs with horizontal scrolling on Desktop and vertical scrolling on mobile.',
            title: 'Bard HVAC Virtual Tradeshow'
        }
    ]
    return (
        <Template title="BIG | markgreen.io">
            <div className="w-full flex justify-center pt-12 md:pt-32 relative z-20">
                <div className="container grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <h1 className="text-6xl md:text-8xl text-beige font-bold tracking-tight break-words">
                            Brand Innovation Group
                        </h1>
                        <p className="text-beige py-4 max-w-xl">
                            Since joining the BIG team, I have had the opportunity to work in a few different environments that were new to me. <a>Craft CMS with Twig</a> and <a>Shopify theme development with Liquid</a> are the two that stand out the most.
                        </p>
                        <a
                          href="https://gotobig.com"
                          rel="nofollow noreferrer"
                          target="_blank"
                          className="text-blue hover:text-green duration-700 transition-colors ease-in max-w-xl"
                        >
                            More about Brand Innovation Group
                        </a>
                    </div>
                    <div className="col-span-2">
                        {projects.map((project, i) =>
                          <WorkCard
                            key={i}
                            challenge={project.challenge}
                            link={project.link}
                            picture={project.picture}
                            solution={project.solution}
                            title={project.title}
                          />
                        )}
                    </div>
                </div>
            </div>
        </Template>
    )
}

export default Big