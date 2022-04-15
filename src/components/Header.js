import ThemeSwitcher from "./ThemeSwitcher"

export const Header = (props) => {
    return (
        <header className={`header container ${props.darkMode}`} id="top">
            <div className="logo">
            <i className="fas fa-layer-group"></i>
            {/*<h1 className="head-title">Lars Gessner</h1>*/}
            </div>
            <nav className="head-navbar">
                <a className="nav-link" href="/about">About</a>
                <a className="nav-link" href="/projects">Projects</a>
                <a className="nav-link" href="/skills">Skills</a>
                <a className="nav-link" href="/contact">Contact</a>
            </nav>
            <ThemeSwitcher darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
        </header> 
    )
}
