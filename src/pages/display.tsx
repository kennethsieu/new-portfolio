import React, { useState, useEffect, ChangeEvent, } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../css/style.css'

//import images and rename them they will cause error lines :/
import selfie from "../images/selfie.jpg"
import code_c from "../images/code_color.png"
import paint_c from "../images/paint_color.png"
import tool_c from "../images/tool_color.png"
import tmgif from "../images/tmgif.gif"
import spy from "../images/spy.gif"
import glade from "../images/glade.gif"


export function CSDisplay() {

    return (
        <React.Fragment>
            <div className="tw" style={{ backgroundImage: `url(${tmgif})`}}></div>
            {ProjectDisplay(tw)}
            <iframe src="https://www.youtube.com/embed/SYO-4HqnuiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  picture-in-picture; web-share"></iframe>
        
            <div className="spy" style={{ backgroundImage: `url(${spy})`}}></div>
            {SpyDisplay(spyfx)}
        
            <div className="glade" style={{ backgroundImage: `url(${glade})`}}></div>
        {GladeDisplay(glad)}
        </React.Fragment>
    )
}

export function ArtDisplay() {
    return (
        <React.Fragment>
            {ProjectDisplay(ink)}
            <iframe src="https://www.youtube.com/embed/BCw64MGOHVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </React.Fragment>
    )
}

/*
    If anyone is looking at this, it's not as bad as it looks. The only reason Spy and Glade display exist is that i needed to have hyperlinks and i can't do that with a for loop. I need to parse urls, but atm im trying to code this ASAP and making a copy is the easiest option. 
*/

const tw = {
  name: "",
  tdlr: ["Dark fantasy visual novel made using the Unity Engine", 
    "Devloped branching story logic and dialogue", 
    "Slowly converting it into a card game", 
    "WIP / Currently archived in favor of working on a bigger group project"],
  summary: ["The Twilight Market is a project started in 2021. Originally, it was a dark fantasy visual novel made in Godot. However, our team decided to expand the scope and turn it into a card game, transferring it to the Unity Engine.", "Currently, I've done a little of everything aside from 2D Art. Some contributions include: Coding, Designing Game Systems, Dialogue, Animation, Rigging and Creating 3D assets. We stopped working on it at them moment to work on unnamed Heist Game."],
  extra: ["Tools Used: Unity, C#, Yarn Spinner, Clip Studio Paint", "The art was made by my friend Calvin! Check him out @calvin_beeman_weber on instagram"],
}

const spyfx = {
  name: "",
  tdlr: ["Promotional material I created for my dance team to create hype", 
    "Thematically appropriate visual effects",
    "Created using a combination of React.js, HTML, and CSS",],

  summary: ["OPERATION: SPYFX was a dance team I directed in Spring 2023. To generate hype, I created an interactive website", "The site is password protected, includes glitchy visual elements, and is accessible on mobile and PC. Everything was created using a combination of React.js, Typescript, and CSS without any additional plugins."],
  extra: ["Tools Used: React.js, HTML, CSS, Gatsby(static hosting)"]
}


const glad = {
  name: "",
  tdlr: ["The first game I ever made", "Card based battle system that is similar to Slay the Spire", "Pitched concept and thematic", "“Developed over a period of two months with three other people”"],
  summary: ["This is a game I pitched and developed over a period of eight weeks with three other people.", "I created the overall concept and programmed the card-based fighting system. Although it is a rough, it's inspired me to keep doing game development"],
  extra: ["Tools Used: Unity"]
}

const ink = {
  name: "Ink",
  tdlr:["3D animated video created with Maya", "Modeled, rigged, skinned, and animated the monster", "Handled camera control and post-production editing"],
  summary: ["'Ink' is an animation created using Maya for UCBugg, a student-run 3D animation class at UC Berkeley. I took charge of modeling, rigging, skinning, and animating the monster. Additionally, I handled both the camera control and post-production editing.", "My partner, Cynthia Xiong, pitched the concept and took responsibility for modeling and skinning all other assets. Additionally, she handled the coloring, shading, and lighting of every asset."],
  extra: ["Tools: Maya, Adobe Premiere"]
}

