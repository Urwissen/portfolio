import React from 'react'

function AchievementCard(props) {
    const {darkMode, title, profile, isLoading, externalLink} = props

    const badges = isLoading ? "loading..." :  profile ? profile.badges[Math.floor(Math.random() * (profile.badges.length -1) )] :null

    console.log(profile)
    return (
        <div className="achievements">
            <h3>{title}</h3>
            {externalLink ? <iframe src={externalLink} title="site"></iframe> : 
            <div className='achievements-stats'>
                
                {!isLoading ? 
                <>
                <div className='flex space-between'>
                    <p><strong>Profile:</strong> <a href="https://teamtreehouse.com/larsgessner" target="_blank" rel="noreferrer">{profile.name}</a></p>
                    <img className='profile-pic' src={profile.gravatar_url} alt="Me on treehouse"/>
                </div>
                <h5>Points Total: {profile.points.total} (incl. non listet)</h5>
                <div className='flex-row-wrap'>
                    <p className='padding-low'><i className="fab fa-js-square" title="JavaScript Points"></i> {profile.points.JavaScript}p</p>
                    <p className='padding-low'><i className="fab fa-html5" title="HTML Points"></i> {profile.points["HTML"]}p</p>
                    <p className='padding-low'><i className="fab fa-css3-alt" title="CSS Points"></i> {profile.points["CSS"]}p</p>
                    <p className='padding-low'><i className="bi bi-robot" title="Dev Tools"></i> {profile.points["Development Tools"]}p</p>
                </div>
                <h5>Random Badge:</h5>
                <div className='random-badge-div'>
                    <p><strong>Badge:</strong> {badges.name}</p>
                    {/* Greeting to Mr. Koenig ;-) */}
                    <p><strong>Earned Date:</strong> {badges.earned_date.split("T")[0].split("-").reverse().join(".")}</p>
                    <a href={badges.url} target="_blank" rel="noreferrer"><i class="bi bi-journal-code"></i> Learn the same</a>
                </div>
                
                </> : <p>Loading...</p>}
            </div>
            }
        </div>
    )
}

export default AchievementCard