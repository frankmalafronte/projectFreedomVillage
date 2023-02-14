import React from 'react';
import {Link} from 'gatsby';
import Home from './home';
import Links from '../components/Links';
import styles from '../components/styles.module.css';


export default function Contact(props) {

return (
  <Links>
    <title>Contact Us</title>
  <div className = {styles.contactFirst}>Contact Us</div>
  <div className = {styles.contactSecond}>Interested in getting in touch? Give us a call or send us an email and we will get back to you!
  <div className = {styles.contactContainer}>
  <div className = {styles.contactThird}>Email </div>
  <div className = {styles.contactFourth}>Brian@projectfreedomvillages.com</div>
  <div className = {styles.contactThird}>Phone</div>
  <div className = {styles.contactFourth}>860.428.7616</div>
  </div>
</div>
  </Links>
)
}
