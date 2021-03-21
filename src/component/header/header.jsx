import React from 'react';
import {Link} from 'react-router-dom';

import css from './header.module.scss';
import logo from '../../assets/icon/logo-arch.svg'

function Header() {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.nav}>
          <Link to='/'><img src={logo} alt="logo"/></Link>
          <ul className={css.navList}>
            <li><Link to='/gallery'>Design Gallery</Link></li>
            <li><Link to='/list-of-architect'>List of Architect</Link></li>
            <li><Link to='/articles'>Articles</Link></li>
            <li><Link to='/how-it-works'>How it Works</Link></li>
          </ul>
        </div>
        <div className={css.logged}>
          <button className={css.signIn}>Sign In</button>
          <button className={css.signUp}>Sign Up</button>
        </div>
      </div>

    </div>
  );
}

export default Header;