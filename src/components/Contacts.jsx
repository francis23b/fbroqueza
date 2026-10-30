import './Contacts.css'
import github from '../assets/image/fixed/github.png'
import linkedin from '../assets/image/fixed/linkedin.png'
import whatsapp from '../assets/image/fixed/whatsapp.png'

function Contacts() {
    return (
        <section className="contacts position-fixed">
            <div className="container">
                <div className="contact-listing position-relative">
                    <div className="listing disp-flex flex-column justify-between flex-wrap justify-center gap-1">
                        <div className="list-item-contact"><img src={github} alt="Github" /></div>
                        <div className="list-item-contact"><img src={whatsapp} alt="Whatsapp" /></div>
                        <div className="list-item-contact"><img src={linkedin} alt="Linkedin" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts