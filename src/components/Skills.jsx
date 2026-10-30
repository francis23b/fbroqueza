import { useState} from 'react'
import './Skills.css'

import html from '../assets/image/skills/html.png'
import css from '../assets/image/skills/css.png'
import javascipt from '../assets/image/skills/js.png'
import php from '../assets/image/skills/php.png'
import wordpress from '../assets/image/skills/wordpress.png'
import react from '../assets/image/skills/react.png'
import gutenberg from '../assets/image/skills/gutenberg.png'
import woocommerce from '../assets/image/skills/woocommerce.png'
import elementor from '../assets/image/skills/elementor.png'
import squarespace from '../assets/image/skills/square-space.png'
import wpbakery from '../assets/image/skills/wp-bakery.png'
import zoho from '../assets/image/skills/zoho.png'
import seo from '../assets/image/skills/seo.png'
import odoo from '../assets/image/skills/odoo.png'
import acf from '../assets/image/skills/acf.png'
import divi from '../assets/image/skills/divi.png'
import gtm from '../assets/image/skills/gtm.png'
import ga4 from '../assets/image/skills/ga4.png'
import sitehost from '../assets/image/skills/sitehost.png'
import rocketnet from '../assets/image/skills/rocketnet.png'
import cpanel from '../assets/image/skills/cpanel.png'
import cloudflare from '../assets/image/skills/cloudflare.png'
import zcom from '../assets/image/skills/zcom.png'
import imanila from '../assets/image/skills/imanila.png'
import jquery from '../assets/image/skills/jquery.png'
import figma from '../assets/image/skills/figma.png'
import photoshop from '../assets/image/skills/photoshop.png'
import adobexd from '../assets/image/skills/xd.png'



const categories = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    skills: [
      { name: 'HTML', logo: html },
      { name: 'CSS', logo: css },
      { name: 'JavaScript', logo: javascipt },
      { name: 'jQuery', logo: jquery },
      { name: 'React', logo: react },
    ],
  },
  {
    id: 'wordpress',
    name: 'WordPress Development',
    skills: [
      { name: 'WordPress', logo: wordpress },
      { name: 'PHP', logo: php },
      { name: 'Advanced Custom Fields (ACF)', logo: acf },
      { name: 'WooCommerce', logo: woocommerce },
    ],
  },
  {
    id: 'builders',
    name: 'Website & Page Builders',
    skills: [
      { name: 'Elementor', logo: elementor },
      { name: 'WPBakery', logo: wpbakery },
      { name: 'Divi', logo: divi },
      { name: 'Gutenberg', logo: gutenberg },
      { name: 'Squarespace', logo: squarespace },
    ],
  },
  {
    id: 'design',
    name: 'Design Tools',
    skills: [
      { name: 'Figma', logo: figma },
      { name: 'Adobe Photoshop', logo: photoshop },
      { name: 'Adobe XD', logo: adobexd },
    ],
  },
  {
    id: 'crm',
    name: 'CRM Tools',
    skills: [
      { name: 'Zoho', logo: zoho },
      { name: 'Odoo', logo: odoo },
    ],
  },
  {
    id: 'seo',
    name: 'SEO & Analytics',
    skills: [
      { name: 'On-Page SEO', logo: seo },
      { name: 'Google Analytics 4', logo: ga4 },
      { name: 'Google Tag Manager', logo: gtm },
    ],
  },
  {
    id: 'hosting',
    name: 'Hosting & Website Management',
    skills: [
      { name: 'cPanel', logo: cpanel },
      { name: 'Cloudflare', logo: cloudflare },
      { name: 'SiteHost', logo: sitehost },
      { name: 'Rocket.net', logo: rocketnet },
      { name: 'iManila', logo: imanila },
      { name: 'Z.com', logo: zcom },
    ],
  },
]

function Skills() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)

  const selectedCategory = categories.find(
    (category) => category.id === activeCategory
  )

  return (
    <section className="skills" id="skills">
      <div className="custom-container">
        <div className="skill-heading position-relative disp-flex align-center">
          <h2>Skills &amp; Tools</h2>
        </div>

        <p>
          The technologies and tools I use to build responsive websites,
          create custom features, and manage content.
        </p>

        <div className="skills-tools disp-flex align-center">
          <div className="skills-nav" role="group" aria-label="Skills categories">
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={`skills-nav-item ${
                  activeCategory === category.id ? 'active' : ''
                }`}
                aria-pressed={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <ul className="skills-logos disp-flex justify-center " aria-label={selectedCategory.name}>
            {selectedCategory.skills.map((skill) => (
              <li className='skill-item position-relative' key={skill.name}>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  title={skill.name}
                  width="80"
                  height="80"
                />

                <span className="skill-tooltip">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

        
      </div>
    </section>
  )
}

export default Skills