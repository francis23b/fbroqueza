import { useEffect, useRef, useState } from 'react'
import './Contact.css'

function Contact() {
  const dialogRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const isSending = status === 'sending'

  useEffect(() => {
    function openContact(event) {
      if (!(event.target instanceof Element)) return

      const trigger = event.target.closest('#contact-me')

      if (!trigger) return

      event.preventDefault()

      const dialog = dialogRef.current

      if (dialog && !dialog.open) {
        dialog.showModal()
      }
    }

    document.addEventListener('click', openContact)

    return () => {
      document.removeEventListener('click', openContact)
    }
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()

    if (isSending) return

    const form = event.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get('name').trim(),
      email: formData.get('email').trim(),
      company: formData.get('company').trim(),
      subject: formData.get('subject').trim(),
      message: formData.get('message').trim(),
    }

    if (!data.name || !data.email || !data.subject || !data.message) {
      setStatus('invalid')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok || result.success !== true) {
        throw new Error('Contact submission failed')
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="contact-modal"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >
      <div className="contact-modal-content">
        <button
          type="button"
          className="contact-modal-close"
          aria-label="Close contact form"
          onClick={() => dialogRef.current.close()}
        >
          ×
        </button>

        <h2 id="contact-modal-title">Get in Touch</h2>

        <p
          id="contact-modal-description"
          className="contact-modal-description"
        >
          Have a project in mind? Send me a message and let’s discuss
          how I can help.
        </p>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          aria-busy={isSending}
        >
          <fieldset className="contact-fields" disabled={isSending}>
            <legend className="contact-sr-only">Your details</legend>

            <div className="contact-field">

              <input
                id="contact-name"
                placeholder='Name *'
                name="name"
                type="text"
                autoComplete="name"
                maxLength={100}
                required
              />
            </div>

            <div className="contact-field">

              <input
                id="contact-email"
                placeholder='Email *'
                name="email"
                type="email"
                autoComplete="email"
                maxLength={300}
                required
              />
            </div>

            <div className="contact-field">

              <input
                id="contact-company"
                placeholder='Company (optional)'
                name="company"
                type="text"
                autoComplete="organization"
                maxLength={150}
              />
            </div>

            <div className="contact-field">

              <input
                id="contact-subject"
                placeholder='Subject *'
                name="subject"
                type="text"
                maxLength={200}
                required
              />
            </div>

            <div className="contact-field">

              <textarea
                id="contact-message"
                placeholder='Message *'
                name="message"
                rows={5}
                maxLength={5000}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              {isSending ? 'Sending…' : 'Submit'}
            </button>
          </fieldset>

          <p
            className={`contact-status contact-status-${status}`}
            role="status"
            aria-atomic="true"
          >
            {status === 'invalid' &&
              'Please complete all required fields.'}

            {status === 'success' &&
              'Thank you! Your message has been received.'}

            {status === 'error' &&
              'Your message could not be sent. Please try again later.'}
          </p>
        </form>
      </div>
    </dialog>
  )
}

export default Contact