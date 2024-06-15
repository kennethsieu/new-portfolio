import React, { useState, useEffect, ChangeEvent, } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../css/style.css'
import tools from "./tools"



/** 
 * I really should figure out how to use labels, for now an if statement will work 
 ***/

export default function Search() {
    const [search, setSearch] = useState('')
    const [cs, setCs] = useState<boolean>(false)
    const [art, setArt] = useState<boolean>(false)
    const [cert, setCert] = useState<boolean>(false)
    const [used, setUsed] = useState<boolean>(false)

    function filtertags() {
        var temptools = tools
        if(cs) {
            temptools = temptools.filter((item) => item.cs)
        }
        if(art) {
            temptools = temptools.filter((item) => item.art)
        }
        if(cert) {
            temptools = temptools.filter((item) => item.cert)
        }
        if(used) {
            temptools = temptools.filter((item) => item.freq)
        }
        
        if(search.toLowerCase() != '' ) {
            temptools = temptools.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        if (temptools.length == 0) {
            return (<div className="noresults"> Sorry, I'd be happy to learn if you give me an opportunity </div>)
        } else {
            return (
                temptools.map((item) =>
                    <div className="tool">
                        <img className = "icon2" src={item.png}/>
                        {item.name}
                    </div>
            )
        )}

    }

    return(
        <React.Fragment>
            <div className="search">
                <div className="searchtitle"> The long list of things I've used </div>
                <input className = "searchbar" onChange = {(e) => setSearch(e.target.value)} placeholder="Search ..."/>
                <div className="tags">
                    <div className= {cs ? "activetag tag" : "tag"} onClick={() => setCs(!cs)}> CS related </div>
                    <div className= {art ? "activetag tag" : "tag"} onClick={()=> setArt(!art)}> Art related </div>
                    <div className= {cert ? "activetag tag" : "tag"} onClick={() => setCert(!cert)}> Certifications </div>
                    <div className= {used ? "activetag tag" : "tag"} onClick={() => setUsed(!used)}> Frequently used </div> 
                </div>
            </div>
            {filtertags()}
        </React.Fragment>
    )    
}

