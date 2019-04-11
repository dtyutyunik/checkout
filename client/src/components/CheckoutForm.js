import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
// import {CardElement, injectStripe} from 'react-stripe-elements';

const URL= 'http://localhost:3001';

const Publishable_key=process.env.REACT_APP_Publishable_key;
const Secret_key=process.env.REACT_APP_Secret_key;

export default class CheckoutForm extends Component{
  constructor(props){
    super(props);

    this.state={
      form: {},
      address: '',
      item: ''
    }
  }

  handleChange=(e)=>{
    const {name,value}=e.target;
    // console.log(name)
    // console.log(value)

    this.setState({
      [name]: value
    })
  }

  onSubmit=async(e)=>{
    e.preventDefault();

    console.log('submmitted')
    try{
      // const express=await axios.get(`${URL}/checkout/${this.state.address}`);
      // console.log(express.data);
      let info={
        money: 500,
        item: this.state.item,
        address: this.state.address
      };
      const charge=await axios.post(`${URL}/charge/${info}`)
    }
    catch(e){
      console.log(e)
    }



  }

   successPayment = data => {
    alert('Payment Successful');
  };

   errorPayment = data => {
    alert('Payment Error');
  };

  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }




  render(){
    return(
      <div>
      Checkout done

      <form onSubmit={this.onSubmit}>

      <input type='text'
        name="address"
        value={this.state.address}
        placeholder='enter address'
        onChange={this.handleChange}
        />
        <input type='text'
          name="item"
          value={this.state.item}
          placeholder='item'
          onChange={this.handleChange}
          />
        <button type='submit'>Submit</button>
      </form>


      </div>
    )
  }

}

// export default injectStripe(CheckoutForm);
