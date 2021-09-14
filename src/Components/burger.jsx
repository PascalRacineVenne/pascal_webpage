import React from 'react';
import "./burger.css";

const Burger = () => {
  const handleClick = (e) => {
    console.log(e.target);
  }

  return (
    <button className="burger__StyledBurger" onClick={handleClick}>
      <div className="ham-box">
        <div className= "ham-box-inner"></div>
      </div>
    </button>
  )
}

export default Burger;
