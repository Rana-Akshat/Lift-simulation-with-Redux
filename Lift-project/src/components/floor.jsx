import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { callFloor, moveup, movedown } from '../features/liftSlice'

function LiftControl () {
    const dispatch = useDispatch()
    const { currentFloor } = useSelector((state) => state.elevator)

    const handleCall = (floor) => {
            dispatch(callFloor({floor}))
    }

    const handleMoveUp = () => {
        if(currentFloor < 7){
            dispatch(moveup())
        }
    }

    const handleMoveDown = () => {
        if(currentFloor > 1){
            dispatch(movedown())
        }
    }

    return(
        <div className='container'>
            <div className="movebttn">
                <input type="number"
                min="1" max="7" 
                placeholder='Enter floor number'/>
                {" "}
                <button onClick={() =>handleCall(document.querySelector('input').value)}>Move</button>
                {" "}
                <button onClick={handleMoveUp}>Up</button>
                {" "}
                <button onClick={handleMoveDown}>Down</button>
            </div>
            {[7, 6, 5, 4, 3, 2, 1].map(floor => (
                <div className='floorkey' key={floor}>
                    <div className='floornumber'>Floor - {floor}</div>
                    {floor > 1 && (
                    <button onClick={handleMoveUp} disabled = {currentFloor === floor}>Up</button>)}
                    {" "}
                    {floor < 7 && (
                    <button onClick={handleMoveDown} disabled = {currentFloor === floor}>Down</button>)}
                    {currentFloor === floor && (
                        <div className = 'liftbox'></div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default LiftControl