import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppCars from './pages/AppCars';
import AddCar from './pages/AddCar';


function App() {
return (
    <div className="App">
      <Router>
          <nav>
            <ul>
              <li>
                <Link to="/cars">Cars</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <Link to="/add">Add</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/cars" exact>
              <AppCars />
            </Route>
            <Route path="/add" exact>
              <AddCar />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}


export default App;
