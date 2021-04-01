import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';

import './App.css';

function App() {

  useEffect(()=>{
      getMenu(),
      getOrder()
  }, [])

  const [ newOrder, setNewOrder] = useState( [] );

  let addOrder = () =>{
    console.log('in addOrder:', newOrder );
    axios.post('/api/order', newOrder ).then((response)=>{
      console.log( 'back from addOrder POST with:', response);
      getMenu();
    }).catch((err)=>{
      console.log(err);
      alert('addOrder POST not working')
    })
  }

  let getMenu = () =>{
    console.log('in getMenu');
    axios.get('/api/pizza').then((response) =>{
      console.log('back from getMenu GET with:', response);
      //dispatchEvent({type: 'setNewOrder', payload: response.data});
    }).catch( (err) =>{
      console.log(err);
      alert('getMenu GET not working');
    })
  }

  let getOrder = () =>{
    console.log('in getOrder');
    axios.get('/api/order').then((response) =>{
      console.log('back from getOrder GET with:', response);
      //dispatchEvent({type: 'setNewOrder', payload: response.data});
    }).catch( (err) =>{
      console.log(err);
      alert('getOrder GET not working');
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <button>post pizza</button>
  
    </div>
  );
}

export default App;
