import React from "react"

import me from "./me.jpg"
import meDark from "./me-dark.jpg"
import meRainbow from "./me-rainbow.jpg"
import gaming from "./gaming.png"
import {ProjectCard} from './ProjectCard'
import {Skills} from "./Skills"
import {Achievements} from "./Achievements"
import PopupBox from "./PopupBox"

export const Main = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [content, setContent]  = React.useState("hire")

    function handlePopup(event, action) {
        console.log(action)
        action !== "close" && setContent(prev => action === "hire" ? "hire" : "cv")
        setIsOpen(prev => !prev)    
    }

    return(
        <main className={`main container ${props.darkMode}`}>
            {/*<h2 className="section-title">About me</h2>*/}
            {isOpen ? <PopupBox handlePopup={handlePopup} content={content}/> : null}
            <article className="about">
                <img className="me" src={props.darkMode === "dark" ? meDark : props.darkMode === "rainbow" ? meRainbow : me} alt="This is me, Lars" />
                <div className="bio">
                    <p><span className="bio-hi">Hi there,</span>
                    <br></br>
                    <br></br>
                    my name is  <span className="highlight">Lars</span>. A self-taught <span className="highlight">front-end developer</span> from Germany. If you want to use digitization for your own <strong>benefit</strong>, <strong>chance</strong>, more <strong>profits</strong>? All possibilities can be created for you!</p> 
                    <div className="flex">
                        <button className="action-btn" onClick={(event) => handlePopup(event, "hire")}>hire me!</button>
                        <button className="action-btn cv" onClick={(event) => handlePopup(event, "cv")}><i className="bi bi-file-earmark-person"></i></button>
                    </div>
                </div>
                
                <img className="gaming" src={gaming} alt="some art" /> 
            </article>
            

            <h2 className="section-title">Projects <i class="bi bi-kanban-fill"></i></h2>
            <article className="projects-container">
                
                <ProjectCard 
                    image="https://user-images.githubusercontent.com/17276621/152983548-bd7ba076-b699-44f9-8e88-59c0a5638550.png"
                    title="Digital Business Card"
                    description="The challenge was to get a figma file and rebuild it in React"
                    github="https://github.com/Urwissen/digital-business-card"
                    demo="https://digital-business-card-six.vercel.app/"
                />

                <ProjectCard 
                    image="https://user-images.githubusercontent.com/17276621/153633065-366f9859-6940-4422-9f7e-421dcbc5872b.png" 
                    title="Minimal todo app"
                    description="Ceare a minimal todo-app with react. Using state-management, hooks to remove, add and highlight tasks."
                    github="https://github.com/Urwissen/minimal-todo"
                    demo="https://minimal-todo-olive.vercel.app"
                />

                <ProjectCard 
                    image="https://user-images.githubusercontent.com/17276621/162696227-b3baa117-a3c4-4a05-9748-6cf17c5702c2.jpg"
                    title="Quiz Game"
                    description="A basic quiz game using Typescript and React. Use an API to fetch some JSON data and handle it."
                    github="https://github.com/Urwissen/quiz-game"
                    demo="https://react-typescript-quiz-game.vercel.app"
                />

                <ProjectCard 
                    image="https://user-images.githubusercontent.com/17276621/154099410-491e89f0-f869-4117-8b4a-24296b167683.png"
                    title="Accessible Form"
                    description="A form project with WCAG in mind."
                    github="https://github.com/Urwissen/form-project"
                    demo="https://form-project-alpha.vercel.app"
                />

                <ProjectCard 
                    image="https://user-images.githubusercontent.com/17276621/258180536-2aad95bb-1737-4d4b-a637-f0841c18b404.png"
                    title="Portfolio BETA"
                    description="My first portfolio site. Using React, hooks & state management, Bootstrap icons, and my lovely 3 color theme slider! All from scratch, with lots of ducktape! "
                    github="https://github.com/Urwissen/portfolio"
                    demo="https://portfolio-three-tau-36.vercel.app/"
                />

                <ProjectCard 
                    image="https://user-images.githubusercontent.com/17276621/157244341-12c21822-2a8d-46cd-b704-9069e0ec8ca8.jpg"
                    title="Unit Converter"
                    description="A pure vanilla javascript unit converter"
                    github="https://github.com/Urwissen/unit-converter"
                    demo="https://unit-converter-eight.vercel.app"
                />

            </article>

            <h2 className="section-title">Skills <i class="bi bi-wrench-adjustable-circle-fill"></i></h2>

            <Skills />

            <h2 className="section-title">Milestones <i class="bi bi-trophy-fill"></i></h2>
            <Achievements darkMode={props.darkMode}/>
            
        </main>
    )
    
}
