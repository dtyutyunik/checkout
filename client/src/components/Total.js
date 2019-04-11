import React from 'react';


export default function Total(props){

  let sum=0;

  props.data.map((i)=>{
    sum+=i.amount*i.price
  });


  return(
    <div>
    Total Price is: {sum}
    <button onClick={()=>props.checkout(sum)}>Checkout</button>
    </div>
  )
}
