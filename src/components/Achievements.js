import React from "react";
import AchievementCard from "./AchievementCard";
import img from "./scrimba.png"

export const Achievements = (props) => {
    const [profile, setProfile] = React.useState("name")
    const [isLoading, setIsLoading] = React.useState(true)
    const {darkMode} = props
    /* const url = "https://teamtreehouse.com/larsgessner.json"

    async function fetchingData() {
        const response = await fetch(url)
        const data = await response.json()
        setProfile(await data)
        setIsLoading(false)
    }

    React.useEffect(() => {
        fetchingData()    
    }, []) */

    return(
        <div className={`achievement-card-wrapper ${darkMode}`}>
            
            {/* <AchievementCard title="Treehouse" profile={profile} isLoading={isLoading}/> */}
            <AchievementCard title="Codecademy" profile={null} isLoading={null} externalLink="https://www.codecademy.com/profiles/Urwissen"/>
            <AchievementCard title="Scrimba" profile={null} isLoading={null}  image={img}/>
        </div>
        
    )
}
