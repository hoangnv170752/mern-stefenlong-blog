import React, { useContext } from "react"
import logo from "../../assets/images/logo.jpg"
import "./header.css"
import { User } from "./User"
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            {/* <img src={logo} alt='logo' width='100px' /> */}
            Made by Stefen SPI
          </div>
          <nav>
            {/* <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul> */}
            {nav.map((link) => (
              <Link to={link.url}>
                <img src={logo} alt='logo' width='100px' />
              </Link>
            ))}
          </nav>
          <div className='account flexCenter'>
            <User />
          </div>
        </div>
      </header>
    </>
  )
}
