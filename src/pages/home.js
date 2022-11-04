import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';
import Footer from '../components/Footer'
import BackgroundImage from 'gatsby-background-image'
import {MdMilitaryTech} from 'react-icons/md'





export default function Home(props) {
  const data = useStaticQuery(graphql`
  query {
    flier: file(relativePath: { eq: "flier.png" }) {
      childImageSharp {
        fluid(maxWidth:1200 maxHeight:800 fit:FILL cropFocus:CENTER ) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
      flag: file(relativePath: { eq: "flag.jpg" }) {
        childImageSharp {
          fluid(maxWidth:300 maxHeight:300 fit:INSIDE cropFocus:CENTER ) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
        uniform: file(relativePath: { eq: "uniform.jpg" }) {
          childImageSharp {
            fluid(maxWidth:800 maxHeight:800 fit:FILL cropFocus:NORTH ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }   
      greenhouse: file(relativePath: { eq: "greenhouse.png" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER ) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
          homeLayout: file(relativePath: { eq: "homeLayout.png" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:FILL cropFocus:CENTER ) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
            homeOutside: file(relativePath: { eq: "homeOutside.png" }) {
              childImageSharp {
                fluid(maxWidth:800 maxHeight:800 fit:FILL cropFocus:CENTER ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
    }`);

  return (
    <body>
        <div className ={styles.eventContainer}>
        <div  className ={styles.eventDetails}>
        <BackgroundImage style ={{width:'100%', height:'60vh'}}fluid = {data.uniform.childImageSharp.fluid}>
        <div className={styles.heroTop2}>Project Freedom Village</div>
        </BackgroundImage>
      <div className={styles.mission}>
      We The People, Combating Veteran's Homelessness, Hunger, and Job&nbsp;Insecurity
         </div>
         <div>
        </div>
        <br/>
        <br/>
        <div className={styles.subMission}>
        They served us...
        </div>
        <br/>
        <div className={styles.subMission}>
        Now its time we serve them
        </div>
        <div>
        <Link to ="https://www.google.com"><button className={styles.donateButton}>
          <MdMilitaryTech size="50px" />
          Help Support Homes for our Veterans
          <MdMilitaryTech size="50px"/>
          </button></Link>
            </div>
        </div>
        <div  style = {{display:'flex'}}>
        <Img style = {{width:'33%'}} fluid= {data.homeLayout.childImageSharp.fluid}/>
        <Img style = {{width:'33%'}}fluid = {data.homeOutside.childImageSharp.fluid} />
        <Img style = {{width:'33%'}}fluid = {data.greenhouse.childImageSharp.fluid} />
        </div>
        <Img style = {{width:'100%'}}fluid = {data.flier.childImageSharp.fluid} />
        </div>
        <Footer/>
      </body>
  );
}
