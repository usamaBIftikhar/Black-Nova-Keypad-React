import React,{useState} from 'react'
import FrameSides from '../../others/FrameSides'
import IconTextBoxContainer from './IconTextBoxContainer'
import IconContainer from './IconContainer';

function IconText(props) {


  return (
    <>
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col border p-6'>
                    <div className='flex justify-around'>
                        {
                            props.keypad.frame.map( (frame, i) => {
                                return <>
                                            <div className='grid grid-cols-3 gap-3 max-w-[450px] border p-5'>
                                                {
                                                    <IconTextBoxContainer key={i} index={i} frame={frame} keypad={props.keypad} setKeypad={props.setKeypad}/>
                                                }
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

export default IconText
