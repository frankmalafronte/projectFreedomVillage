import React from 'react';
import {Link} from 'gatsby';
import Links from '../components/Links';
import styles from '../components/styles.module.css';
import { InstagramEmbed } from 'react-social-media-embed';



export default function AmericanLegion(props) {

return (
  <Links>
  <body>
  <div style={{ display: 'flex', alignItems: 'center', flexDirection:'column' }}>
  <InstagramEmbed url="https://www.instagram.com/p/CoYp0mDO8Rb/" width={'75%'} />
  <InstagramEmbed url="https://www.instagram.com/p/CoYpV-VuTYr/" width={'75%'} />
  <InstagramEmbed url="https://www.instagram.com/p/CoTi8DDuX7R/" width={'75%'} />
  <InstagramEmbed url="https://www.instagram.com/p/CoX-WNBvUGO/" width={'75%'} />
  <InstagramEmbed url="https://www.instagram.com/p/CoX90MLvQpk/" width={'75%'} />
  <InstagramEmbed url="https://www.instagram.com/p/CoX9OGov5oJ/" width={'75%'} />
  <InstagramEmbed url="https://www.instagram.com/p/CoX8JYLvV5a/" width={'75%'} />
  <InstagramEmbed url="https://www.instagram.com/p/CoX7IVovC2-/" width={'75%'} />
  </div>
  </body>
    </Links>
)
}
