import React from 'react'
import ColorPicker from '../others/ColorPicker';
import {updateKeypadImage, updateKeypadColor} from '../../utils/utils'

function Material(props) {

  const handleKeypad = (e) => {
      props.setKeypad(updateKeypadImage(props.keypad, URL.createObjectURL(e.target.files[0])))
  }

  const handleColor = (e) => {
    props.setKeypad(updateKeypadColor(props.keypad, e))
  }


  return (
    <>
      
          <div className='flex justify-center items-center flex-col space-y-12 pb-6'>
              <h1 className='h-fit w-fit text-2xl font-light'>Select Background</h1>
              <div className='flex justify-center items-center space-x-7'>
                <ColorPicker handleChange={handleColor} keypad={props.keypad} setKeypad={props.setKeypad} color={props.keypad.background}/>
                <label style={{backgroundColor: props.keypad.background["backgroundImage"] === null ? "blue" : "Green"}} htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-[100px] h-[100px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-500 text-white">
                    <input id="dropzone-file" type="file" className="hidden" onChange={(e) => handleKeypad(e)}/>
                    Choose
                </label> 
              </div>
          </div>
    </>
  )
}

export default Material
