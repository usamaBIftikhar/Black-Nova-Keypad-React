import React from 'react'
import { updateKeypadFontSize } from '../../../utils/utils'

function IconFontSizeButton(props) {
    
  const elementToChange = ["Icon Size", "Font Size"]
  
  return (
    <>
        {
            elementToChange.map((s,i) => {
                return (
                    <>
                        <div className=' flex justify-center items-center flex-col'>
                            <h1 className='h-fit text-center'>{s}</h1>
                            <div className='flex'>
                                <button className='w-[100px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700' onClick={() => props.setKeypad(updateKeypadFontSize(props.keypad, props.index, i, 0))}>
                                    <span style={{...props.keypad.background}} className=' w-[36px] h-[36px] bg-no-repeat bg-cover'>.</span>
                                    <span className='h-fit'>Small</span>
                                </button>
                                <button className='w-[100px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700' onClick={() => props.setKeypad(updateKeypadFontSize(props.keypad, props.index, i, 1))}>
                                    <span style={{...props.keypad.background}} className='w-[36px] h-[36px] bg-no-repeat bg-cover'>.</span>
                                    <span className='h-fit'>Medium</span>
                                </button>
                            </div>
                        </div>
                    </>
                )
            })
        }
    </>
  )
}

export default IconFontSizeButton
