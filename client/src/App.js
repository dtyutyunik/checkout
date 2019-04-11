import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import items from './Store.js';
import Product from './components/Product';
import Total from './components/Total';
import CheckoutForm from './components/CheckoutForm';
import Checkout from './components/Checkout';
import axios from 'axios';
import {Elements, StripeProvider} from 'react-stripe-elements';

const Publishable_key=process.env.REACT_APP_Publishable_key;

const URL= 'http://localhost:3001';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      items
    }
  }

  checkout=(cost)=>{
    console.log(`final price is ${cost}`)
  }

  click=(amount,e)=>{

    const {name}=e;


  const found=this.state.items.map((i)=>{
    if(i.name===name){
      amount===1?i.amount++:i.amount!==0?i.amount--:i.amount=0;
      return i;
    }
    else{
      return i;
    }
  })


    this.setState((prevState)=>{
      return(
        items: found
      )
    })


  }
  render() {
    return (
      <div className="App">

      <Product items={items}
      click={this.click}
      />
      <Total data={items}
      checkout={this.checkout}
      />

      <StripeProvider apiKey={Publishable_key}>
          <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
              <Checkout />
            </Elements>
          </div>
        </StripeProvider>
      </div>
    );
  }
}

export default App;
// <CheckoutForm/>
