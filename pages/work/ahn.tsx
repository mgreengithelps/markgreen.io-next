import Link from 'next/link'
import Template from '../../components/templates/Default'
import WorkCard from '../../components/elements/WorkCard'

const Ahn = () => {
    const projects = [
        {
            challenge: 'AHN was looking for a way to combine a word order ticketing system with a PM/Asset management system. Licensing per year was over $20,000 for the current set up, and this was not accomplishing all the goals that our C.I.O. wanted accomplished. So we decided to build a custom solution.',
            picture: {
                alt: 'MACHH house managemnet system',
                url: '/ahn.jpg'
            },
            link: {
                href: '/',
                text: 'Checkout a stripped down version in this repository on Github.'
            },
            solution: `This was the largest and most ambitious project I have worked on to date. Authentication was integrated with Office 365, preventive maintenance tasks could be created from assets that were created in the system. This could automatically create work order tickets based on a schedule. Different views were set per user access. Built in Vue/Nuxtjs with a Nodejs backend running on Google's Firebase. Real time updates provided by Firestore. You could run reports on tickets, assets, users for several different use cases, including during state inspections. Managers were shown graphs representing the tickets opened, closed, assigned per a cetain timeframe. It was a load of fun digging into the dirt with this project and it really gave me a ton of experience and knowledge. I would love to be able to tackle something like this again.`,
            title: 'Workorder and Asset Management System'
        }
    ]
    return (
        <Template title="AHN | markgreen.io">
            <div className="w-full flex justify-center pt-12 md:pt-32 relative z-20">
                <div className="container grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <h1 className="text-6xl md:text-8xl text-beige font-bold tracking-tight break-words">
                            Adams Health Network
                        </h1>
                        <p className="text-beige pt-4 max-w-xl">
                            I began my career in IT and Web development at Adams Health Network. I learned a load about the IT world from my experience at AHN, from configuring phone systems, to running CAT cable, troubleshooting problems, tracking security issues, server management, networking, you get the idea. I loved my time at AHN and was so happy to work, learn and grow there.
                        </p>
                        <p className="text-beige py-4 max-w-xl">
                            I also got to work on a lot of exciting web based projects as well. I built the frontend and backend of the intranet system there using Nodejs, MongoDB, MYSQL, and JS. There were a variety of forms and information integrated into the intranet, each with their own unique challenges. I was able to build out an authentication flow that utilized our existing MS domain controller (Windows users and passwords).
                        </p>
                        <p className="text-beige pb-4 max-w-xl">
                            There are too many projects to list on here, but if you would like to chat more about them please feel free to <Link href="/contact"><a className="text-blue hover:text-green transition-colors duration-700 ease-in">reach out.</a></Link>
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

export default Ahn