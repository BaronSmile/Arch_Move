import React from 'react';
import {Link} from 'react-router-dom';

import css from './footer.module.scss';
import logo from '../../assets/icon/logo-arch.svg';

function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.container}>
        <div className={css.footer_nav}>
          <Link to='/about_us'>About Us</Link>
          <Link to='/how_it_works'>How it Works</Link>
          <Link to='/FAQ'>FAQ</Link>
          <Link to='/contact_us'>Contact Us</Link>
          <Link to='/privacy_policy'>Privacy Policy</Link>
        </div>
        <Link className={css.logo} to='/'><img src={logo} alt="logo"/></Link>
      </div>
    </div>
  );
}

export default Footer;