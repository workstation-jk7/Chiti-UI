import * as React from "react"
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

import './Header.css';

const Header: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="header-container">
        <div className="header-logo-menu">
            <HamburgerMenu isOpen={menuOpen} onClose={toggleMenu} />
            <img width='70' className="ml-3" src='/images/chiti-horizontal-logo.svg'/>
        </div>
        {children}
    </div>
  )
}

export default Header; 