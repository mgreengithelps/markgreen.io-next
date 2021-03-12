import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Template from '../components/templates/Default'

const ContactPage = () => (
  <Template title="📧 | markgreen.io">
    <div className="w-full flex justify-center pt-12 md:pt-48">
      <div className="container grid grid-cols-2">
        <div className="col-span-2 md:col-span-1 border-0 md:border-r border-beige justify-end md:pr-10 md:text-right">
          <h1 className="text-8xl text-beige font-bold tracking-tight">
            Contact
          </h1>
          <h2 className="text-beige text-3xl leading-relaxed tracking-wide">
            Feel free to reach out!
          </h2>
          <p className="text-beige max-w-xs">
            Also, you can find me on Linked In, Github, or just shoot me an email directly.
          </p>
          <div className="flex md:justify-end pt-4">
            <a href="https://www.linkedin.com/in/mark-green-25b976160/" target="_blank" rel="nofollow noreferrer" aria-label="Github profile" className="text-beige hover:text-blue transition-colors duration-700 ease-in px-2">
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
          <div className="w-full md:max-w-sm md:pl-10 pt-10 md:pt-0">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              className="w-full bg-transparent border border-beige rounded-lg p-2 leading-none focus:outline-none text-beige focus:border-blue transition-colors duration-700 ease-in mb-4"
            ></input>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="w-full bg-transparent border border-beige rounded-lg p-2 leading-none focus:outline-none text-beige focus:border-blue transition-colors duration-700 ease-in mb-4"
            ></input>
            <textarea
              name="Message"
              rows={4}
              placeholder="Message"
              className="w-full bg-transparent border border-beige rounded-lg p-2 leading-none focus:outline-none text-beige focus:border-blue transition-colors duration-700 ease-in mb-4"
            ></textarea>
            <button
              className="bg-blue hover:bg-purple transition-colors duration-700 ease-in text-beige rounded-lg px-8 py-2 leading-snug uppercase tracking-widest focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </Template>
)

export default ContactPage
