import './navbar.css';
import logo from '../../assets/yacht-rental-dubai-logo.png';
import barIcon from '../../assets/barIcon.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bar-icon" onClick={toggleMenu}>
        <img src={barIcon} alt="" />
      </div>
      <nav className={`navbar lr-space ${sticky ? 'after-nav' : ''}`} id='hero'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className={`nav-lists ${menuVisible ? '' : 'hide'}`}>
          <ul className='center'>
            <li>
              <Link to='hero' smooth={true} offset={0} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to='all-yachts' smooth={true} offset={0} duration={500}>
                Yachts
              </Link>
            </li>
            
            <li>
              <Link to='fishing' smooth={true} offset={0} duration={500}>
                Fishing Trips
              </Link>
            </li>
            <li>
              <Link to='charter' smooth={true} offset={0} duration={500}>
                Charter Yachts
              </Link>
            </li>
            <li>
              <Link to='packages' smooth={true} offset={0} duration={500}>
                Packages
              </Link>
            </li>
            <li>
              <Link to='nye' smooth={true} offset={0} duration={500}>
                NYE
              </Link>
            </li>
            <li>
              <Link to='about' smooth={true} offset={0} duration={500}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
