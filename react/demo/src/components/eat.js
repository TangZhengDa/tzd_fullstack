import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import '../style/eat.css'
import EatItem from './eatItem'

class Eat extends Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'hello',
      list: ['宫保鸡丁', '辣子鸡']
    }
  }

  inputChange() {
    // console.log(this);
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue: this.input.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }

  deleteItem(index) {
    console.log(index);
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          {/* <label for="addGoods">加菜:</label> */}
          <input id="addGoods" className="input" value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => {this.input=input}}
          ></input>
          <button onClick={this.addList.bind(this)}>下单</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              // return <li key={index + item} onClick={this.deleteItem.bind(this)}>{item}</li>
              return (
                <div key={index + item}>
                  <EatItem content={item} />
                </div>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default Eat