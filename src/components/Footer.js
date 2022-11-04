import React from 'react'
import {useStaticQuery, graphql,Link} from 'gatsby';
import Img from 'gatsby-image';
import styles from '../components/styles.module.css';
import {
  FaFacebook,
  FaInstagram,
  FaPaypal
} from 'react-icons/fa'




export default function Footer (){
    return (
      <div className ={styles.footerContainer}>
      <div style = {{fontWeight:'bold', marginTop:'15px'}}>Connect With Us</div>
      <a href="https://www.instagram.com/bookwelltravel/?hl=en">
    <FaFacebook  className ={styles.footerIcons} size="50px" color="black" />
    </a>
    <a href="https://facebook.com/pg/BookwellTravel/posts/">
    <FaInstagram  className ={styles.footerIcons} size="50px" color="black" />
    </a>    
     <a href="https://facebook.com/pg/BookwellTravel/posts/">
    <FaPaypal  className ={styles.footerIcons} size="50px" color="black" />
    </a>

      </div>
    )
  }

