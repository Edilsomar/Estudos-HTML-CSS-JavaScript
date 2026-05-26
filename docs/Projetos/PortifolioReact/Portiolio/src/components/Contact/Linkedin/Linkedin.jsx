import '../Linkedin/Linkedin.css'
import { FaLinkedin } from 'react-icons/fa' 
const Linkedin = () => {
  return (
    <a className="linkedin-link" href="https://www.linkedin.com/in/edilsomar-oliveira-de-jesus-0a8450338?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank">
          <p> <FaLinkedin className="linkedin-icon"/> Linkedin</p>
      </a>
  );
};

export default Linkedin;
