import {configureStore} from '@reduxjs/toolkit'
import liftReducer from '../features/liftSlice'

export const store = configureStore({
    reducer: {
        elevator: liftReducer
    }
})