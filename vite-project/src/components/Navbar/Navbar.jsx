import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

// Utility functions for scrolling
const scrollToPosition = (position) => {
  window.scrollTo(0, position);
};

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchedMenuItems, setSearchedMenuItems] = useState([]);

  const menuItems = [
    { id: 1, name: 'Muffins' },
    { id: 2, name: 'Cinnamon Rolls' },
    { id: 3, name: 'Waffle' },
    { id: 4, name: 'Sandwich' },
    { id: 5, name: 'Brownie' },
    { id: 6, name: 'Scones' },
    { id: 7, name: 'Coffee' },
    { id: 8, name: 'Cheesecake' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredItems = menuItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedMenuItems(filteredItems);
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link
          to='/'
          onClick={() => { setMenu("home"); scrollToPosition(0); }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to='/'
          onClick={() => { setMenu("menu"); scrollToPosition(window.innerHeight / 2.7); }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </Link>
        <Link
          to='/'
          onClick={() => { setMenu("contact us"); scrollToPosition(document.body.scrollHeight - window.innerHeight); }}
          className={menu === "contact us" ? "active" : ""}
        >
          Contact Us
        </Link>
      </ul>
      <div className="navbar-right">
        <button onClick={toggleSearchInput} style={{ border: 'none' }}>
          <img src={assets.search_icon} alt="Search" />
        </button>
        {showSearchInput && (
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        )}
        {searchedMenuItems.length > 0 && (
          <div className="searched-menu-items">
            {searchedMenuItems.map(item => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        )}
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
