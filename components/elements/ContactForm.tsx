import { useRef, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { resolve } from 'node:path'

const ContactForm = () => {
    let [isSending, setSending] = useState(false)
    const emailError = useRef(null)
    const emailInput = useRef(null)
    const messageInput = useRef(null)
    const nameError = useRef(null)
    const nameInput = useRef(null)
    // Check if email is valid
    const checkEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }
    // Show errors if inputs are invalid
    const setError = (container, message) => {
        if (!container.classList.contains('border-red')) {
            container.classList.add('border-red')
        }
        if (message.classList.contains('hidden')) {
            message.classList.remove('hidden')
        }
    }
    // Remove errors on input
    const unsetError = (e) => {
        if (e && e.target && e.target.value && e.target.classList.contains('border-red')) {
            e.target.classList.remove('border-red')
            switch (e.target.name) {
                case 'Name':
                    if (!nameError.current.classList.contains('hidden')) {
                        nameError.current.classList.add('hidden')
                    }
                    break
                case 'Email':
                    if (!emailError.current.classList.contains('hidden')) {
                        emailError.current.classList.add('hidden')
                    }
                    break
                default:
                    break
                    
            }
        }
    }
    // Form submission
    const submit = (e) => {
        e.preventDefault()
        // Check if submission is not already in progress
        if (isSending === false) {
            if (!nameInput.current.value) {
                setError(nameInput.current, nameError.current)
            } else if (!emailInput.current.value) {
                setError(emailInput.current, emailError.current)
            } else if (!checkEmail(emailInput.current.value)) {
                setError(emailInput.current, emailError.current)
            } else {
                setSending(() => isSending = true)
                axios
                    .post('/api/contact', {
                        email: emailInput.current.value,
                        message: messageInput.current.value ? messageInput.current.value : '',
                        name: nameInput.current.value
                    })
                    .then(response => {
                        setSending(() => isSending = false)
                        alert('Thank you for your submission. I will be in touch soon. -Mark')
                        console.log(response)
                    })
                    .catch(error => {
                        setSending(() => isSending = false)
                        alert(error.message)
                        console.error(error)
                    })
            }
        }
    }
    return (
        <form
            className="w-full md:max-w-sm md:pl-10 pt-10 md:pt-0"
            method="POST"
            onSubmit={submit}
        >
            <small
              ref={nameError}
              className="text-xs text-red font-bold tracking-wider hidden"
            >
                Please enter your Name.
            </small>
            <input
                ref={nameInput}
                type="text"
                name="Name"
                placeholder="Name"
                className="w-full bg-transparent border border-beige rounded-lg p-2 leading-none focus:outline-none text-beige focus:border-blue transition-colors duration-700 ease-in mb-4"
                onInput={unsetError}
            ></input>
            <small
              ref={emailError}
              className="text-xs text-red font-bold tracking-wider hidden"
            >
                Please check your email.
            </small>
            <input
                ref={emailInput}
                type="email"
                name="Email"
                placeholder="Email"
                className="w-full bg-transparent border border-beige rounded-lg p-2 leading-none focus:outline-none text-beige focus:border-blue transition-colors duration-700 ease-in mb-4"
                onInput={unsetError}
            ></input>
            <textarea
                ref={messageInput}
                name="Message"
                rows={4}
                placeholder="Message"
                className="w-full bg-transparent border border-beige rounded-lg p-2 leading-none focus:outline-none text-beige focus:border-blue transition-colors duration-700 ease-in mb-4"
            ></textarea>
            <button
                type="submit"
                name="submit"
                className="bg-blue hover:bg-green transition-colors duration-700 ease-in text-beige rounded-lg px-8 pt-3 pb-2 leading-snug uppercase focus:outline-none"
                onClick={submit}
            >
                {!isSending ? (<span>Send</span>) : <FontAwesomeIcon icon={['fas', 'spinner']} pulse />}
            </button>
        </form>
    )
}

export default ContactForm