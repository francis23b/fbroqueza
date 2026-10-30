import Preloader from './components/Preloader.jsx'
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Contacts from './components/Contacts.jsx'
import Email from './components/Email.jsx'
import Projects from './components/Projects.jsx'
import Form from './components/Form.jsx'
import Contact from './components/Contact.jsx'

import './App.css'

function App() {
  return (
    <>
      <Preloader />
      <Header />
      <Banner />
      <About />
      <Skills />
      <Contacts />
      <Email />
      <Projects />
      <Form />
      <Contact />
    </>
  )
}

export default App