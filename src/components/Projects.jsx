import '../components/Projects.css'

import hushtec from '../assets/image/projects/hushtec.jpg'
import cpl from '../assets/image/projects/cpl.jpg'
import exemplar from '../assets/image/projects/exemplar.jpg'
import maricars from '../assets/image/projects/maricars.jpg'
import suds from '../assets/image/projects/suds.jpg'
import lederph from '../assets/image/projects/leaderdotph.jpg'
import deafph from '../assets/image/projects/deafph.jpg'
import aimhigh from '../assets/image/projects/aimhigh.jpg'
import aluminumdepot from '../assets/image/projects/aluminumdepot.jpg'

const projects = [
    {
        name: 'Hushtec',
        description: 'Hushtec designs noise control systems for construction, industrial, and infrastructure projects, offering acoustic barriers, noise walls, and custom solutions tailored to each project’s requirements.',
        image: hushtec,
        link: 'https://www.hushtecsolutions.com/'
    },
    {
        name: 'CPL Group',
        description: 'CPL Group provides solutions designed to improve operational efficiency and workplace safety across a range of industries.',
        image: cpl,
        link: 'https://cplgroup.com/'
    },
    {
        name: 'Exemplar',
        description: 'Exemplar specializes in sheet metal aircraft assembly, maintenance, and modification while developing skilled professionals through hands-on vocational training.',
        image: exemplar,
        link: 'https://exemplar.com.ph/'
    },
    {
        name: 'Maricars Chocolate Cakes',
        description: 'Founded by doctor and actress Maricar Reyes, Maricar’s Chocolate Cakes brings together her passion for baking and the shared creativity of her husband and team to create cakes and delicious treats.',
        image: maricars,
        link: 'https://maricars.ph/'
    },
    {
        name: 'Suds',
        description: 'A clothing care provider built on trust, quality, and attentive service. Suds combines dependable care with a commitment to innovation to meet its customers’ everyday laundry needs.',
        image: suds,
        link: 'https://suds.com.ph/'
    },
    {
        name: 'Leader Ph',
        description: 'An organization dedicated to empowering individuals to lead with purpose, positively influence their communities, and create meaningful change that reaches beyond boundaries.',
        image: lederph,
        link: 'https://leader.ph/'
    },
    {
        name: 'Deaf Ph',
        description: 'A Christian organization serving the Deaf community by sharing God’s love and developing Deaf leaders equipped to serve as missionaries, teachers, and advocates within their communities.',
        image: deafph,
        link: 'https://deaf.ph/'
    },
    {
        name: 'Aim High Tolling Solutions',
        description: 'A specialist in fruit and herbal powder spray-drying, transforming raw ingredients into high-quality powders through processes designed to preserve their flavor and nutritional value.',
        image: aimhigh,
        link: 'https://aimhightollingsolutions.com.ph/'
    },
    {
        name: 'Aluminum Depot',
        description: 'A supplier of aluminum products and accessories focused on consistent quality and evolving customer needs. Aluminum Depot values customer feedback to continuously improve its product offerings and service.',
        image: aluminumdepot,
        link: 'https://aluminumdepot.ph/'
    },
]

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="custom-container">
                <div className="project-heading disp-flex align-center">
                    <h2>My Projects</h2>
                </div>
                <div className="projects-flex disp-flex flex-wrap flex-align-center">
                    {projects.map((project) => (
                        <div className="project-item">
                            <div className="card">
                                <h3>{project.name}</h3>
                                <div className="card-img position-relative mb-20">
                                    <div className="card-img-overlay position-absolute"><a href={project.link} target='_blank'>View Website</a></div>
                                    <img src={project.image} alt={project.name} loading='lazy' />
                                    
                                </div>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects