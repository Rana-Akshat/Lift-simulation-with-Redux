import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { callFloor, moveup, movedown } from '../features/liftSlice'

function LiftControl () {
    const dispatch = useDispatch()
    const { currentFloor, direction, calledFloors } = useSelector((state) => state.elevator)

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
            {[7, 6, 5, 4, 3, 2, 1].map(floor => (
                <div className='floorkey' key={floor}>
                    <div className='floornumber'>Floor - {floor}</div>
                    {floor < 7 && (
                    <button onClick={handleMoveUp}>Up</button>)}
                    {" "}
                    {floor > 1 && (
                    <button onClick={handleMoveDown}>Down</button>)}
                    {currentFloor === floor && direction === null && (
                        <div className = 'liftbox'></div>
                    )}
                </div>
            ))}
            <div className="movebttn">
                <input type="number"
                min="1" max="7" 
                placeholder='enter floor'/>
                {" "}
                <button onClick={() =>handleCall(document.querySelector('input').value)}>Move</button>
            </div>
        </div>
    )
}

export default LiftControl