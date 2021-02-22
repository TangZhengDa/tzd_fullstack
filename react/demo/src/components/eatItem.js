import React, { Component } from 'react';
class EatItem extends Component {
  
  state = {}
  
  handleClick() {
    console.log(this.props.index);
  }
  render() { 
    return ( 
      <li onClick={this.handleClick.bind(this)}>{this.props.content}</li>
     );
  }
}
 
export default EatItem;