import React, { Fragment } from 'react';
import profileImg from '../../src/assets/profile__img.png'
import iconImg from '../../src/assets/Icon(1).png'
import iconsImg from '../../src/assets/Icon2.png'
import classes from './Home.module.css';


export const Home = () => {
  return (
    <Fragment>
      <div  spacing={3}>
        <div id={classes.profile_img}>
        <img 
        src={profileImg} id={classes.profile_img} alt="profile_img" />
        </div>
        <div className={classes.icon} px={5} gap={"20px"}>
          <img 
          sx={{ display: {xs:"none", sm:"block"}}}
          src={iconImg} alt="icon"/>
          </div>
        <div className={classes.icon} px={5} gap={"20px"}>
          <img 
          sx={{ display: {xs:"block", sm:"small"}}}
          src={iconsImg} alt="icon"/>
          </div>
       
    
        </div>
        <div id={classes.twitter}>olatunji olamiji</div>
    </Fragment>
  )
}

export default Home;
