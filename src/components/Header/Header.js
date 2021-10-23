import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

import searchIcon from '../../assets/img_197388.png'

const Header = ({ loggedIn }) => {
  return (
    <header>
      <Link to='/' >
        <h1>CinemaCentral</h1>
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
