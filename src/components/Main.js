import me from "./me.jpg"
import meDark from "./me-dark.jpg"
import meRainbow from "./me-rainbow.jpg"
import gaming from "./gaming.png"
import {ProjectCard} from './ProjectCard'
import {Skills} from "./Skills"
import {Achievements} from "./Achievements"

export const Main = (props) => {
    return(
        <main className={`main container ${props.darkMode}`}>
            {/*<h2 className="section-title">About me</h2>*/}
            <article className="about">
                <img className="me" src={props.darkMode === "dark" ? meDark : props.darkMode === "rainbow" ? meRainbow : me} alt="This is me, Lars" />
                <div className="bio">
                    <p><span className="bio-hi">Hi there,</span>
                    <br></br>
                    <br></br>
                    my name is  <span className="highlight">Lars</span>. A self taught <span className="highlight">front-end developer</span> from Germany. If you want to use digitization for your own <strong>benefit</strong>, <strong>chance</strong>, more <strong>profits</strong>? All possibilities can be created for you!</p> 
                    <div className="flex">
                        <button className="action-btn">hire me!</button>
                        <button className="action-btn cv"><i class="bi bi-file-earmark-person"></i></button>
                    </div>
                </div>
                
                <img className="gaming" src={gaming} alt="some art" /> 
            </article>
            

            <h2 className="section-title">Projects</h2>
            <article className="projects-container">
                
                <ProjectCard 
                    image="https://live.staticflickr.com/65535/52007875353_20a20c7442_b.jpg"
                    title="Digital Business Card"
                    description="Get a figma file and rebuild it in React"
                    github="https://github.com/Urwissen/digital-business-card"
                    demo="https://digital-business-card-six.vercel.app/"
                />

                <ProjectCard 
                    image="https://live.staticflickr.com/65535/52006806577_3b2d6940e1_b.jpg" 
                    title="Minimal todo app"
                    description="Ceare a minimal todo-app with react. Using statemanagement, hooks to remove, add and highlight tasks."
                    github="https://github.com/Urwissen/minimal-todo"
                    demo="https://minimal-todo-olive.vercel.app"
                />

                <ProjectCard 
                    image="https://live.staticflickr.com/65535/52008080819_9973ee876f_b.jpg"
                    title="Quiz Game"
                    description="A basic quiz game using Typescript and React."
                    github="https://github.com/Urwissen/quiz-game"
                    demo="https://react-typescript-quiz-game.vercel.app"
                />

                <ProjectCard 
                    image="https://live.staticflickr.com/65535/52007903508_ae790b2603_b.jpg"
                    title="Beautiful Form"
                    description="A form project with WCAG in mind."
                    github="https://github.com/Urwissen/form-project"
                    demo="https://form-project-alpha.vercel.app"
                />

                <ProjectCard 
                    image="https://live.staticflickr.com/65535/52007913658_0b2ddf16fc_b.jpg"
                    title="Portfolio 1.0"
                    description="My first portfolio site. Using React, hooks & state-management, Bootstrap icons, and my lovly 3 color theme slider! All from scratch, with lots of ducktape! "
                    github="https://github.com/Urwissen"
                    demo="https://github.com/Urwissen"
                />

                <ProjectCard 
                    image="https://live.staticflickr.com/65535/52008108314_93df243b4f_b.jpg"
                    title="Unit Converter"
                    description="A pure vanilla javascript unit converter"
                    github="https://github.com/Urwissen/unit-converter"
                    demo="https://unit-converter-eight.vercel.app"
                />


            </article>

            <h2 className="section-title">Skills</h2>

            <Skills />

            <h2 className="section-title">Achievements</h2>
            <Achievements darkMode={props.darkMode}/>
            

        </main>
    )
    
}
