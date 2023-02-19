import React from "react";
import "./bottom.css";
import Retro from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";
import Growth from "../assets/images/image-gaming-growth.jpg";
export default function Bottom(){
    return (
      <div id="bottom--part">
        <div id="box--1">
            <img src={Retro}/>
            <div id="img--1--content">
               <h2>01</h2>
                <h3> Reviving Retro PCs</h3>
               <p> What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div id="box--2">
            <img src={Laptops}/>
            <div id="img--2--content">
               <h2>02</h2>
               <h3>Top 10 Laptops of 2022</h3>
               <p> Our best picks for various needs and budgets.</p>
            </div>
        </div>
        <div id="box--3">
            <img src={Growth}/>
            <div id="img--3--content">
               <h2>03</h2>
               <h3>The Growth of Gaming</h3>
               <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
      </div>  
    );
}