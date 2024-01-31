import React from "react";
import { useSelector,useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const Dispatch=useDispatch();
  
  const counter = useSelector((state) => state.counter);

  const increamentHandler=()=>{
    Dispatch({type:"increament"})
  }
  const decreamentHandler=()=>{
    Dispatch({type:'decreament'})

  }

  const toggleCounterHandler = () => {

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
    <div>  <button onClick={increamentHandler}>Increament</button>
      <button onClick={decreamentHandler
      }>Decreament</button></div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
