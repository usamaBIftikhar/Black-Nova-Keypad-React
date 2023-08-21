import React from 'react'
import {updateKeypadDesign} from '../../utils/utils'

function Product(props) {

  let frameDesign = ["L4","L9","L12","TT"]
  let frames = props.keypad.frame.length === 1 ? [0] : [0, 1]


  return (
    <>
        {
            frames.map( (i, j) => {
                return <>
                            <div className='flex flex-row justify-center items-center flex-wrap'>
                                {frameDesign.map((k,l) => {
                                    return <>
                                                <button key={l} className='w-[150px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700 m-2' onClick={() => props.setKeypad(updateKeypadDesign(props.keypad, j, frameDesign[l]))}>
                                                    <span style={{...props.keypad.background}} className='bg-green-600 w-[36px] h-[36px] bg-no-repeat bg-cover'>.</span>
                                                    <span className='h-fit'>{k}</span>
                                                </button>
                                            </>  
                                })}
                            </div>
                        </>
            })
        }
    </>
  )
}

export default Product
