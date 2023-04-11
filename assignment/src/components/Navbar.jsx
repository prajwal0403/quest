import React from 'react';
import logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <div className="nav-container d-flex pt-3 px-5">
      <div className="first-part d-flex">
        <div>
            <img src={logo} alt='logo'/>
        </div>
        <div>Newsletter</div>
        <div>Blog</div>
        <div>docs</div>
      </div>
      <div className="second-part d-flex">
        <div>Sign-up</div>
        <div>Get full demo</div>
      </div>
    </div>
  );
}
