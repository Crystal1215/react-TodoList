import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from './store'
import {getMyListAction,changeInputAction,addItemAction,deleteItemAction,} from './store/actionCreators'
// import axios from 'axios'
// const data=[
//   '早上8点起床',
//   '早上9点开会',
//   '早上10点做任务'
// ]
class TodoList extends Component {
  constructor(props) {
    super(props);
    // console.log(store.getState())
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.changeBtn = this.changeBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }
  render() {
    return (
      <TodoListUI 
       inputValue={this.state.inputValue}
       changeInputValue={this.changeInputValue}
       changeBtn={this.changeBtn}
       deleteItem={this.deleteItem}
       list={this.state.list}

      />
      );
  }
  componentDidMount(){
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
    //   console.log(res)
    //   const data=res.data
    //   const action = getListAction(data)
    //   store.dispatch(action)

    // })
    // const action = getTodoList()
    //   store.dispatch(action)
    const action = getMyListAction()
    store.dispatch(action)
  }
  changeInputValue(e) {
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // }
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
  changeBtn() {
    // const action = {
    //   type: ADD_ITEM,
    // }
    const action = addItemAction()
    store.dispatch(action)
  }
  deleteItem(index) {
    // const action = {
    //   type: DELETE_ITEM,
    //   index
    // }
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;
