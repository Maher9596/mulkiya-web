import {Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Cards from './pages/Cards'
import Settings from './pages/Settings'


function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path ="/cards"><Cards /></Route>
        <Route path ="/settings"><Settings /></Route>
      </Switch>
    </div>
  );
}

export default App;
