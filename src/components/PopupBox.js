import React from 'react'

function PopupBox(props) {
    const { handlePopup, content } = props

    const cv = <h1>I am your CV, print me!</h1>
    const hire = <h1>I am your contact form to make it easy for hiring me!</h1>

    return (
        <div className="popup-box">
            <button className="popup-box-btn" onClick={(event) => handlePopup(event, "close")}>Close</button>
            <h2>I POP UP!</h2>
            {content === "hire" ? hire : cv}
            <p>Contact me! Talk with me! Work with me!</p>
        </div>
    )
}

export default PopupBox