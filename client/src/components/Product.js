import React from 'react';

export default function Product(props){

return(
  <div>
  {props.items.map((i,index)=>{

    return (
      <div key={index} className="items">
        <img src={require("../media/paintballGun.jpeg")} alt={i.image}/>
      <div>
      <p> Name: {i.name}</p>

      <p>Description:{i.description}</p>
      <p>Price is {i.price}</p>


      <button onClick={()=>props.click(-1,i)}>-</button>
      <span>Amount is {i.amount}</span>
      <button onClick={()=>props.click(1,i)}>+</button>


      <p>Total cost for items is ${i.amount*i.price}</p>
      </div>

      </div>
    )


  })}



  </div>
)


}

 // <img src={i.image} alt={i.image}/>
