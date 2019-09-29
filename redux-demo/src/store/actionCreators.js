import {CHANGE_INPUT,GET_LIST,NEW_LIST } from './actionTypes'
import axios from 'axios'
export const change_input = (value)=>{
    return {
        type:CHANGE_INPUT,
        value
    }
}
export const getListAction = (data)=>{
    return {
        type:GET_LIST ,
        data
    }
}

export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('/app/users/list/').then((res)=>{
            let data = res.data.list
            console.log(data)
            const action = getListAction(data)
            dispatch(action)
            // let action = getListAction(data)
            // store.dispatch(action)
            
         })
    }
}
export const getNewListAction = ()=>{
    return {
        type:NEW_LIST
    }
}
// export const getTodoList = ()=>{
//     return (dispatch)=>{
//         axios.get('/app/users/list/').then((res)=>{
//             let data = res.data.list
//             const action = getListAction(data)
//             dispatch(action)
//             // let action = getListAction(data)
//             // store.dispatch(action)
            
//          })
//     }
// }