import React, { useState, useEffect, ChangeEvent, } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../css/style.css'
import { Link } from "gatsby"


const AboutPage: React.FC<PageProps> = () => {

    return (
        <React.Fragment>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
            </head>
            <main>
                <div className="about">
                    <div className="about-title">About</div>
                    <div className="about-text">
                        <div className="about-sentence"><b>Computer Science Major from UC Berkeley, Class of 2023</b></div>
                        <div className="about-sentence">During college, I dedicated my time to learning and teaching a wide variety of subjects. I was the person who sat next to you and debugged your mangled code for 45 minutes</div>
                        <div className="about-sentence">I led Game Design and Development (GDD), participated in Computer Science Mentors (CSM), and even directed my own dance team</div>
                        <div className="about-sentence">Post-college, I have been focused on learning art and animation. Currently, I am part of Static Pole Studios, an indie startup where I handle a most of the animation and design work for no pay (for now)</div>
                    </div>

                    <Link className="mainlink" to="/">Back to Main</Link>
                </div>
            </main>
        </React.Fragment>
    )
}


export default AboutPage

export const Head: HeadFC = () => <title>About</title>