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
       name: '',
       purchase: false
     };
  }

  async submit(ev) {
    ev.preventDefault();
    let {token} = await this.props.stripe.createToken({name: this.state.name});

      if(token!==undefined){
        var response = await fetch(`/charge/${this.props.amount}`, {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
        });
        console.log(response);
      }
  if (response!==undefined&&response.ok) this.setState({complete: true})
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
              <CardNumberElement className="cardElements"/>
           </label>
          <label>
            Expiry date
            <CardExpiryElement  className="cardElements"/>
          </label>
          <label>
            CVC
            <CardCVCElement className="cardElements"/>
          </label>
          <label>
            Zip Code
            <PostalCodeElement className="cardElements"/>
          </label>
        </form>
        </div>

        {this.state.complete===true?<button type='submit' disabled>Paid</button>:this.state.purchase||this.props.amount===0?
        <button className='paymentInfoNeeded' disabled>Pay</button>:
        <button type='submit' disabled={this.state.purchase||this.props.amount===0} onClick={this.submit}>Pay amount of {this.props.amount}</button>}

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
