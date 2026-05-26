import "../Github/Github.css"
import { FaGithub } from 'react-icons/fa' 
const Github = () => {
  return (
    <a className="github-link" href="https://github.com/edilsomar" target="_blank">
      <p> <FaGithub className="github-icon"/> Github</p>
    </a>
  );
};

export default Github;
