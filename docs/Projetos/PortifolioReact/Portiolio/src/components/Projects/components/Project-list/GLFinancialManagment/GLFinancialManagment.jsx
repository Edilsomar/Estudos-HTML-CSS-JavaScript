import { FaJsSquare, FaHtml5, FaCss3 } from 'react-icons/fa'
import "../Project.css";
import imgProject from "./img/GLFinancialManagmentImg.png";
const GLFinancialManagment = () => {
  return (
    <a
      className="project-link"
      href="https://gpgestao.page.gd/?i=1"
      target="_blank"
    >
      <h3 className="project-name">GL Financial Management</h3>
      <img className="project-img" src={imgProject} alt="" />
      <h4 className="project-description"> Financial Dashboard</h4>
      <div className="project-stacks">
        <p className="stack-name"><FaHtml5 className="html-icon"/> HTML</p>
        <p className="stack-name"><FaCss3 className="css-icon"/>CSS</p>
        <p className="stack-name"><FaJsSquare className="js-icon"/>JS</p>
      </div>
    </a>
  );
};

export default GLFinancialManagment;
