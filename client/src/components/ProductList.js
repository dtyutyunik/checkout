import React, { Component } from 'react';

export default function ProductList(props){
  return(
    <div>
    {props.items.map((i,index)=>{

      return (
        <div key={index} className="items">
          <img src={require("../media/silverWatch.jpeg")} alt={i.image}/>
        <div>
        <p> Name: {i.name}</p>

        <p>Description:{i.description}</p>
        <p>Price is {i.price}</p>


        <button onClick={()=>props.click(-1,i,props.items)}>-</button>
        <span>Amount is {i.amount}</span>
        <button onClick={()=>props.click(1,i, props.items)}>+</button>


        {i.amount>0?<p>Total cost for items is ${i.amount*i.price}</p>:null}
        </div>

        </div>
      )


    })}
    </div>
  )
}
