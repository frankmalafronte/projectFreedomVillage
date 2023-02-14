import React from 'react';
import {Link} from 'gatsby';
import Home from './home';
import Links from '../components/Links';
import styles from '../components/styles.module.css';


export default function EriePA(props) {

return (
  <Links>
    <title>Project Freedom Villages</title>
    <div className = {styles.videoContainer}>
  <div className = {styles.video}><iframe width="100%" height="350" src="https://www.youtube.com/embed/-pTMHHq_oDQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div>  
  <div className = {styles.video}><iframe width="100%" height="350" src="https://www.youtube.com/embed/7iyKnCyA18k" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div>  
  </div>
  </Links>
)
}
