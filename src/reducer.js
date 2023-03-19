const reducer =(state,action)=>{
    switch(action.type){
        case "ADD__CHECKOUT__PAGE": 
            return {...state,checkoutArr:[...state.checkoutArr, action.payload]}
            default:
                return state;
    }
}
export default reducer;