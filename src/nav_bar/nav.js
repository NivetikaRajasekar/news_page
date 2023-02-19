import React from "react";
import {ReactComponent as Brand} from "../assets/images/logo.svg"
import {ReactComponent as Menu} from "../assets/images/icon-menu.svg"

import { useState } from "react";
import './nav.css';
export default function Navbar () {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Menu />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  )
}