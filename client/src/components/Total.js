import React from 'react';


export default function Total(props){

  let sum=0;
  let sum1=0;
  let sum2=0;

  props.watches.map((i)=>{
    sum+=i.amount*i.price
  });

  props.earrings.map((i)=>{
    sum+=i.amount*i.price
  });

  props.necklaces.map((i)=>{
    sum+=i.amount*i.price
  });


  return(
    <div>
    Total Price is: {sum}
    <button onClick={()=>props.checkout(sum)}>Checkout</button>
    </div>
  )
}
