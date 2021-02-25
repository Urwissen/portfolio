import me from "./me2.png"
import gaming from "./gaming.png"
import {ProjectCard} from './ProjectCard'

export const Main = (params) => {
    return(
        <main className="main container">
            <h2 className="section-title">About me</h2>
            <article className="about">
                <img className="me" src={me} alt="This is me, Lars" />
                <div className="bio">
                <p><span className="bio-hi">Hi there,</span>
                <br></br>
                <br></br>
                you want to use digitization for your own <strong>benefit</strong>, <strong>chance</strong>, more <strong>profits</strong>! All possibilities can be created for you.</p> 
                <button className="about-btn">My Work</button>
                </div>
                
                <img className="gaming" src={gaming} alt="some art" /> 
            </article>
            

            <h2 className="section-title">Projects</h2>
            <article className="projects-container">
                
                <ProjectCard 
                    url="https://images.pexels.com/photos/5324967/pexels-photo-5324967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940}"
                    title="Some Project 1"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
                />

                <ProjectCard 
                    url="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    title="Some Project 2"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
                />

                <ProjectCard 
                    url="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="Some Project 3"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt"
                />
            </article>

            <h2 className="section-title">Skills</h2>
            <article className="skills-container">
                <div className="skill-card">
                    <i class="fab fa-sketch"></i> 
                    <h3>UI-UX</h3>
                    <p><em>the color and shape, shows the path</em></p>  
                </div>

                <div className="skill-card">
                    <i class="fab fa-html5" aria-hidden="true"></i> 
                    <h3>HTML</h3>
                    <p><em>basic architecture and accesebility</em></p>  
                </div>

                <div className="skill-card">
                <i class="fab fa-css3-alt" aria-hidden="true"></i> 
                    <h3>CSS</h3>
                    <p><em>bring things together!</em></p>  
                </div>

                <div className="skill-card">
                    <i class="fab fa-js-square"></i> 
                    <h3>JavaScript</h3>
                    <p><em>interactivity for you</em></p>  
                </div>

                <div className="skill-card">
                    <i class="fab fa-react"></i> 
                    <h3>React</h3>
                    <p><em>scalable, fast, multi-platform</em></p>  
                </div>
            </article>
            

        </main>
    )
    
}
