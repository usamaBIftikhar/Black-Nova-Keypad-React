import React from 'react'
import {updateKeypadColor} from "../../utils/utils"

function ColorPicker(props) {


  return (
    <>
        <input value={props.value} className='h-[100px] w-[100px]' placeholder='Color' type="color" name='' id='colorPicker' onChange={(e) => props.handleChange(e.target.value)}/>
    </>
  )
}

export default ColorPicker
