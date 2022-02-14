import React from "react"
import profileImage from "../images/IMG.jpg"

export default function info() {
    return(
        <div className = "info">
            <img src = {profileImage} alt ="hemanth smiling" />
            <p className="name">Hemanth Ravula</p>
            <p className ="role">Frontend Developer</p>
            <a href = "https://hmnth07.github.io/" className = "website">hemanth.website</a>

            <span className = "buttons">
                <a href = "mailto:hmnth07@gmail.com" className = "btn--email">
                <i class="fa-solid fa-envelope"></i> Email</a>
                <a href = "https://www.linkedin.com/in/hemanthravula/" className = "btn--linkedin">
                <i class="fa-brands fa-linkedin"></i>LinkedIn</a>
            </span>
        </div>
    )
}