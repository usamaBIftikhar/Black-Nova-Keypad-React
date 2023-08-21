import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Application from "../pages/Application";
import { getSwitches, getDefaultKeypad } from "../utils/utils";

function App() {

  const [color, setColor] = useState("#000000")
  const [board, setBoard] = useState( [ getSwitches() ])
  const [keypad, setKeypad] = useState(getDefaultKeypad())
  const [frameSide, setFrameSide] = useState(["Side"])
  
  useEffect(() => {
    
    return () => {
    };
  }, [keypad]);

  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/application/*" element={<Application setColor={setColor}  switchCollection={board} setFrameSide={setFrameSide} frameSide={frameSide} color={color} setBoard={setBoard}  setKeypad={setKeypad} keypad={keypad}/>}/>
        </Routes>
    </>
  );
}

export default App;
