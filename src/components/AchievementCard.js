import React from 'react'

function AchievementCard(props) {
    const {darkMode, title, profile, isLoading, externalLink} = props

    const badges = isLoading ? "loading..." :  profile ? profile.badges[Math.floor(Math.random() * profile.badges.length -1)] :null

    console.log(badges)
    return (
        <div className="achievements">
            <h3>{title}</h3>
            {externalLink ? <iframe src={externalLink} title="site"></iframe> : 
            <div className='achievements-stats'>
                
                {!isLoading ? 
                <>
                <p>Profile: {profile.name}</p>
                <h5>Points Total: {profile.points.total}</h5>
                <p><i className="fab fa-js-square" aria-hidden="true"></i> {profile.points.JavaScript}</p>
                <p><i className="fab fa-html5" aria-hidden="true"></i> {profile.points.HTML}</p>
                <p><i className="fab fa-css3-alt" aria-hidden="true"></i> {profile.points.CSS}</p>
                <h5>Random Badge</h5>
                <p>Badge: {badges.name}</p>
                {/* Greeting to Mr. Koenig ;-) */}
                <p>Date: {badges.earned_date.split("T")[0].split("-").reverse().join(".")}</p>
                </> : <p>Loading...</p>}
            </div>
            }
        </div>
    )
}

export default AchievementCard