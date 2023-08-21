import React from 'react'
import IconTextBox from './IconTextBox'

function IconTextBoxContainer(props) {
  return (
    <>
      {
        props.frame.components.map( (button, j) => {
            return <IconTextBox key={j} switch={button} display={props.display} setdisplay={props.setdisplay} frame={props.frame} keypad={props.keypad} setKeypad={props.setKeypad} index={props.index}/>
          }
        )
      }
    </>
  )
}

export default IconTextBoxContainer
