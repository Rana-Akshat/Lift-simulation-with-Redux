import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentFloor: 1,
    direction: null,
    calledFloors: [], 
}

export const liftSlice = createSlice({
    name: 'lift',
    initialState, 
    reducers: {
        callFloor: (state, action) => {
            const { floor } = action.payload
            if(state.calledFloors < floor){
                state.calledFloors.push(floor)
                const diff = floor - state.currentFloor
                state.currentFloor += diff
            }
            else if(state.calledFloors > floor){
                state.calledFloors.push(floor)
                const diff = state.currentFloor - floor
                state.currentFloor -= diff
            }
            else{
                state.currentFloor.push(floor)
                state.currentFloor = floor
            }
        },
        moveup: (state) => {
            state.currentFloor = state.currentFloor + 1
            state.calledFloors = state.calledFloors.filter(floor => floor !== state.currentFloor)
            if(state.calledFloors.length === 0){
                state.direction = null
            }
        },
        movedown: (state) => {
            state.currentFloor -= 1
            state.calledFloors = state.calledFloors.filter(floor => floor !== state.currentFloor)
            if(state.calledFloors.length === 0){
                state.direction = null
            }
        }
    }
})

export const {callFloor, moveup, movedown} = liftSlice.actions
export default liftSlice.reducer