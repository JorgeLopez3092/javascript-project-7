import React from 'react';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import Gallery from './components/imageComponents/Gallery'

export const UserContext = React.createContext()
export const NavContext = React.createContext()

function App() {


  return (
    <Router>
      <div className="container">
      <SearchForm />
        <MainNav />
      </div>
      <Switch>
        <Route path="/:search" component={Gallery}/>
      </Switch>
    </Router>
  );
}

export default App;
