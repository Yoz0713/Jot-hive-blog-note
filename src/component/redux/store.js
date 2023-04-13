import { configureStore } from '@reduxjs/toolkit'
import {listReducer} from "./features/switchContent"
export const store =  configureStore({
  reducer: {
    list:listReducer
  }
})