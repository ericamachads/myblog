import React, { Component } from 'react'
import { Link,NavLink } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
        <nav className="nav-wrapper brown lighten-1" >
          <div className="container">
          <Link className="brand-logo" to="/">
            <img className='imageLogo' src="https://i.postimg.cc/66CmnVxG/logo.png" alt="Minha Logo"/>
          </Link>
            <ul className="right">
              <li><NavLink exact to="/"><h4>Home</h4></NavLink></li>
              <li><NavLink to='/about'><h4>About</h4></NavLink></li>
              <li><NavLink to='/contact'><h4>Contacts</h4></NavLink></li>
            </ul>
          </div>
        </nav> 
    )
  }
}

export default Navbar
