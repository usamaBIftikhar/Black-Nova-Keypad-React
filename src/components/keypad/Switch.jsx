import React from 'react'

function Switch(props) {
  return  props.switch.style === "ICON" ? (
            <>
              <div className='h-[54px] w-[54px] flex justify-center items-center'>
                <img style={props.frame.iconStyle} src={props.switch.iconType == 'none' ? process.env.PUBLIC_URL+"/"+props.switch.icon : props.switch.icon} />
               </div>
            </>
          ) : 
          props.switch.style === "TEXT" ? (
            <>
              <div className='h-[54px] w-[54px] flex justify-center items-center'>
                <h1 className='whitespace-nowrap text-center' style={{...props.frame.fontStyle, ...{color: props.switch.fill}}}>{props.switch.text}</h1>
              </div>
            </>
          ):
          props.switch.style === "ICONTEXT" ? (
            <>
              <div className='h-[54px] w-[54px] flex justify-center items-center flex-col space-y-1'>
                <img style={props.frame.iconStyle} src={props.switch.iconType == 'none' ? process.env.PUBLIC_URL+"/"+props.switch.icon : props.switch.icon} />
                <h1 className='text-center whitespace-nowrap' style={{...props.frame.fontStyle, ...{color: props.switch.fill}}}>{props.switch.text}</h1>
              </div>
            </>
          ) : null
}

export default Switch
