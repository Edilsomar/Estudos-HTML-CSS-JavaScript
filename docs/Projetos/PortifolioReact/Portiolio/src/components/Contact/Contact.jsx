import "./Contact.css"
import Email from "./Email/Email"
import Github from "./Github/Github"
import Linkedin from "./Linkedin/Linkedin"

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
        <div className="contact-content">
          <Github />
          <Linkedin />
          <Email />
        </div>
    </section>
  )
}

export default Contact