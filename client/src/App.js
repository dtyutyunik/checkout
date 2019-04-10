import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import items from './Store.js';
import Product from './components/Product';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      items
    }
  }


  click=(amount,e)=>{
    console.log(e.amount)
    amount===1?console.log('increase'):console.log('decrease')
  }
  render() {
    console.log(this.state.items)
    return (
      <div className="App">

      <Product items={items}
      click={this.click}
      />




      </div>
    );
  }
}

export default App;
