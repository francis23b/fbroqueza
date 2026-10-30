import BeyondCoding from './BeyondCoding.jsx'


import aboutMe from '../assets/image/about-me.jpg'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
        <div className="custom-container">
          <div className="about-content">
            <div className="row about-row disp-flex flex-justify-content align-center">
              <div className="col-left width50">
                <div className="col-left-heading position-relative disp-flex align-center mb-10">
                  <h2>About Me</h2>
                </div>

                <img class="about-me-image mb-20" src={aboutMe} alt="About Me" />
                
                <div className="col-left-content mb-30">
                  <p className="mb10">I’m Francis, a Front-End and WordPress Developer who started working in web development in 2021. I enjoy turning ideas into visually appealing, responsive websites that are easy to navigate and use.</p>
                  <p className="mb10">I work with HTML, CSS, JavaScript, PHP, and WordPress to build custom layouts and features. My experience includes custom themes, multisite websites, dynamic content with Advanced Custom Fields, and interactive forms. I focus on creating websites that work well for visitors and are easy for teams to manage.</p>
                  <p className="mb20">I’m always looking for ways to improve my skills and solve new challenges. I’m currently expanding my knowledge of React and applying it through hands-on projects. I enjoy learning by building and finding practical ways to make websites look better and work smoothly.</p>
                </div>
                <BeyondCoding />
              </div>
              <div className="col-right width50">
                <div className="col-right-content">
                  <div className="col-right-image position-relative">
                    
                    <img class="about-image"  src={aboutMe} alt="About Me" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
    </section>
  )
}

export default About