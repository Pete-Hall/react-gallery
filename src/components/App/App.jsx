import {useEffect} from 'react';
import React from 'react';
import './App.css';
import Axios from 'axios';

function App() {

    useEffect(()=>{
      getMoments();
    }, []);

    const getMoments=()=>{
      Axios.get('/gallery').then((response)=>{
        console.log(response.data);
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
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
