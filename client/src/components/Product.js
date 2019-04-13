import React, {Component} from 'react';

export default function Product (props){







      return(
        <div>
        <button onClick={()=>this.props.selection('All')}>All</button>
        <button onClick={()=>this.props.selection('earrings')}>Earrings</button>
        <button onClick={()=>this.props.selection('watches')}>Watches</button>
        <button onClick={()=>this.props.selection('necklaces')}>Necklaces</button>

        <div>the item is {props.selected}</div>
        {console.log(props.selected)}


        </div>
      )



}
 // <img src={i.image} alt={i.image}/>
 // {props.items.map((i,index)=>{
 //
 //   return (
 //     <div key={index} className="items">
 //       <img src={require("../media/blueEarrings.jpg")} alt={i.image}/>
 //     <div>
 //     <p> Name: {i.name}</p>
 //
 //     <p>Description:{i.description}</p>
 //     <p>Price is {i.price}</p>
 //
 //
 //     <button onClick={()=>props.click(-1,i)}>-</button>
 //     <span>Amount is {i.amount}</span>
 //     <button onClick={()=>props.click(1,i)}>+</button>
 //
 //
 //     <p>Total cost for items is ${i.amount*i.price}</p>
 //     </div>
 //
 //     </div>
 //   )
 //
 //
 // })}
