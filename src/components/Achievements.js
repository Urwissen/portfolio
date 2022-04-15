import React from "react";
export const Achievements = (props) => {
    const [profile, setProfile] = React.useState("name")
    async function fetchingData() {
        const response = await fetch("https://teamtreehouse.com/larsgessner.json")
        const data = await response.json()
        console.log(data)
        setProfile(data)
    }

    React.useEffect(() => {
        fetchingData()    
    }, [])


    return(
        <div className="achievements">
            <p>First</p>
            <p>Some Content</p>
            <p>{profile.name}</p>
            <p>Total points: {profile.points.total}</p>
            <p>JavaScript: {profile.points.JavaScript}</p>
        </div>

    )
}
