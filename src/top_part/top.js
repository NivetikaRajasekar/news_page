import React from "react";
import "./top.css"
import Web from "../assets/images/image-web-3-mobile.jpg"
export default function Top(){
    return(
        <div id="top--container">
            <div id="left--part">
                <div id="top--image">
                    <img src={Web}></img>
                </div>
                <div id="image--down--part">
                    <h1>The Bright Future of Web 3.0?</h1>
                    <div id="image--down--right">
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                            But is it really fulfilling its promise?</p>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
            <div id="right--part">
                <h1>New</h1>
                <div id="content--1">
                  <h3>Hydrogen VS Electric Cars</h3>
                  <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div id="line--1"></div>
                <div id="content--2">
                    <h3>The Downsides of AI Artistry</h3>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div id="line--2"></div>
                <div id="content--3">
                    <h3>Is VC Funding Drying Up?</h3>
                    <p>  Private funding by VC firms is down 50% YOY. 
                        We take a look at what that means.</p>
                </div>
            </div>
        </div>
    )
}