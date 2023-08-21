import React from 'react'
import { textOnly, iconOnly, iconAndText, updateKeypadFrameTextIcon } from '../../utils/utils'


function StyleButtonContainer(props) {
  return (
    <>
        <div className='flex justify-center items-center space-x-2 w-fit'>
            <button  className='w-[80px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700' onClick={() => props.setKeypad(updateKeypadFrameTextIcon(props.keypad, props.index, "ICON"))}>
                <span style={{...props.keypad.background}}  className=' w-[36px] h-[36px]'>.</span>
                <span className='h-fit'>Icon</span>
            </button>
            <button  className='w-[80px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700' onClick={() => props.setKeypad(updateKeypadFrameTextIcon(props.keypad, props.index, "TEXT"))}>
                <span style={{...props.keypad.background}}  className=' w-[36px] h-[36px]'>.</span>
                <span className='h-fit'>Text</span>
            </button>
            <button  className='w-[80px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700' onClick={() => props.setKeypad(updateKeypadFrameTextIcon(props.keypad, props.index, "ICONTEXT"))}>
                <span style={{...props.keypad.background}}  className=' w-[36px] h-[36px]'>.</span>
                <span className='h-fit'>Icon & Text</span>
            </button>
        </div>
    </>
  )
}

export default StyleButtonContainer
