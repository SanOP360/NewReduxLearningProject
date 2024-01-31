import React from "react";
import { useSelector,useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
  const Dispatch=useDispatch();
  
  const counter = useSelector((state) => state.counter.counter);
  const show=useSelector((state)=>state.counter.showCounter)

  const increaseHandler=()=>{
    Dispatch(counterActions.increase(2));
  }

  const increamentHandler=()=>{
    Dispatch(counterActions.increament())
  }
  const decreamentHandler=()=>{
    Dispatch(counterActions.decreament())

  }

  const toggleCounterHandler = () => {
    Dispatch(counterActions.toggleCouter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        {" "}
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={decreamentHandler}>Decreament</button>
        <button onClick={increaseHandler}>IncreamentBy2</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


