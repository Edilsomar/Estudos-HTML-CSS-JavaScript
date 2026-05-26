import './Projects.css'
import GLFinancialManagment from './components/Project-list/GLFinancialManagment/GLFinancialManagment'
import NTTDataProject from './components/Project-list/NTTDataProject/NTTDataProject'
import Portifolio from './components/Project-list/Portifolio/Portifolio'
import StickQI from './components/Project-list/StickQI/StickQI'
const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2>PROJECTS</h2>
      <div className="projects-content-container">
        <NTTDataProject />
        <GLFinancialManagment />
        <StickQI />
        <Portifolio />
      </div>
        
    </section>
  )
}

export default Projects