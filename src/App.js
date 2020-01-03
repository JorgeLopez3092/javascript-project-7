import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import Gallery from './components/imageComponents/Gallery'
import apiKey from './config.js';

export const UserContext = React.createContext()
export const NavContext = React.createContext()

function App() {

  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState('cats');

  useEffect(() => {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&format=json&nojsoncallback=1`)
      .then(response => response.data)
      .then(data => data.photos.photo)
      .then(data => setPhotos(data))
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
      console.log(photos)
  }, [search])

const handleSubmit = e => {
  e.preventDefault()
  setSearch(e.target[0].value.replace(' ', '+'))
}

const handleLinkClick = e => {
  setSearch(e.target.innerHTML);
  console.log(e.target.innerHTML)
}

  return (
    <UserContext.Provider value={photos}>
    <NavContext.Provider value={handleLinkClick}>
      <Router>
        <div className="container">
          <SearchForm 
            onClick={e => handleSubmit(e)}
            />
          <MainNav />
          <Route path="/gallery">
            <Gallery />
          </Route>
        </div>
      </Router>
    </NavContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
