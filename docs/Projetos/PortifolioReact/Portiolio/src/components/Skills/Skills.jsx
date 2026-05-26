import { FaJsSquare, FaHtml5, FaCss3 ,FaGithub, FaReact} from 'react-icons/fa'
import './Skills.css'
import minhaFoto from './img/perfil.jpg'
const Skills = () => {
  return (
    <section  id="skills"className="skills-container">
        <h2>SKILLS</h2>
        <div className="content-container">
            <div className="about-me-container">
                <img src={minhaFoto} alt="My-image"/>
                <div className="about-me-description">
                    <h3>ABOUT ME</h3>
                    <p>I am a dedicated front-end developer building modern web applications with HTML, CSS, JS, and React. I also study English with a focus on an international career!</p>
                </div>
            </div>
            <ul className="skills-list">
                <li> <FaJsSquare className="JsIcon" /> JavaScript (ES6+)</li>
                <li> <FaHtml5 className="HtmlIcon" /> HTML5 (Intermediate)</li>
                <li> <FaCss3 className="CssIcon" /> CSS3 (Intermediate)</li>
                <li> <FaGithub className="GithubIcon" /> Git / Github (Begginer)</li>
                <li> <FaReact  className="ReactIcon" /> React (Beginner-intermediate)</li>
            </ul>
        </div>
    </section>        
)
}

export default Skills