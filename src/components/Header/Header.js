import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

import searchIcon from '../../assets/img_197388.png'
import clippy from '../../assets/reel_swell_guy.png'

const Header = ({ loggedIn }) => {
  return (
    <header>
      <Link to='/' >
        <article className="title-with-logo">
          <h1>CinemaCentral</h1>
          <img className="clippy" src={clippy} alt='cartoon film reel mascot' />
        </article>
      </Link>
      {loggedIn &&
        <nav>
          <span className="search">
            <img className="search-icon" onClick={() => document.querySelector(".search-bar").classList.toggle("active")} src={searchIcon} alt='search icon' />
            <input className="search-bar" type="text" placeholder="search by movie or genre..."/>
          </span>
        </nav>
      }
    </header>
  )
}

export default Header
