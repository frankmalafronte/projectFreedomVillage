import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';
import Footer from '../components/Footer'
import BackgroundImage from 'gatsby-background-image'
import {MdMilitaryTech} from 'react-icons/md'
import Links from '../components/Links';





export default function Home(props) {
  const data = useStaticQuery(graphql`
  query {
    horizontal: file(relativePath: { eq: "sponsors/horizontal.png" }) {
      childImageSharp {
        fluid( maxWidth:3000 maxHeight:600 fit:FILL cropFocus:CENTER ) {
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
            fluid(maxWidth:1200 maxHeight:800 fit:FILL cropFocus:NORTH ) {
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
              fluid(maxWidth:1000 maxHeight:800 fit:FILL cropFocus:CENTER ) {
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
              solar: file(relativePath: { eq: "solar.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:800 maxHeight:800 fit:INSIDE cropFocus:CENTER ) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
    }`);

  return (
    <body>
          <Links/>
        <div className ={styles.eventContainer}>
        <BackgroundImage id = "backgroundPhoto" className={styles.backgroundPhoto} fluid = {data.uniform.childImageSharp.fluid}>
        <div className={styles.missionContainer}>
        <div className = {styles.missionLeftContainer}></div>
      <div className={styles.missionRightContainer}>
      <div className ={styles.mission}>
      We The People, Combating Veteran's Homelessness, Hunger, and Job&nbsp;Insecurity
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
        </div>
        </div>
        <div className={styles.donateButtonContainer}>
        {/* <MdMilitaryTech style= {{verticalAlign:'middle'}} color="rgb(0,53,145)" size="50px" /> */}
        <Link to ="https://secure2.procharge.com/YouPay/View/Youpay.dll?p=2//lVvI7uT/0qeCZDyCLrnHpCE0JfqkYreQ7bwKap2o=&z=UrK32WfLnJUyA8XRcIumcfFNnrVyZVBe9qkk5cfhVTY=&a="><button className={styles.donateButton}>
          Support Us 
          </button></Link>
          {/* <MdMilitaryTech style= {{verticalAlign:'middle'}} color="rgb(0,53,145)" size="50px"/> */}
            </div>
        </BackgroundImage>
            <br/>
            <div className={styles.whoWeAreContainer}>
            <div className ={styles.whoWeAreTitle}>Who we are </div>
            <div className = {styles.whoWeAreContent}>
            There are 60,000 homeless veterans in America today. 
            Project Freedom Villages works to house, clothe, and provide employment for these veterans.
             We build sustainable communities of tiny homes and green houses where they can live and work amongst their peers as they did when they served. 
             </div>
            </div>
            </div>
        {/* </div> */}
        {/* <div  style = {{display:'flex',marginBottom:'2%'}}> */}
        {/* <Img style = {{width:'50%'}} fluid= {data.homeLayout.childImageSharp.fluid}/>
        <Img style = {{width:'50%'}}fluid = {data.homeOutside.childImageSharp.fluid} /> */}
        {/* <Img style = {{width:'30%'}}fluid = {data.greenhouse.childImageSharp.fluid} /> */}
        {/* </div> */}
        <div style={{display:'flex',justifyContent:'center',color:'rgb(220,41,49)', fontSize:'2.8vw'}}>
        Sponsored By:
        </div>
        <div className ={styles.eventContainer} style = {{}}>
        <Img fluid = {data.solar.childImageSharp.fluid}/>
        <Img fluid = {data.horizontal.childImageSharp.fluid} />
        </div>
        {/* <Footer/> */}
      </body>
  );
}
