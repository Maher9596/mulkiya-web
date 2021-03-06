import {Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Cards from './pages/Cards'
import Settings from './pages/Settings'


function App() {
  return (
  <>
     <div className="header"><h1>Mulkiya</h1></div>        
    <div className="container">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path ="/cards"><Cards /></Route>
          <Route path ="/settings"><Settings /></Route>
        </Switch>
        <Navbar />
        <div className="footer">
          <p id="footerText">copyrights mandazi</p>
          <p id="footerTextLocation">oman muscat 2021</p>
        </div>
    </div>
  </>
  );
}

export default App;
