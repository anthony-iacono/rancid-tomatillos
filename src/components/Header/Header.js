import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import searchIcon from '../../assets/img_197388.png'
import clippy from '../../assets/reel_swell_guy.png'

const Header = ({ loggedIn, handleChangeInSearch, searchTerms}) => {
  return (
    <header>
      <Link to='/' >
        <article className="title-with-logo">
          <h1 className='title'>Cinema Central</h1>
          <img className="clippy" src={clippy} alt='cartoon film reel mascot' />
        </article>
      </Link>
      {loggedIn &&
        <nav>
          <span className="search">
            <img className="search-icon" onClick={() => document.querySelector(".search-bar").classList.toggle("active")} src={searchIcon} alt='search icon' />
            <input
              onChange={ event => handleChangeInSearch(event) }
              name='searchTerms'
              value={ searchTerms }
              className="search-bar"
              type="text"
              placeholder="search by movie title..."
            />
          </span>
        </nav>
      }
    </header>
  )
}

export default Header
