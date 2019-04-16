import React, {Component} from 'react';
import ProductList from './ProductList'

export default class Product extends Component{

  constructor(props){
    super(props);
    this.state={
      view: 'earrings',
      show: '',
    }
  }

componentDidMount(){
  this.handleView('earrings');
}

  handleView=(e)=>{
    this.setState({
      view: e
    })



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
              <ProductList items={this.props.necklaces}
              click={this.props.click}/>}); break;
      default:
      this.setState({show:
        <ProductList
        items={this.props.earrings}
        click={this.props.click}/>}); break;
    }
  }



render(){
    let {view}=this.state;
      return(
        <div >
            <div className='productContainer'>
          <button onClick={()=>this.handleView('earrings')}>EARRINGS</button>
          <button onClick={()=>this.handleView('watches')}>WATCHES</button>
          <button onClick={()=>this.handleView('necklaces')}>NECKLACES</button>
            </div>
          {this.state.show}
        </div>
      )
    }

}
