import React, { useState } from 'react';
import '../Styles/MenuBar.css';
import HamburgerIcon from '../Icons/SimpleHamburgerIcon.svg';

const MenuBar = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="menuBase" >
      <button
        className="hamburgerButtonEnter"
        onClick={() => setOpen(true)}
      >
        <img src={HamburgerIcon} alt="Hamburger Icon" />
      </button>
      <p className="menuTitle">CSS Testing</p>
      <div
        className={`hamburgerMenu ${isOpen ? 'hamburgerMenuisOpen' : 'hamburgerMenuisClosed'}`}
      >
        <p className="hamburgerTitle">Test</p>
        <button
          className="hamburgerButtonExit"
          onClick={() => setOpen(false)}
        >
          Exit
        </button>
      </div>
    </div>
  )
};

export default MenuBar;