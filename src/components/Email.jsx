import '../components/Email.css'
import { useEffect, useState } from 'react'

function Email () {
    const [showContact, setShowContact] = useState(false)

    useEffect(() => {
    function handleScroll() {
        setShowContact(window.scrollY >= 900)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
    }, [])
    return (
        <section className="email position-fixed">
            <div className="custom-container">
                <div className="email-container position-relative disp-flex align-center gap-1">
                    <div className="border-email"></div>
                    <div className="get-in-touch-email disp-flex align-center justify-between width100">
                        <a href="mailto:francismbroqueza@gmail.com">francismbroqueza@gmail.com</a>
                        <button
                            type="button"
                            id="contact-me"
                            className={`floating-contact ${showContact ? 'is-visible' : ''}`}
                            disabled={!showContact}>
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Email