import React from 'react';
import "./burger.css";

const Burger = ({menuOpen, setMenuOpen}) => {
  return (
    <button
      className='burger__StyledBurger' onClick={() => setMenuOpen(!menuOpen)}>
      <div className="ham-box">
        <div className= {menuOpen ? "ham-box-inner ham-box-inner_Active" : "ham-box-inner"}></div>
      </div>
    </button>
  )
}

export default Burger;
