import React from 'react'
import StyleButtonContainer from './StyleButtonContainer'

function StyleBoard(props) {
  return (
    <>
        <div className='h-fit flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col'>
                <div className='flex justify-around'>
                    {
                        props.keypad.frame.map( (frame, i) => {
                            return <>
                                        <div className='w-fit py-3 flex justify-center items-center space-x-5'>
                                            <StyleButtonContainer key={i} index={i} keypad={props.keypad} setKeypad={props.setKeypad}/>
                                        </div>
                                    </>
                        } )
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default StyleBoard
