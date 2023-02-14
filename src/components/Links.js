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
      <div  style={{display:'flex', width:'40%',color:'#003161', fontSize:'2.8vw'}}>Project Freedom Vilages</div>
      <Link to="/"><button className={styles.navLink}>Home</button></Link>
        <div className={styles.dropDown}>
        <Link to ="/"><button className={styles.dropButton}>Events</button></Link>
          <div className ={styles.dropDownContent} id="dropDownContainer">
          <Link to = "/AmericanLegion">American Legion - New Jersey</Link>
          <Link to = "/EriePA">Erie Sports Center - Erie Pensylvania </Link> 
          </div>
          </div>
          <Link to ="https://secure2.procharge.com/YouPay/View/Youpay.dll?p=2//lVvI7uT/0qeCZDyCLrnHpCE0JfqkYreQ7bwKap2o=&z=UrK32WfLnJUyA8XRcIumcfFNnrVyZVBe9qkk5cfhVTY=&a="><button className={styles.navLink}>
          Donate
          </button></Link>
    <a style ={{marginRight:'10px'}}href="https://www.instagram.com/projectfreedomvillages/?hl=en">
    <FaInstagram  size="4vh" color="#003161"/>
     </a>
     <a href="https://www.facebook.com/profile.php?id=100090050024302">
    <FaFacebook  size="4vh" color="#003161" />
     </a>
     <Link to="/Contact"><button className={styles.navLink}>Contact Us</button></Link>
      </div>
      <div>
        {children}
      </div>
    </div>);
}
