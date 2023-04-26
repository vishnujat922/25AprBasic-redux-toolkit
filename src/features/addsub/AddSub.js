import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decreament, increament, reset } from './AddSubSlice'

const AddSub = () => {

  const data = useSelector(state =>state.counter.value)
  const dispatch = useDispatch()
  //console.log(data)

  return (
    <div>
      <h1>{data}</h1>
        <button onClick={()=>{dispatch(increament())}}>+</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
        <button onClick={()=>{dispatch(decreament())}}>-</button>
    </div>
  )
}

export default AddSub