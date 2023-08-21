import React,{useEffect, useState} from 'react'
import {updateKeypadFrameNumber} from "../../utils/utils";

function Format(props) {

  const handleKeypadFrameNumber = (e) => {
    props.setKeypad(updateKeypadFrameNumber(props.keypad, e))
  }

  return (
    <>
        <div className='h-[100px] flex justify-center items-center space-x-4'>
            <button className='w-[150px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700'  onClick={() => handleKeypadFrameNumber(1)}>
                <span style={{...props.keypad.background}} className=' w-[36px] h-[36px] bg-no-repeat bg-cover'>.</span>
                <span className='h-fit'>Single Frame</span>
            </button>
            <button className='w-[150px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700' onClick={() => handleKeypadFrameNumber(2)}>
                <span style={{...props.keypad.background}} className=' w-[72px] h-[36px] bg-no-repeat bg-cover'>.</span>
                <span className='h-fit'>Double Frame</span>
            </button>
        </div>
    </>
  )
}

export default Format
