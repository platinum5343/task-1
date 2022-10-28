import React, { Fragment } from 'react'
import SocialImg from '../../src/assets/Icon.png'
import GithubImg from '../../src/assets/vector.png'
import HngImg from '../../src/assets/I4G.png'
import SlackImg from '../../src/assets/Vectors.png'
import classes from './Footer.module.css'
const Footer = () => {
  return (
    <Fragment> 
        <div className={classes.footer1}>
        <div>
    <img src={SocialImg} alt="" />
    </div>
    <div>
    <img src={GithubImg} alt="" />
    </div>
    </div>   
    <div className={classes.footer2}>
    <div className={classes.footer3}>
    <img src={SlackImg} alt="" />
    </div>
    <div className={classes.footer3}>
    <h2>
    hng internship 9 frontend task
    </h2>
    
    </div>
    <div className={classes.footer3}>
    <img src={HngImg} alt="" />
    </div>
    </div>
    </Fragment>
  )
}

export default Footer
