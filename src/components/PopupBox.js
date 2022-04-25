import React from 'react'

function PopupBox(props) {
    const { handlePopup, content } = props

    const cv = <h4>I am your CV, print me!</h4>
    const hire = <h4>I am your contact form to make it easy for hiring me!</h4>

    return (
        <div className="popup-box">
            <button className="popup-box-btn" onClick={(event) => handlePopup(event, "close")}>Close</button>
            <h3>I POP UP!</h3>
            {content === "hire" ? hire : cv}
            <p>Contact me! Talk with me! Work with me!</p>
        </div>
    )
}

export default PopupBox