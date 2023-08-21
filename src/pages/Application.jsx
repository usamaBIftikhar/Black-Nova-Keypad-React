import React from 'react'
import Product from "../components/product/Product";
import Engraving from "../components/engraving/Engraving";
import StyleBoard from "../components/style/StyleBoard";
import ArtworkPreview from '../components/preview/ArtworkPreview';
import Material from "../components/material/Material"
import Format from "../components/format/Format";
import { Route, Routes} from "react-router-dom";
import KeypadContainer from '../components/keypad/KeypadContainer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FrameSides from '../components/others/FrameSides';
import ProgressBar from '../components/others/ProgressBar'

function Application(props) {

  const [path, setPath] = useState(1);
  const urls = ["", "/format","/product","/style","/engraving","/preview"]

  const nextPath = () => {
    if (path < urls.length)
      setPath(path+1)
    return urls[path]
  }

  const prevPath = () => {
    if (path >= 1)
      setPath(path-1)
    return urls[path]
  }

  useEffect(() => {
    
    return () => {
      
    };
  }, [path]);


  return (
    <>
      <div className='flex flex-col'>
          <ProgressBar currentStep={path}/>
          <KeypadContainer switchCollection={props.switchCollection} color={props.color} keypad={props.keypad} setKeypad={props.setKeypad}/>
          <FrameSides keypad={props.keypad}/>
          <div className='flex flex-row h-fit justify-center items-center pb-3 border p-6'>
            <Link className='max-w-[100px] min-w-[100px] max-h-[100px] min-h-[100px] bg-gray-600 flex justify-center items-center hover:shadow-sm text-white hover:bg-gray-500' to={"/application"+urls[path-1]} onClick={() => prevPath()}>Back</Link>
            <Routes>
              <Route exact path="/" element={<Material keypad={props.keypad} setKeypad={props.setKeypad}/>} />
              <Route exact path="/format" element={<Format color={props.color} handleFrameSide={props.setFrameSide} keypad={props.keypad} setKeypad={props.setKeypad}/>}/>
              <Route exact path="/product" element={<Product keypad={props.keypad} setKeypad={props.setKeypad}/>} />
              <Route exact path="/style" element={<StyleBoard color={props.color} keypad={props.keypad} setKeypad={props.setKeypad}/>} />
              <Route exact path="/engraving" element={<Engraving frameSide={props.frameSide} color={props.color} keypad={props.keypad} setKeypad={props.setKeypad}/>} />
              <Route exact path="/preview" element={<ArtworkPreview keypad={props.keypad}/>} />
            </Routes>
            <Link  className='max-w-[100px] min-w-[100px] max-h-[100px] min-h-[100px] bg-gray-600 flex justify-center items-center hover:shadow-sm text-white hover:bg-gray-500' to={"/application"+urls[path+1]} onClick={() => nextPath()}>Next</Link>
          </div>
      </div>
    </>
  )
}

export default Application
