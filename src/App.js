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
import Gallery from './components/images/Gallery'
import apiKey from './config.js';

export const UserContext = React.createContext()

function App() {

  const [photos, setPhotos] = useState([]);
  useEffect(() => {
      axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a06238e1e358e0410ccc93d067fe0b7b&tags=cats&format=json&nojsoncallback=1')
      .then(response => response.data)
      .then(data => data.photos.photo)
      .then(data => setPhotos(data))
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
      console.log(photos)
  }, [])
  

  return (
    <UserContext.Provider value={photos}>
      <Router>
        <div className="container">
          <SearchForm />
          <MainNav />
          <Gallery />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
