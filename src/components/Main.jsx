import React, { Fragment } from 'react'
import classes from './Main.module.css';

const Main = () => {
  return (
    <Fragment>
      <div   className={classes.btn}
        id={classes.btn_zuri}>  
          Twitter Link
          
          </div>
          <div 
        className={classes.btn}>
        <a id='btn_zuri'
       href="https://training.zuri.team/"  >
          Zuri Team
          </a>
          </div>
          <div 
        className={classes.btn}>
        <a id='books' href="https://books.zuri.team/">
          Zuri books
          </a>
          </div>
          <div 
        className={classes.btn}>
        <a id='book_phyton' href="https://background.zuri.team/">
          python books
          </a>
          </div>
          <div 
        className={classes.btn}>
        <a id='pitch' href="https://books.zuri.team/">
          Background check for coders
          </a>
          </div>
          <div 
        className={classes.btn}>
        <a href="https://books.zuri.team/design-rules" id='book_design'>
          Design books
          </a>
          </div>
    </Fragment>
  )
}

export default Main;