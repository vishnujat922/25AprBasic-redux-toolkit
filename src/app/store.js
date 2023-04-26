import { configureStore } from '@reduxjs/toolkit';

import AddSubSlice from '../features/addsub/AddSubSlice';


export const store = configureStore({
    //1. P:V
    reducer:{
        //1. P:V

        //2. Method
        counter:AddSubSlice
        
    }
})