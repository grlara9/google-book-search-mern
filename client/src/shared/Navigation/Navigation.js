import React, { useState }  from 'react'
import { Link } from 'react-router-dom';

import Header from './Header';
import SideDrawer from './SideBar'
import NavLinks from './NavLinks'
import Backdrop from './Backdrop'
import './Navigation.css';

const Navigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__drawer-nav"><NavLinks /></nav>
        </SideDrawer>

      <Header>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
        
          <span />
          <span />
        </button> 
        <h1 className="main-navigation__title">
          <Link to="/">Google Search Book</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};


export default Navigation;