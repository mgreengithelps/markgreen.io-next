import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Template from '../components/templates/Default'
import ContactForm from '../components/elements/ContactForm'

const ContactPage = () => (
  <Template title="📧 | markgreen.io">
    <div className="w-full flex justify-center pt-12 md:pt-48 relative z-20">
      <div className="container grid grid-cols-2">
        <div className="col-span-2 md:col-span-1 border-0 md:border-r border-beige flex flex-col md:items-end md:pr-10 md:text-right">
          <h1 className="text-6xl md:text-8xl text-beige font-bold tracking-tight">
            Contact
            </h1>
          <h2 className="text-beige text-3xl leading-relaxed tracking-wide">
            Feel free to reach out!
            </h2>
          <div className="max-w-xs">
            <p className="text-beige">
              Also, you can find me on Linked In, Github, or just shoot me an email directly.
              </p>
          </div>
          <div className="flex md:justify-end pt-4">
            <a href="https://www.linkedin.com/in/mark-green-25b976160/" target="_blank" rel="nofollow noreferrer" aria-label="Github profile" className="text-beige hover:text-blue transition-colors duration-700 ease-in pr-2">
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
            </a>
            <a href="https://github.com/mgreengithelps" target="_blank" rel="nofollow noreferrer" aria-label="Github profile" className="text-beige hover:text-blue transition-colors duration-700 ease-in px-2">
              <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
            </a>
            <a href="mailto:contact@markgreen.io" target="_blank" rel="nofollow noreferrer" aria-label="Github profile" className="text-beige hover:text-blue transition-colors duration-700 ease-in pl-2">
              <FontAwesomeIcon icon={['fas', 'envelope-open-text']} size="2x" />
            </a>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <ContactForm />
        </div>
      </div>
    </div>
  </Template>
)

export default ContactPage
