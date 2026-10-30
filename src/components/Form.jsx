import { useEffect, useRef, useState } from 'react'
import './Form.css'
import resumePdf from '../assets/image/FBroquezaResume.pdf'

function Form() {
  const dialogRef = useRef(null)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    function handleClick(event) {
      if (!(event.target instanceof Element)) return

      const trigger = event.target.closest('#resume-download')

      if (!trigger) return

      event.preventDefault()

      if (!dialogRef.current.open) {
        dialogRef.current.showModal()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()

    if (status === 'sending' || status === 'success') return

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
      const response = await fetch('https://steep-mud-72fc.francismbroqueza.workers.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok || result.success !== true) {
        throw new Error('Resume request failed')
      }

      setStatus('success')
      form.reset()

      window.location.assign(resumePdf)
    } catch {
      setStatus('error')
    }
  }

  const isSending = status === 'sending'
  const isSuccess = status === 'success'

  return (
    <dialog
      ref={dialogRef}
      className="resume-modal"
      aria-labelledby="resume-modal-title"
      aria-describedby="resume-modal-description"
    >
      <div className="resume-modal-content">
        <button
          type="button"
          className="resume-modal-close"
          aria-label="Close form"
          onClick={() => dialogRef.current.close()}
        >
          ×
        </button>

        <h2 id="resume-modal-title">Let's Talk</h2>

        <p
          id="resume-modal-description"
          className="resume-modal-description"
        >
          Send me a message and receive my resume as a PDF attachment
          by email.
        </p>

        <form
          className="resume-form"
          onSubmit={handleSubmit}
          aria-busy={isSending}
        >
          <fieldset
            className="resume-fields"
            disabled={isSending || isSuccess}
          >
            <legend className="resume-sr-only">Your details</legend>

            <div className="resume-field">

              <input
                id="resume-name"
                placeholder='Name *'
                name="name"
                type="text"
                autoComplete="name"
                maxLength={100}
                required
              />
            </div>

            <div className="resume-field"> <input
                id="resume-email"
                placeholder='Email *'
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                required
              />
            </div>

            <div className="resume-field">

              <input
                id="resume-company"
                placeholder='Company (optional)'
                name="company"
                type="text"
                autoComplete="organization"
                maxLength={150}
              />
            </div>

            <div className="resume-field"><input
                id="resume-subject"
                placeholder='Subject *'
                name="subject"
                type="text"
                maxLength={200}
                required
              />
            </div>

            <div className="resume-field"><textarea
                id="resume-message"
                placeholder='Message *'
                name="message"
                rows={5}
                maxLength={5000}
                required
              />
            </div>

            <button type="submit" className="resume-submit">
              {isSending
                ? 'Sending…'
                : isSuccess
                  ? 'Request Sent'
                  : 'Download Resume'}
            </button>
          </fieldset>

          <p
            className={`resume-status resume-status-${status}`}
            role="status"
            aria-atomic="true"
          >
            {status === 'invalid' &&
              'Please complete all required fields.'}

            {isSuccess &&
              'Your request has been accepted. Please check your inbox and spam folder for my resume.'}

            {status === 'error' &&
              'Your request could not be sent. Please try again later.'}
          </p>
        </form>
      </div>
    </dialog>
  )
}

export default Form