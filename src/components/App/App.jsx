import {useState, useEffect} from 'react';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
import Axios from 'axios';

function App() {

    const [moments, setMoments] = useState([]);

    useEffect(()=>{
      getMoments();
    }, [{moments}]); //anytime moments is changed, run getMoments(). moments with no {} inside the [] also works but maybe this injection seems to be faster?

    const getMoments=()=>{
      Axios.get('/gallery').then((response)=>{
        setMoments(response.data);
      }).catch((err)=>{
        console.log(err);
        alert('error getting moments');
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* <img src="images/goat_small.jpg"/> */}
        <GalleryForm moments = {moments}/>
        <GalleryList moments = {moments}/>
      </div>
    );
}

export default App;
