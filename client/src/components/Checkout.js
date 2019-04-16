import React, {Component} from 'react';
import {CardElement,CardNumberElement, CardExpiryElement, CardCVCElement,PostalCodeElement,  injectStripe} from 'react-stripe-elements';
import axios from 'axios';
const URL= 'http://localhost:3001';


class Checkout extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
     this.state = {
       complete: false,
       name: ''
     };
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: this.state.name});

    console.log(token.id)
  let response = await fetch(`/charge/${this.props.amount}`, {
    method: "POST",
    headers: {"Content-Type": "text/plain"},
    body: token.id
  });
  console.log(response);


  if (response.ok) this.setState({complete: true})
}

handleChange=(e)=>{
  let {name,value}=e.target;

  this.setState({
    [name]: value
  })
}



  render() {

    return (
      <div className="checkout">
        <h5>Would you like to complete the purchase?</h5>
        <div className='card'>
        <form>
          <label>
          Name
          <br/>
             <input type='text'
             placeholder='Name'
             name='name'
             value={this.state.name}
             onChange={this.handleChange} required/>
          </label>
          <br/>
           <label>
           Card Number
              <CardNumberElement className="cardElements" required/>
           </label>
          <label>
            Expiry date
            <CardExpiryElement  className="cardElements" required/>
          </label>
          <label>
            CVC
            <CardCVCElement className="cardElements" required/>
          </label>
          <label>
            Zip Code
            <PostalCodeElement className="cardElements" required/>
          </label>
        </form>
        </div>

        <button type='submit' onClick={this.submit}>Pay amount of {this.props.amount}</button>

      </div>
    );
  }
}


export default injectStripe(Checkout);


const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '1.2em',
        color: 'blue',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: 'black',
        },
        padding: '3em',
        border: '1px solid black'
      },
      invalid: {
        color: 'red',
      },
    },
  };
};
