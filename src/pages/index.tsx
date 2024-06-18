import React, { useState, useEffect, ChangeEvent, } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../css/style.css'
import Search from "../components/search";
import { CSDisplay } from "../components/display";
import { ArtDisplay } from "../components/display";
import { Link } from "gatsby"
import { useTypewriter, Cursor } from "react-simple-typewriter";


//import images and rename them they will cause error lines :/
import selfie from "../images/selfie.jpg"
import crop from "../images/selfie-crop.png"
import code_c from "../images/code_color.png"
import paint_c from "../images/paint_color.png"
import tool_c from "../images/tool_color.png"
import tmgif from "../images/tmgif.gif"
import spy from "../images/spy.gif"
import glade from "../images/glade.gif"

const resume = "https://docs.google.com/document/d/1dxo9rDxAv9IVku2JF9y46FON6_9qHrL4/edit?usp=sharing&ouid=114561894919444571904&rtpof=true&sd=true"

const IndexPage: React.FC<PageProps> = () => {
  const [Tabmain, setTabmain] = useState<number>(0);

  const [text] = useTypewriter({
    words: ['code things', 'art things', 'game things', 'animation things'],
    loop: [],
  })

  return (
    <React.Fragment>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
      </head>
      <main>
        <div className="intro">
          <img className="selfie" src = {selfie}/>
          <div className="intro-text">
            <div id = "hello">
              Hi, I'm Kenneth
            </div>
            <div id = "des">
              I make {text}<Cursor/>
            </div>
            <div className = "links">
              <Link to="/about">About</Link> · <a href="mailto: kennethsieu14@gmail.com">Email</a> · <a href="https://www.linkedin.com/in/kennethsieu/" target="_blank">LinkedIn</a> · <a href= {resume} target="_blank">Resume</a>
            </div>
          </div>
        </div>
        <div className="intro-mobile">
          <img className="selfie-crop" src = {crop}/>
          <div className = "hello-mobile">
              Hi, I'm Kenneth
            </div>
            <div id = "des-mobile">
              I make {text}<Cursor/>
            </div>
            <div className = "links-mobile">
              <Link to="/about">About</Link> · <a href="mailto: kennethsieu14@gmail.com">Email</a> · <a href="https://www.linkedin.com/in/kennethsieu/" target="_blank">LinkedIn</a> · <a href= {resume} target="_blank">Resume</a>
            </div>
        </div>
        <div className="content">
          <div className="tabs">
            <div className={Tabmain === 0 ? "tabactive tab": "tab"} onClick={() => setTabmain(0)}>
             <img className="icon" src = {code_c}/>
             <div className="tab_name"> Code </div>
            </div>
            <div className={Tabmain === 1 ? "tabactive tab": "tab"} onClick={() => setTabmain(1)}>
              <img className="icon" src = {paint_c}/>
              <div className="tab_name"> Art </div>
            </div>
            <div className={Tabmain === 2 ? "tabactive tab": "tab"} onClick={() => setTabmain(2)}>
              <img className="icon" src = {tool_c}/>
              <div className="tab_name"> Tools </div>
            </div>
          </div>
          <div className="contentbody">
            <div className={Tabmain === 0 ? "content-active tab-content main-content" : "tab-content" }>
              <CSDisplay/>
            </div>
            <div className={Tabmain === 1 ? "content-active tab-content main-content" : "tab-content" }>
              <ArtDisplay/>
            </div>
            <div className={Tabmain === 2 ? "content-active tab-content main-content" : "tab-content" }>
              <Search />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Kenneth's Portfolio</title>







