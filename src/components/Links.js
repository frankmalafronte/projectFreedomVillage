import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../components/styles.module.css';
import {
  FaFacebook,
  FaInstagram,
  FaPaypal
} from 'react-icons/fa'

export default function Links({children}) {
  return (
    <div>
      <div className={styles.nav} >
      <div>Project Freedom Villages</div>
      <Link to="/"><button className={styles.navLink}>Who We Are</button></Link>
        <div className={styles.dropDown}>
        <Link to ="/"><button className={styles.dropButton}>Events</button></Link>
          <div className ={styles.dropDownContent} id="dropDownContainer">
          <Link to = "/AmericanLegion">American Legion - New Jersey</Link>
          <Link to = "/EriePA">Erie Sports Center - Erie Pensylvania </Link> 
          </div>
        </div>

    {/* <a href="https://www.instagram.com/projectfreedomvillages/?hl=en">
    <FaInstagram  size="4vh" color="rgb(230, 230, 230)" />
     </a> */}
      </div>
      <div>
        {children}
      </div>
    </div>);
}
