

export const Header = (params) => {
    return (
        <header className="header container" id="top">
            <div className="logo">
            <i class="fas fa-layer-group"></i>
            {/*<h1 className="head-title">Lars Gessner</h1>*/}
            </div>
            <nav className="head-navbar">
                <a className="nav-link" href="/about">About</a>
                <a className="nav-link" href="/projects">Projects</a>
                <a className="nav-link" href="/skills">Skills</a>
                <a className="nav-link" href="/contact">Contact</a>
            </nav>
            <div className="theme">
            <i class="fas fa-sun"></i>
            <i class="fas fa-moon"></i>
            <i class="fas fa-star"></i>
            </div>
            
            {/* <div className="theme">
                <button className="btn-nav btn-light">Light</button>
                <button className="btn-nav btn-dark">Dark</button>
                <button className="btn-nav btn-uni">Unicorn</button>
            </div> */}
        </header> 
    )
   
}
