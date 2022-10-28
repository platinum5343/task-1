import Home from './components/Home';
import './App.css';
import { Container } from '@mui/material';
import Main from './components/Main';
function App() {
  return (
    <Container sx={{backgroundColor:"#F4F5F7"}}>
      <Home />
      <Main />
    </Container>
  );
}

export default App;
