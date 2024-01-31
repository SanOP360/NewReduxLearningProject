import React from "react";
import { useSelector,useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const Dispatch=useDispatch();
  
  const counter = useSelector((state) => state.counter);
  const show=useSelector((state)=>state.showCounter)

  const increaseHandler=()=>{
    Dispatch({type:'increase',amount:2});
  }

  const increamentHandler=()=>{
    Dispatch({type:"increament"})
  }
  const decreamentHandler=()=>{
    Dispatch({type:'decreament'})

  }

  const toggleCounterHandler = () => {
    Dispatch({type:'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        {" "}
        <button onClick={increamentHandler}>IncreamentBy5</button>
        <button onClick={decreamentHandler}>DecreamentBy5</button>
        <button onClick={increaseHandler}>IncreamentBy2</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
