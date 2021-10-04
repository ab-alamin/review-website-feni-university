import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Errorfile from './components/ErrorFile/Errorfile';
import About from './components/About/About';
import Students from './components/Students2/Students';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/students">
            <Students></Students>
          </Route>
          <Route exact path="*">
            <Errorfile></Errorfile>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
