import { configureStore } from '@reduxjs/toolkit'
import  cardsReducer from '../reducer/reducer'

export default configureStore({
  reducer: {
    cards: cardsReducer,
  },
})