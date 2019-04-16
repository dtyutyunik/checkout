import React from 'react';

export default function Nav(props){

  return(

    <div>
    <nav>
          <a onClick={()=>props.handleMenuClick("aboutus")}>About Us</a>
          <a onClick={()=>props.handleMenuClick("products")}>Product</a>
          <a onClick={()=>props.handleMenuClick("checkout")}>Checkout</a>
        </nav>

    </div>
  )
}
