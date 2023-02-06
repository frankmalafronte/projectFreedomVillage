import React from 'react';
import {Link} from 'gatsby';
import Links from '../components/Links';
import styles from '../components/styles.module.css';
import { InstagramEmbed } from 'react-social-media-embed';



export default function AmericanLegion(props) {

return (
  <Links>
  <body>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <InstagramEmbed url="https://www.instagram.com/p/CoTi8DDuX7R/" width={600} />
  </div>
  </body>
    </Links>
)
}
