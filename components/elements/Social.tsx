import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Social = () => (
    <li className="py-4 flex justify-center items-center">
        <a href="https://github.com/mgreengithelps" target="_blank" aria-label="Github profile" className="text-beige hover:text-blue transition-colors duration-700 ease-in px-8">
            <FontAwesomeIcon icon={['fab', 'github']} size="5x" />
        </a>
        <a href="https://www.linkedin.com/in/mark-green-25b976160/" target="_blank" aria-label="Linkedin profile" className="text-beige hover:text-blue transition-colors duration-700 ease-in px-8">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="5x" />
        </a>
    </li>
)

export default Social