import React from 'react'
import ColorPicker from "../../others/ColorPicker"
import { updateKeypadSwitchColor } from '../../../utils/utils';

function ColorBoxContainer(props) {

  const handleColorSwitch = ( boardNumber, id ,value) => {
    props.setKeypad(updateKeypadSwitchColor(props.keypad, boardNumber, id, value));
  }



  return (
    <>
        {
        props.frame.components.map((button, j) => {
          
            const handleChange = (color)=>{
                handleColorSwitch(props.index, button.id, color);
            }

          return <ColorPicker value={button.fill} key={j} handleChange={handleChange}/>
        })
      }
    </>
  )
}

export default ColorBoxContainer
