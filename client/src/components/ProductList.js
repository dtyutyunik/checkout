import React, { Component } from 'react';

export default class ProductList extends Component{

  constructor(props){
    super(props);
    this.state={
      clicked: true
    }
  }
  render(){
  return(
    <div className='itemsContainer'>
    {this.props.items.map((i,index)=>{

      return (
        <div key={index} className="items">

            <div>
          <img src={require(`../media/${i.image}`)} alt={i.image}/>


          <h1> {i.name}</h1>

        <h4>Description: {i.description}</h4>
        <h5>Price is ${i.price}</h5>


        <button onClick={()=>{
                    this.props.click(-1,i,this.props.items);
                    this.setState({clicked: !this.state.clicked})
                  }}>-</button>

        <span>Quantity of {i.amount}</span>
        <button onClick={()=>{
                    this.props.click(1,i,this.props.items);
                    this.setState({clicked: !this.state.clicked})
                  }}>+</button>


        {i.amount>0?<h5>Total cost for items is ${i.amount*i.price}</h5>:null}
        </div>


        </div>
      )


    })}
    </div>
  )}
}
