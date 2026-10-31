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
                        <div className="list-item-contact"><a href="https://github.com/francis23b" target="_blank"><img src={github} alt="Github" /></a></div>
                        {/* <div className="list-item-contact"><a href=""><img src={whatsapp} alt="Whatsapp" /></a></div> */}
                        <div className="list-item-contact"><a href="https://www.linkedin.com/in/francis-allan-m-broqueza-8544b5111/"><img src={linkedin} alt="Linkedin" /></a></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts