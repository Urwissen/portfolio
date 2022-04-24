export function ProjectCard({image, title, description, github, demo}) {

    return(
        <div className={"project-card"}>
            <img className="project-card--img" src={image} alt="a project"></img>
            <h3 className="project-card--title">{title}</h3>
            <p className="project-card--desc">{description}</p>
            <div className="wrapper">
                <i className="bi bi-github" onClick={()=> window.open(github, "_blank")}></i>
                <i className="bi bi-globe" onClick={()=> window.open(demo, "_blank")}></i>
            </div>
        </div>
    ) 
}
