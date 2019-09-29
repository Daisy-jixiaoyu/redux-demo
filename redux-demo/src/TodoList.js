import React, { Component, Fragment } from 'react';
import store from './store/index'
import 'antd/dist/antd.css'
import { Input , Button, List} from 'antd'
import {  ADDITEM} from './store/actionTypes'
import { change_input ,getNewListAction} from './store/actionCreators'
// import axios from 'axios'

// const data = [
//     'first:dsfdffsd',
//     'second:dffs',
//     'thrid:dshfdshfdsh'
// ]
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.inputChange = this.inputChange.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        store.subscribe(this.storeChange)
      
    }
    componentDidMount(){
        const action = getNewListAction()
        store.dispatch(action)
    }
    inputChange(e){
        let action  = change_input(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        let action = {
            type:ADDITEM
        }
        store.dispatch(action)
    }
    componentDidUpdate(){
        console.log('组件更新')
    }
    render() {
        return (
            <Fragment>
                <div>hello </div>
                <Input placeholder={this.state.inputValue} style={{width:'250px'}} onChange={this.inputChange}/>
                <div>{this.state.value}</div>
                <Button type="primary" onClick={this.clickBtn}>按钮</Button>
                <List dataSource={this.state.list} renderItem={(item)=>(<List.Item>{item}</List.Item>)} />
            </Fragment>

        );
    }
}

export default TodoList;