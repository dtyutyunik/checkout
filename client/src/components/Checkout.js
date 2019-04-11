import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';
const URL= 'http://localhost:3001';


class Checkout extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
     this.state = {complete: false};
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Doug"});
    console.log(token)
    // let message= await axios.post(`${URL}/charge`,token);
    // const express=await axios.get(`${URL}/checkout/${this.state.address}`);

  let response = await fetch("/charge", {
    method: "POST",
    headers: {"Content-Type": "text/plain"},
    body: token.id
  });
  console.log(response);


  if (response.ok) this.setState({complete: true})
}

  render() {

    return (
      <div className="checkout">
      The transaction was {this.state.complete}
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(Checkout);
