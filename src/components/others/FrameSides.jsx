import React from 'react'

function FrameSides(props) {
  return props.keypad.frame.length == 1 ? (
        <div className='h-fit flex justify-center items-center border'>
            <div className='flex justify-center items-center flex-col p-4'>
                <h1 className='h-fit text-center text-lg'>Frame</h1>
            </div>
        </div>
        ) : 
        props.keypad.frame.length == 2 ? (
            <div className='h-fit flex justify-center items-center border'>
                <div className='flex justify-center items-center flex-col p-4 border'>
                    <h1 className='h-fit text-center text-lg'>Left Frame</h1>
                </div>
                <div className='flex justify-center items-center flex-col p-4 border'>
                    <h1 className='h-fit text-center text-lg'>Right Frame</h1>
                </div>
            </div>
        ) : null
}

export default FrameSides
