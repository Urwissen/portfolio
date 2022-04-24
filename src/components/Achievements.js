import React from "react";
import AchievementCard from "./AchievementCard";

export const Achievements = (props) => {
    const [profile, setProfile] = React.useState("name")
    const [isLoading, setIsLoading] = React.useState(true)
    const {darkMode} = props

    async function fetchingData() {
        const response = await fetch("https://teamtreehouse.com/larsgessner.json")
        const data = await response.json()
        console.log(await data)
        setProfile(await data)
        setIsLoading(false)
    }

    React.useEffect(() => {
        fetchingData()    
    }, [])

    console.log(profile)
    return(
        <div className={`achievement-card-wrapper ${darkMode}`}>
            
            <AchievementCard title="Treehouse" profile={profile} isLoading={isLoading}/>
            <AchievementCard title="Codecademy" profile={null} isLoading={null} externalLink="https://www.codecademy.com/profiles/Urwissen"/>
            <AchievementCard  title="Scrimba" profile={null} isLoading={null} externalLink="https://scrimba.com/certificate/u6rx3NHQ/gfrontend"/>
        </div>
        
    )
}
