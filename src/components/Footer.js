export const Footer = (props) => {
    return(
        <footer className={`footer container ${props.darkMode}`}>
            <a href="#top"><i className="fas fa-arrow-up"></i></a>
            <div className="contact-container">
                <h3>Contact</h3>
                <i className="bi bi-github" onClick={()=> window.open("https://github.com/Urwissen", "_blank")}></i>
                <i className="bi bi-linkedin" onClick={()=> window.open("https://www.linkedin.com/in/lars-gessner-b34674a2/", "_blank")}></i>
                <i className="bi bi-telegram" onClick={()=> window.open("https://t.me/+aiXivhVxMqY1YmQy", "_blank")}></i>
                <i className="bi bi-envelope-fill" onClick={() => window.location = 'mailto:lgessner@poste.de'}></i>
            </div>
            <aside className="copyright">Build with the <i className="fa fa-rebel" aria-hidden="true"></i> in Stuttgart</aside>
        </footer> 
    )      
}

