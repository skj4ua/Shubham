const redux = require('redux');
const createstore = redux.createStore


const initialstate ={
    counter:0
}
// Reducer

const rootreducer = (state = initialstate,action) =>{
    if(action.type === 'INC_COUNTER')
    return{
        ...state,
        counter:state.counter + 1

    } 
    if(action.type === 'ADD_COUNTER')
    return{
        ...state,
        counter:state.counter + action.value

    } 
    return state
}
//Store

const store = createstore(rootreducer);
console.log(store.getState())


//Subscription 
store.subscribe(() =>{
    console.log("[Subscription]",store.getState() )
})
//Dispatching the action

store.dispatch({type:'INC_COUNTER'})
store.dispatch({type:'ADD_COUNTER' , value:10})
console.log(store.getState())

