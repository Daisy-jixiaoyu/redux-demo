import { CHANGE_INPUT, ADDITEM,GET_LIST,NEW_LIST} from './actionTypes'
const defaultState = {
    inputValue:'reducers-data',
    list:[
        '1:dfdsdfs',
        '2:fdfjdsfs'
    ]
}
export default (state=defaultState,action)=>{
    // console.log(state,action)
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))
        newState.value = action.value
        return newState
    }else if(action.type === ADDITEM){
        state.list.push('3:dfjdfsjdfds')
        return state
    }else if(action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        // newState.value = action.value
        newState.list = action.data
        return newState
    }else if(action.type === NEW_LIST){

    }
    return state
}