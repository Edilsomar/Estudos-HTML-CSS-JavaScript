import "../Email/Email.css"
import { SiGmail } from "react-icons/si";
const Email = () => {
  return (
    <a 
      className="email-link" 
      href="https://mail.google.com/mail/?view=cm&fs=1&to=oliveiraedilsomar@gmail.com"
      target="_blank" 
      rel="noreferrer"
    >
      <p> <SiGmail className="email-icon"/> Gmail</p>
    </a>
  );
};

export default Email;
