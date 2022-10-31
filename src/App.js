import Home from './components/Home';

import Main from './components/Main';
import Footer from './components/Footer';
import { Fragment } from 'react';
import classes from './App.module.css';
function App() {
  return (
    <Fragment className={classes.App}>
      <Home />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
