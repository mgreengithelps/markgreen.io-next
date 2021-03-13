const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Send an email for contact
    const data = (req.body && Object.keys(req.body).length > 0) ? req.body : {}
    const to = process.env.EMAIL_TO
    const from = process.env.EMAIL_FROM
    const subject = 'markgreen.io Contact Form'
    let html = '<h1>Form submitted from markgreen.io</h1>'
    let text = 'Form submitted from markgreen.io\n'
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
      return sgMail
        .send({
          to,
          from,
          subject,
          text,
          html
        })
        .then(() => res.status(200).json({ message: 'Message sent!' }))
        .catch((error) => {
          console.error(error)
          return res.status(500).json({ message: error })
        })
    }
  } else {
    // Handle any other HTTP method
    res.status(200).send('This is an API endpoint for /contact. Currently, any requests other than POST do not return any value from this endpoint. Thank you, Mark.')
  }
}
