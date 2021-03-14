import React, { Component } from 'react';
class EatItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log(this.props.index);
  }
  componentWillMount() { //只在页面刷新的时候执行一次
    console.log('componentWillMount--组件将要挂载到页面')
  }

  componentDidMount() { //只在页面刷新的时候执行一次
    console.log('componentDidMount--组件挂载完成');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate--组件发生改变之前执行');
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate--组件更新之前');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate--组件更新完成');
  }
  render() { 
    console.log('render--组件挂载中');
    return ( 
      <li onClick={this.handleClick}>{this.props.content}</li>
     );
  }
}
 
export default EatItem;