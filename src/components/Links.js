import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../components/styles.module.css';



//Room to grow later 
export default function Links({children}) {
  return (
    <div>
      <div id= "header" className={styles.nav} >
        <div id= "header-left" className ={styles.headerLeft}>
        {/* <img src ={LogoM} className ={styles.logo}/> */}
        </div>
          <div  className ={styles.desktopNavWrapper}>
            <div id = "header-center" className ={styles.navLinks}>
            </div>
            <div id= "header-right" className ={styles.headerRight}>
              <Link to ="https://tournamentfortheboy.square.site"><button className={styles.navButton}>Participate</button> </Link>
            </div>
          </div>
      </div>

      <div>
            {children}
      </div>
    </div>);
}
