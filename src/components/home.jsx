import React, { Fragment } from 'react';
import profileImg from '../../src/assets/profile__img.png'
import classes from './Home.module.css';



export const Home = () => {
  return (
    <Fragment>
      <div id={classes.profile_img}>
        <img 
        src={profileImg} id={classes.profile_img} alt="profile_img" />
        </div>
        <div id={classes.twitter}>olatunji olamiji</div>
    </Fragment>
  )
}

export default Home;
