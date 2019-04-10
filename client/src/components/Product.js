import React from 'react';

export default function Product(props){

return(
  <div class>
  {props.items.map((i)=>{

    return (
      <div className="items">
        <img src={require("../media/paintballGun.jpeg")} alt={i.image}/>
      <p>  {i.name}</p>

      <p>{i.description}</p>
      <p>Price is {i.price}</p>


      <p>Amount is {i.amount}</p>


      <button onClick={()=>props.click(1,i)}>+</button>
      <button onClick={()=>props.click(-1,i)}>-</button>
      </div>
    )

  })}
  </div>
)


}

 // <img src={i.image} alt={i.image}/>
