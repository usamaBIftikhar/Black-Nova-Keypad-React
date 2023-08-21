import React from 'react'
import Switch from '../Switch'

function L9Keypad(props) {
  return (
    <>
        <div style={{...props.keypad.background}} className='h-[380px] w-[380px] px-4 py-9 bg-no-repeat bg-cover flex justify-center items-center'>
          <div className='w-fit h-fit grid grid-cols-3 content-center gap-x-[60px] gap-y-[30px]'>
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

export default L9Keypad
