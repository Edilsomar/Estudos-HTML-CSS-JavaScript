import { FaJsSquare, FaHtml5, FaCss3, FaReact } from 'react-icons/fa'
import "../Project.css";
import imgProject from "./img/PortifolioImg.png";
const Portifolio = () => {
  return (
    <a
      className="project-link"
      href="#home"
    >
      <h3 className="project-name">Edilsomar.Dev</h3>
      <img className="project-img" src={imgProject} alt="" />
      <h4 className="project-description">My Portifólio</h4>
      <div className="project-stacks">
        <p className="stack-name"><FaHtml5 className="html-icon"/> HTML</p>
        <p className="stack-name"><FaCss3 className="css-icon"/>CSS</p>
        <p className="stack-name"><FaJsSquare className="js-icon"/>JS</p>
        <p className="stack-name"><FaReact className="react-icon"/>REACT</p>
      </div>
    </a>
  );
};

export default Portifolio;
