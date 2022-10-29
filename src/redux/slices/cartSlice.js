import { createSlice } from '@reduxjs/toolkit';
 
const initialState = {
    cartItems: [],
    totalAmount : 0,
    totalQuantity:0
}

export const cartSlice = createSlice({
      name: "cart",
      initialState,
        reducers: {  
            addItem: (state,action) => {                          /*ADD TO CART FUNCTION -----------*/
                const newItem = action.payload;
                const existItem = state.cartItems.find(item => item.id === newItem.id);

                state.totalQuantity++
                if(!existItem){
                    state.cartItems.push({
                        id:newItem.id,
                        productName:newItem.productName,
                        price:newItem.price,
                        imgUrl:newItem.imgUrl,
                        quantity:1,
                        totalPrice: newItem.price
                    });                  
                }
                else{
                    existItem.quantity++
                    existItem.totalPrice = Number(existItem.totalPrice) + Number(newItem.price)
                }
                state.totalAmount = state.cartItems.reduce((total,item) => total + Number(item.price) * Number(item.quantity),0)          
            },
            
            deleteItem: (state,action) => {                                                 /*DELETE FROM CART FUNCTION -----------*/
                const id = action.payload;
                const existItem = state.cartItems.find(item => item.id === id);

                if(existItem){
                    state.cartItems = state.cartItems.filter(item => item.id !== id)
                    state.totalQuantity = state.totalQuantity - existItem.quantity
                }
                state.totalAmount = state.cartItems.reduce((total,item) => total + Number(item.price) * Number(item.quantity),0)

            }
   } 
 });

export const { addItem, deleteItem} = cartSlice.actions;