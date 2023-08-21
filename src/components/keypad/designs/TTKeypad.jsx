import React from 'react'
import LCD from '../LCD'
import Switch from '../Switch'

function TTKeypad(props) {
  return (
    <>
    <div style={{...props.keypad.background}} className='h-[380px] w-[380px] px-4 py-9 bg-no-repeat bg-cover flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center space-x-8'>
            <Switch frame={props.frame} switch={props.frame.components[0]}/>
            <Switch frame={props.frame}  switch={props.frame.components[1]}/>
        </div>
        <div className='flex justify-center items-center space-x-4'>
            <Switch frame={props.frame}  switch={props.frame.components[2]}/>
            <LCD/>
            <Switch frame={props.frame}  switch={props.frame.components[4]}/>
        </div>
        <div className='flex justify-center items-center space-x-10'>
            <Switch frame={props.frame}  switch={props.frame.components[3]}/>
            <Switch frame={props.frame}  switch={props.frame.components[5]}/>
            <Switch frame={props.frame}  switch={props.frame.components[6]}/>
        </div>
        <div className='flex justify-center items-center space-x-16'>
            <Switch frame={props.frame}  switch={props.frame.components[7]}/>
            <Switch frame={props.frame}  switch={props.frame.components[8]}/>
            <Switch frame={props.frame}  switch={props.frame.components[9]}/>
        </div>
    </div>
    </>
  )
}

export default TTKeypad
