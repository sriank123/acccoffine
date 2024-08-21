import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const scrollToMid = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.offsetHeight;
  const middlePosition = (documentHeight - windowHeight) / 2.7;
  window.scrollTo(0, middlePosition);
};

const scrollToend = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.offsetHeight;
  const middlePosition = (documentHeight - windowHeight) / 1.0;
  window.scrollTo(0, middlePosition);
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
    const searchedMenuItems = menuItems.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchedMenuItems(searchedMenuItems);
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' key='home' onClick={() => { setMenu("home"); scrollToTop(); }} className={menu === "home" ? "active" : ""}>home</Link>
        <Link to='/' key='menu' onClick={() => { setMenu("menu"); scrollToMid(); }} className={menu === "menu" ? "active" : ""}>menu</Link> 
        <Link to='/' key='contact us' onClick={() => { setMenu("contact us"); scrollToend(); }} className={menu === "contact us" ? "active" : ""}>contact us</Link>
      </ul>
      <div className="navbar-right">
        <button onClick={toggleSearchInput} style={{ border: 'none' }}>
          <img src={assets.search_icon} alt="" />
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
            {searchedMenuItems.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        )}
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;