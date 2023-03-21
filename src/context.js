import React,{useContext,useState,useReducer,useEffect} from 'react';
import slidedata from './data/slidedata'
import productdata from './data/productdata'
import reducer from './reducer'
import {auth} from './firebase'

const AppContext = React.createContext()
const initialState = {
    products:productdata,
    checkoutArr:[],
    total:0,
    price:0
}
const AppProvider = ({children})=>{
    const [slides,setSlides] = useState(slidedata);
    const [state,dispatch] =useReducer(reducer,initialState)
    //-----sign----
    const [currentUser,setCurrentUser] = useState('')

// check out ------------------------------------------------------pages---------------
    const handleOpenCheckout =(id) =>{
        if(state.checkoutArr.length >0){
            state.checkoutArr.forEach(item =>{
                let {amount} = item
                if(item.id ===id){
                    console.log('item 1')
                    let result = {...item,amount:amount+1}
                    console.log(result)
                    dispatch({type:'UPDATE__AMOUNT',payload:{data:result,id:id}})
                }
                else{
                    console.log('item not id')
                    let result= state.products.find(ele => {
                        if(ele.id ===id){
                           return ele
                        }
                    });
                   dispatch({type:"ADD__CHECKOUT__PAGE",payload:result})
                }
            })
        }else{
            console.log('item length =0')
            let result= state.products.find(ele => {
                if(ele.id ===id){
                   return ele
                }
            });
           dispatch({type:"ADD__CHECKOUT__PAGE",payload:result})
        }
        
       
    }
    const handleIncrese = (id)=>{
        dispatch({type:"INCRESE___AMOUNT",payload:id})
    }

    const handleDecrese =(id)=>{
        dispatch({type:"DECRESE__AMOUNT",payload:id})
    }

    const handleDelete = (id)=>{
        dispatch({type:"DELETE__ITEM",payload:id})
    }

    const handleRemoveAll = ()=>{
        dispatch({type:"REMOVE__ALL"})
    }

    useEffect(()=>{
        dispatch({type:"GET_TOTALS"});
        dispatch({type:"GET__PRICE"});
    },[state.checkoutArr])

    //----------------------------------------------------------------signin-sign up pages----------------------
    const signup = (email,password)=>{
       return auth.createUserWithEmailAndPassword(email,password)
    }

    const login = (email,password) =>{
        return auth.signInWithEmailAndPassword(email,password);
    }

    const logout = ()=>{
        return auth.signOut();
    }

    const resetPassword = (email)=>{
        return auth.sendPasswordResetEmail(email)
    }
    // take state user
    useEffect(()=>{
        const unsubcribe = auth.onAuthStateChanged(user=>{
                            setCurrentUser(user)
                        })
        return unsubcribe
    })

    return <AppContext.Provider 
            value ={{
                slides,
                state,
                handleOpenCheckout,
                handleIncrese,
                handleDecrese,
                handleDelete,
                handleRemoveAll,
                currentUser,
                signup,
                login,
                logout,
                resetPassword
            }}
        >{children}</AppContext.Provider>
}


const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalContext}