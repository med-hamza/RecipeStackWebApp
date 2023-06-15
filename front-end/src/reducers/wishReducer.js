import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistItem : localStorage.getItem('wishlistItem') ? JSON.parse(localStorage.getItem('wishlistItem')) : []
}


export const wishSlice= createSlice ({

     name: 'wishlists',
     initialState,
     reducers: {
      
        
        addToWishlist: (state, action) => {
            // const recipeData = action.payload;
            // console.log("Favorite recipe data:", recipeData);


        const existItemWishlist = state.wishlistItem?.findIndex(item=> item._id === action.payload?._id)  


         if(existItemWishlist >=0) {
            alert ("Recipe exist")
         } else {
            let itemWishlist = {...action.payload}
            state.wishlistItem?.push(itemWishlist);
            localStorage.setItem('wishlistItem' , JSON.stringify(state.wishlistItem))
         }

          },

      clearAllWishlist: (state,action) => {
        state.wishlistItem = [];

      },

      removeWishlist:(state, action) => {
        
        let itemfiltred= state.wishlistItem?.filter((item)=>item?._id !== action.payload?._id)
        state.wishlistItem = itemfiltred
        localStorage.setItem('wishlistItem' , JSON.stringify(state.wishlistItem))
      },


     }

}

)

export const { addToWishlist, clearAllWishlist, removeWishlist } = wishSlice.actions
export default wishSlice.reducer;