import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {necklaces,watches,earrings} from './Store.js';
import Product from './components/Product';
import Total from './components/Total';
import CheckoutForm from './components/CheckoutForm';
import Checkout from './components/Checkout';
import Nav from './components/Nav';
import AboutUs from './components/AboutUs';
import axios from 'axios';
import {Elements, StripeProvider} from 'react-stripe-elements';

const Publishable_key=process.env.REACT_APP_Publishable_key;

const URL= 'http://localhost:3001';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
        necklaces: necklaces,
        watches: watches,
        earrings: earrings,
        selected: '',
        view: ''
    }
  }

  checkout=(cost)=>{
    console.log(`final price is ${cost}`)
  }

  click=(choice,amount,e)=>{

    const {name}=e;

  const found=this.state.choice.map((i)=>{
    if(i.name===name){
      amount===1?i.amount++:i.amount!==0?i.amount--:i.amount=0;
      return i;
    }
    else{
      return i;
    }
  })


    // this.setState((prevState)=>{
    //   return(
    //     items: found
    //   )
    // })


  }

  selection=(item)=>{
      this.setState({
        selected: item
      })

  }

  handleMenuClick=(e)=>{

    console.log(e);

    switch(e){
      case 'aboutus':
            this.setState({
              view: <AboutUs/>
            });
            break;
      case 'products':
            this.setState({
              view: <Product selection={this.selection}
              selected={this.state.selected}
              click={this.click}
              />
            });
            break;
      case 'checkout':
              this.setState({
                view:
                <div>
                <Total data={this.state.items}
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
              });
              break;


    }
  }



  componentDidMount=()=>{
  this.handleMenuClick("aboutus");
  }


  render() {
    return (
      <div className="App">
      <Nav handleMenuClick={this.handleMenuClick}/>




        {this.state.view}
      </div>
    );
  }
}

export default App;
