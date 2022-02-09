import './App.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';
import OrbPage from './OrbPage';
import OrbDetail from './OrbDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>welcome!</h2>
        <Switch>
          <Route exact path='/' >
            <OrbPage />
          </Route>
          <Route exact path='/orb/:name'>
            <OrbDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
