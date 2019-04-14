import React, {Component} from 'react';
import ProductList from './ProductList'

export default class Product extends Component{

  constructor(props){
    super(props);
    this.state={
      view: 'all',
      show: '',
    }
  }

  handleView=(e)=>{
    this.setState({
      view: e
    })

    componentDidMount(){
      
    }


    switch(e){
      case 'earrings':
            this.setState({show:
              <ProductList
              items={this.props.earrings}
              click={this.props.click}/>}); break;
      case 'watches':
            this.setState({show:
              <ProductList items={this.props.watches}
              click={this.props.click}/>}); break;
      case 'necklaces':
            this.setState({show:
              <ProductList items={this.state.necklaces}
              click={this.props.click}/>}); break;
    }
  }



render(){
    let {view}=this.state;
      return(
        <div>
          <button onClick={()=>this.handleView('All')}>All</button>
          <button onClick={()=>this.handleView('earrings')}>Earrings</button>
          <button onClick={()=>this.handleView('watches')}>Watches</button>
          <button onClick={()=>this.handleView('necklaces')}>Necklaces</button>

          {this.state.show}
        </div>
      )
    }

}
