import Link from 'next/link'
import Template from '../components/templates/Default'

const ContactPage = () => (
  <Template title="Contact | markgreen.io">
    <h1>Contact Page</h1>
    <p>This is the Contact page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Template>
)

export default ContactPage
