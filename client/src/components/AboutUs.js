import React from 'react';
import Typist from 'react-typist';


export default function AboutUs(props){



  return(

    <div className='aboutus'>

      <img src={require('../media/swarovski.jpg')}/>
      <div className="cover">

               <Typist
                cursor={{
                 show: false,
                 hideWhenDone: true}}
                 >
               <span>Elegance</span>
               <Typist.Backspace count={8} delay={500} />
              <span>Clarity</span>
              <Typist.Backspace count={7} delay={600} />
              <span>Beauty</span>
              <Typist.Backspace count={6} delay={600} />
              <span>Swarovski</span>
               </Typist>


    </div>

    </div>
  )
}
