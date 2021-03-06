import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {necklaces,watches,earrings} from './Store.js';
import Product from './components/Product';
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
        selected: 'earrings',
        view: '',
        sum: 0,
        checkout: false
    }
  }

    checkout=(cost)=>{
      console.log(`final price is ${cost}`)
    }

    sum=()=>{

      let sum1=0,sum2=0,sum3=0;
      this.state.watches.map((i)=>{
        sum1+=i.amount*i.price
      });

      this.state.earrings.map((i)=>{
        sum2+=i.amount*i.price
      });

      this.state.necklaces.map((i)=>{
        sum3+=i.amount*i.price
      });

      console.log(sum1+sum2+sum3, 'is the sum')
      let result=sum1+sum2+sum3;
      this.setState({
        sum: result
      })


    }

  click=(amount,e,choice)=>{

    const {name,type}=e;

    const found=choice.map((i)=>{
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
        [type]: found
      )
    })

    this.sum();
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
              view: <AboutUs/>,
              checkout: false
            });
            break;
      case 'products':
            this.setState({
              view: <Product selection={this.selection}
              selected={this.state.selected}
              watches={this.state.watches}
              earrings={this.state.earrings}
              necklaces={this.state.necklaces}
              click={this.click}
              />,
              checkout: false
            });
            break;
      case 'checkout':
      this.setState({
        checkout: !this.state.checkout
      })
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

<div className={this.state.checkout ? 'cashin': 'cashout'}>
        <StripeProvider apiKey={Publishable_key}>
              <div>
                <Elements>
                  <Checkout amount={this.state.sum}/>
                </Elements>
              </div>
            </StripeProvider>
            </div>
      </div>
    );
  }
}

export default App;
