const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
const from = process.env.EMAIL_USER
const to = process.env.EMAIL_TO
const subject = 'markgreen.io Contact Form'

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Send an email for contact
    let html = '<h1>Form submitted from markgreen.io</h1>'
    let text = 'Form submitted from markgreen.io\n'
    const data = (req.body && Object.keys(req.body).length > 0) ? req.body : {}
    if (!data.name) {
      res.status(500).json({ message: 'You must include your name.' })
    } else if (!data.email) {
      res.status(500).json({ message: 'You must include your email.' })
    } else {
      Object
        .keys(data)
        .forEach((k) => {
          html += `<p><b>${k}</b>: ${data[k]}`
          text += `${k}: ${data[k]}\n`
        })
      transporter
        .sendMail({
          from,
          to,
          subject,
          text,
          html
        })
        .then(info => res.status(200).json(info))
        .catch(error => {
          console.error(error)
          return res.status(500).json({ message: error })
        })
    }
  } else {
    // Handle any other HTTP method
    res.status(200).send('This is an API endpoint for /contact. Currently, any requests other than POST do not return any value from this endpoint. Thank you, Mark.')
  }
}
