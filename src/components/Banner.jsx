import './Banner.css'

function Banner() {
  return (      
<section className="banner" id="banner">
    <div className="custom-container">
        <div className="banner-content" id="home">
            <h1 className="banner-title mb-10">Hi, I am</h1>
            <h2 className="banner-name">Francis Broqueza.</h2>
            <p className="banner-intro mb-10">I turn ideas into websites.</p>
            <p className="banner-description mb-20">I’m a Front-End and WordPress Developer with a passion for creating visually appealing, user-friendly websites. I work with HTML, CSS, JavaScript, PHP and WordPress, and I’m always eager to learn new technologies and improve my skills.</p>
            <div className="fb-cta">
              <a href="#contact" className="btn btn-primary" id='contact-me'>Get In Touch</a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Banner