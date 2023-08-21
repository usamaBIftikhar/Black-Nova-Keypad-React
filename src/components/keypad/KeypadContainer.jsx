import React from 'react'
import L12Keypad from './designs/L12Keypad'
import L9Keypad from './designs/L9Keypad'
import TTKeypad from './designs/TTKeypad'
import L4Keypad from './designs/L4Keypad'

function KeypadContainer(props) {

  return (
    <>
        <div className={'flex justify-center items-center p-6'}>
            <div className='h-fit w-fit flex shadow-md shadow-black'>
                {
                  props.keypad.frame.map((frame, i) => {
                    return  frame.type == "L9" ?  <L9Keypad key={i} frame={frame} keypad={props.keypad}/> :
                            frame.type == "L12" ? <L12Keypad key={i} frame={frame} keypad={props.keypad}/> : 
                            frame.type == "TT" ? <TTKeypad key={i} frame={frame} keypad={props.keypad}/> :
                            frame.type == "L4" ? <L4Keypad key={i} frame={frame} keypad={props.keypad}/> : null;
                  })
                }
            </div>
        </div>
    </>
  )
}

export default KeypadContainer
