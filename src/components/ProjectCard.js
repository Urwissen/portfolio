export function ProjectCard({url, title, description}) {
   return(
    <div className={"project-card"}>
        <img src={url} alt="a project"></img>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
   ) 
}
