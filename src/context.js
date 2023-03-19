import React,{useContext,useState,useReducer,useEffect} from 'react';
import slidedata from './data/slidedata'
import productdata from './data/productdata'
import reducer from './reducer'

const AppContext = React.createContext()
const initialState = {
    products:productdata,
    checkoutArr:[],
    total:0,
    amount:0
}
const AppProvider = ({children})=>{
    const [slides,setSlides] = useState(slidedata);
    const [state,dispatch] =useReducer(reducer,initialState)


    const handleOpenCheckout =(id) =>{
       let result= state.products.find(ele => {
            if(ele.id ===id){
               return ele
            }
        });
       dispatch({type:"ADD__CHECKOUT__PAGE",payload:result})
    }

    useEffect(()=>{
        dispatch({type:"GET_TOTALS"})
    },[state.checkoutArr])
    return <AppContext.Provider 
            value ={{
                slides,
                state,
                handleOpenCheckout
            }}
        >{children}</AppContext.Provider>
}


const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalContext}