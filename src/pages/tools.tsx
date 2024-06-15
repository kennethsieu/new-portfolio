import React, { useState, useEffect, ChangeEvent, } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../css/style.css'

import premiere from "../images/icons/premiere.png"
import c from "../images/icons/c.png"
import csharp from "../images/icons/csharp.png"
import cplusplus from "../images/icons/c++.png"
import comptia from "../images/icons/comptia.png"
import csp from "../images/icons/csp.png"
import css from "../images/icons/css.png"
import figma from "../images/icons/figma.png"
import gatsby from "../images/icons/gatsby.png"
import ai from "../images/icons/generativeai.png"
import go from "../images/icons/go.png"
import godo from "../images/icons/godo.png"
import google from "../images/icons/google.png"
import html from "../images/icons/html.png"
import java from "../images/icons/java.png"
import javascript from "../images/icons/javascript.png"
import live2d from "../images/icons/live2d.png"
import maya from "../images/icons/maya.png"
import ps from "../images/icons/ps.png"
import python from "../images/icons/python.png"
import react from "../images/icons/react.png"
import sql from "../images/icons/sql.png"
import unity from "../images/icons/unity.png"
import unreal from "../images/icons/unreal.png"


export const tools=  [ 
    {
        name: "Adobe Premiere",
        png: premiere,
        cs: false,
        art: true,
        cert: false,
        freq: true,
    },
    {
        name: "C",
        png: c,
        cs: true,
        art: false,
        cert: false,
        freq: false,
    },
    {
        name: "C#",
        png: csharp,
        cs: true,
        art: false,
        cert: false,
        freq: true,
    },
    {
        name: "C++",
        png: cplusplus,
        cs: true,
        art: false,
        cert: false,
        freq: false,
    },
    {
        name: "CSS",
        png: css,
        cs: true,
        art: false,
        cert: false,
        freq: true,
    },
    {
        name: "Clip Studio Paint",
        png: csp,
        cs: false,
        art: true,
        cert: false,
        freq: true,
    },
    {
        name: "CompTIA Security+",
        png: comptia,
        cs: true,
        art: false,
        cert: true,
        freq: true,
    },
    {
        name: "Figma",
        png: figma,
        cs: false,
        art: true,
        cert: false,
        freq: true,
    },
    {
        name: "Gatsby",
        png: gatsby,
        cs: true,
        art: false,
        cert: false,
        freq: true,
    },
    {
        name: "Generative AI",
        png: ai,
        cs: true,
        art: false,
        cert: false,
        freq: false,
    },
    {
        name: "Go",
        png: go,
        cs: true,
        art: false,
        cert: false,
        freq: false,
    },
    {
        name: "Godot",
        png: godo,
        cs: true,
        art: false,
        cert: false,
        freq: false,
    },
    {
        name: "Google Cyber Secuirty",
        png: google,
        cs: true,
        art: false,
        cert: true,
        freq: true,
    },
    {
        name: "HTML",
        png: html,
        cs: true,
        art: false,
        cert: false,
        freq: true,
    },
    {
        name: "Java",
        png: java,
        cs: true,
        art: false,
        cert: false,
        freq: false,
    },
    {
        name: "JavaScript",
        png: javascript,
        cs: true,
        art: false,
        cert: false,
        freq: true,
    },
    {
        name: "Live2D",
        png: live2d,
        cs: false,
        art: true,
        cert: false,
        freq: true,
    },
    {
        name: "Maya",
        png: maya,
        cs: false,
        art: true,
        cert: false,
        freq: false,
    },
    {
        name: "Photoshop",
        png: ps,
        cs: false,
        art: true,
        cert: false,
        freq: false,
    },
    {
        name: "Python",
        png: python,
        cs: true,
        art: false,
        cert: false,
        freq: true,
    },    {
        name: "React",
        png: react,
        cs: true,
        art: false,
        cert: false,
        freq: true,
    },    {
        name: "SQL",
        png: sql,
        cs: true,
        art: false,
        cert: false,
        freq: false,
    },    {
        name: "Unity",
        png: unity,
        cs: true,
        art: false,
        cert: false,
        freq: true,
    },    {
        name: "Unreal",
        png: unreal,
        cs: true,
        art: false,
        cert: false,
        freq: false,
    }
]