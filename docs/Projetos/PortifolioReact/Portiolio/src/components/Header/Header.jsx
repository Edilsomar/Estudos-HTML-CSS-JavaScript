import './Header.css'
const Header = () => {
  return (
    <nav className="header-nav">
        <div className="logo">
            <h2>Edilsomar<span>.Dev</span></h2>
        </div>
        <ul className="nav-menu">
            <li><a className="item-menu" href="#home">Home</a></li>
            <li><a className="item-menu" href="#skills">Skills</a></li>
            <li><a className="item-menu" href="#projects">Projects</a></li>
            <li><a className="item-menu" href="#contact">Social Midias</a></li>
        </ul>
    </nav>
  )
}

export default Header