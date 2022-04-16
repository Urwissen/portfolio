import React from "react";
export const Achievements = (props) => {
    const [profile, setProfile] = React.useState("name")
    const [isLoading, setIsLoading] = React.useState(true)


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


    return(
        <div className="achievements">
            <p>First</p>
            <p>Some Content</p>
            {!isLoading ? 
            <>
            <p>{profile.name}</p>
            <p>Total points: {profile.points.total}</p>
            <p>JavaScript points: {profile.points.JavaScript}</p>
            </> : <p>Loading...</p>}
            
        </div>

    )
}
