export const Footer = (props) => {
    return(
        <footer className={`footer container ${props.darkMode}`}>
            <a href="#top"><i class="fas fa-arrow-up"></i></a>
            <div className="contact-container">
            <h3>Contact</h3>
                <i class="bi bi-github"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-telegram"></i>
                <i class="bi bi-geo-alt-fill"></i>
            </div>
            <aside class="copyright">Build with the <i class="fa fa-rebel" aria-hidden="true"></i> in Stuttgart</aside>
        </footer> 
    )      
}

