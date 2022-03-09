import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <>
        <header>
      <div className='container'>
        <div className='inner-content'>
            <div className='brand'>
              <Link to="/">Movie info</Link>
            </div>
            <ul className='nav-links'>
                <li>
                    <Link to="/" className='btn'>Get your movie</Link>
                </li>
                <li>
                   <Link to="/favoris">favoris</Link> 
                </li>
               

            </ul>

        </div>
      </div>
    </header>
     </>
  )
}

export default Header