interface Project {
    name: string
    tdlr: string[]
    summary: string[]
    extra: string[]
  }
  
  function ProjectDisplay(project: Project) {
    const [tab, setTab] = useState<number>(0)
    
  
    function tdlr(strs: string[]) {
      const listItems = strs.map((elem) => <li>{elem}</li>);
      return (<ul> {listItems} </ul>)
    }
  
    function summary(strs: string[]) {
      const listItems = strs.map((elem) => <p>{elem}</p>);
      return (<div> {listItems} </div>)
    }
  
    return (
      <React.Fragment>
        {project.name != "" && (<div className="title"> {project.name} </div>)}
        <div className="projectbody">
          <div className="projecttabs">
            <div className= {tab === 0 ? "projecttabactive" : "projecttab"} onClick={() => setTab(0)}> td;lr </div>
            <div className= {tab === 1 ? "projecttabactive" : "projecttab"} onClick={() => setTab(1)}> full </div>
            <div className= {tab === 2 ? "projecttabactive" : "projecttab"} onClick={() => setTab(2)}> extra </div>
          </div>
          <div className="projectmain">
            <div className={tab === 0 ? "content-active tab-content" : "tab-content"}>
              {tdlr(project.tdlr)}
            </div>
            <div className={tab === 1 ? "content-active tab-content" : "tab-content"}>
              {summary(project.summary)}
            </div>
            <div className={tab === 2 ? "content-active tab-content": "tab-content"}>
              {summary(project.extra)}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
  
  function SpyDisplay(project: Project) {
    const [tab, setTab] = useState<number>(0)
  
    function tdlr(strs: string[]) {
      const listItems = strs.map((elem) => <li>{elem}</li>);
      return (<React.Fragment><ul> {listItems} </ul> <p> You can view the site <a href="https://tinyurl.com/operationspyfx" target="_blank">here</a>, the password is PEANUTS</p></React.Fragment>)
    }
  
    function summary(strs: string[]) {
      const listItems = strs.map((elem) => <p>{elem}</p>);
      return (<div> {listItems} </div>)
    }
  
    return (
      <React.Fragment>
        {project.name != "" && (<div className="title"> {project.name} </div>)}
        <div className="projectbody">
          <div className="projecttabs">
            <div className= {tab === 0 ? "projecttabactive" : "projecttab"} onClick={() => setTab(0)}> td;lr </div>
            <div className= {tab === 1 ? "projecttabactive" : "projecttab"} onClick={() => setTab(1)}> full </div>
            <div className= {tab === 2 ? "projecttabactive" : "projecttab"} onClick={() => setTab(2)}> extra </div>
          </div>
          <div className="projectmain">
            <div className={tab === 0 ? "content-active tab-content" : "tab-content"}>
              {tdlr(project.tdlr)}
            </div>
            <div className={tab === 1 ? "content-active tab-content" : "tab-content"}>
              {summary(project.summary)}
            </div>
            <div className={tab === 2 ? "content-active tab-content": "tab-content"}>
              {summary(project.extra)}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
  
  function GladeDisplay(project: Project) {
    const [tab, setTab] = useState<number>(0)
  
  
    function tdlr(strs: string[]) {
      const listItems = strs.map((elem) => <li>{elem}</li>);
      return (<React.Fragment><ul> {listItems} </ul> <p> You can play the game on browser on <a href="https://fire2ken.itch.io/glade-of-the-gray." target="_blank">itch.io</a></p></React.Fragment>)
    }
  
    function summary(strs: string[]) {
      const listItems = strs.map((elem) => <p>{elem}</p>);
      return (<div> {listItems} </div>)
    }
  
    return (
      <React.Fragment>
        {project.name != "" && (<div className="title"> {project.name} </div>)}
        <div className="projectbody">
          <div className="projecttabs">
            <div className= {tab === 0 ? "projecttabactive" : "projecttab"} onClick={() => setTab(0)}> td;lr </div>
            <div className= {tab === 1 ? "projecttabactive" : "projecttab"} onClick={() => setTab(1)}> full </div>
            <div className= {tab === 2 ? "projecttabactive" : "projecttab"} onClick={() => setTab(2)}> extra </div>
          </div>
          <div className="projectmain">
            <div className={tab === 0 ? "content-active tab-content" : "tab-content"}>
              {tdlr(project.tdlr)}
            </div>
            <div className={tab === 1 ? "content-active tab-content" : "tab-content"}>
              {summary(project.summary)}
            </div>
            <div className={tab === 2 ? "content-active tab-content": "tab-content"}>
              {summary(project.extra)}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }


