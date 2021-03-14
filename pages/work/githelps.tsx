import Template from '../../components/templates/Default'
import WorkCard from '../../components/elements/WorkCard'

const Githelps = () => {
    const projects = [
        {
            challenge: `Mad Anthonys Children's Hope House wanted a way to move away from paper for their guest registration, and centralize and modernize their processes for their guest and house management.`,
            picture: {
                alt: 'MACHH house managemnet system',
                url: '/machh.jpg'
            },
            solution: 'I created a web-based application in Vue/Nuxtjs, with a Nodejs/Expressjs backend hosted on Firebase with a Firestore database providing realtime updates, without users needing to refresh their browsers. Features include: sign-in with their Microsoft Office online accounts, realtime messaging/chat, guest registration process, reporting, assigning rooms dirty or clean, real time updates on guests in rooms, light and dark theme modes.',
            title: 'MACHH House and Guest Management System'
        },
        {
            challenge: 'Design and develop a professional looking portfolio site that represents a lot of what I have learned over the course of my career. Oh yeah, and build it in React/Nextjs + typescript since you have never worked with that tooling before.',
            link: {
                href: 'https://github.com/mgreengithelps/markgreen.io-next',
                text: 'Take a look at my repository on Github.'
            },
            picture: {
                alt: 'markgreen.io website',
                url: '/portfolio.jpg'
            },
            solution: 'You are looking at it. I branded and designed the website from scratch, utilizing Tailwind to build out my CSS and learned how to build with React. My past experience in Vue helped lessen the learning curve, and all-in-all it was fun and went pretty smoothly.',
            title: 'This porfolio website!'
        }
    ]
    return (
        <Template title="G IT Helps | markgreen.io">
            <div className="w-full flex justify-center pt-12 md:pt-32 relative z-20">
                <div className="container grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <h1 className="text-6xl md:text-8xl text-beige font-bold tracking-tight break-words">
                            G IT Helps LLC
                        </h1>
                        <p className="text-beige py-4 max-w-xl">
                            I started G IT Helps LLC so I could take on clients in my spare time. I started with just doing IT support and consultation for a few small businesses, but then expanded to creating website and web-based applications for businesses as well. I have learned a lot about starting your own business and handling the needs of clients.
                        </p>
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

export default Githelps