export function ProjectCard({image, title, description, github, demo}) {
    const card = document.getElementById("project-card")
    const cardImg = document.getElementById("project-card--img")
    const cardTitle = document.getElementById("project-card--title")
    const cardDescription = document.getElementById("project-card--desc")

    

    function handleEvent() {
        console.log("over")
    }


    return(
        <div className={"project-card"}>
            <img className="project-card--img" src={image} alt="a project" onMouseOver={handleEvent}></img>
            <h3 className="project-card--title">{title}</h3>
            <p className="project-card--desc">{description}</p>
            <div className="wrapper">
                <i className="bi bi-github" onClick={()=> window.open(github, "_blank")}></i>
                <i className="bi bi-globe" onClick={()=> window.open(demo, "_blank")}></i>
            </div>
        </div>
    ) 
}
