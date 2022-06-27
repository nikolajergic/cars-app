import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppCars from './pages/AppCars';

function App() {
  <Switch>
    <Route path="/cars" exact>
      <AppCars />
    </Route>
  </Switch>
  

return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/cars">Cars</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/cars" exact>
              <AppCars />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;
