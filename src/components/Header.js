import React from "react"
import ThemeSwitcher from "./ThemeSwitcher"

export const Header = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className={`header container ${props.darkMode}`} id="top">
            <div className="logo-box">
            <i className="bi bi-slash-square-fill logo-icon"></i>
            {/* <i className="fas fa-layer-group logo-icon"></i> */}
            {/*<h1 className="head-title">Lars Gessner</h1>*/}
            </div>
            
            <i className="nav-link bi bi-list burger" onClick={(event) => {
                const mobileNav = document.querySelector(".burger-navbar")
                mobileNav.style.display = isOpen ? "none" :"flex"
                setIsOpen(prev => !prev)
            }}></i>
            <nav className="burger-navbar">
                <a className="nav-link" href="/about">About</a>
                <a className="nav-link" href="/projects">Projects</a>
                <a className="nav-link" href="/skills">Skills</a>
                <a className="nav-link" href="/contact">Contact</a>
            </nav>
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
