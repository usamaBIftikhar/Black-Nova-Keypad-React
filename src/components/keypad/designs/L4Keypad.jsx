import React from 'react'
import Switch from '../Switch'

const L4Keypad = (props) => {
  return (
    <>
        <div style={{...props.keypad.background}} className='h-[380px] w-[380px] px-4 py-9 bg-no-repeat bg-cover flex justify-center items-center'>
          <div className='w-fit h-fit grid grid-cols-2 content-center gap-x-[100px] gap-y-[100px] mt-6'>
          {
              props.frame.components.map( (button, i) => {
                  return  <Switch key={i} frame={props.frame} switch={button}/>
              } )
          }
          </div>
        </div>
    </>
  )
}

export default L4Keypad
