import React, {useState} from 'react'
import CatIcon from './CatIcon'

const IconContainer = (props) => {

  const handleClose = () => {
      props.setvisible('hidden');
  }


  return (
    <>
        <div style={{"visibility": props.visibile}} className='top-0 left-0 flex justify-center items-center fixed h-screen w-screen bg-gray-700 bg-opacity-75 z-10' onClick={() => props.setvisible('hidden')}>
        </div>
        <div style={{"visibility": props.visibile}} className='flex z-20 absolute top-1/4 left-48 flex-col bg-white h-[500px] w-[900px] rounded-md'>
            <div className='flex h-fit'>
                <h1 className='flex justify-start items-center flex-1 px-5 text-lg text-green-600'>Icon Selection</h1>
                <div className='flex justify-end items-center flex-1 h-[100px] px-3 '>
                  <img src={process.env.PUBLIC_URL+"/resources/images/close_icon.png"} className="w-[30px] h-[30px] hover:shadow-lg hover:cursor-pointer" alt="cross"  onClick={() => handleClose()}/>
                </div>
            </div>
            <div className='flex flex-wrap flex-1 overflow-y-scroll m-5 h-full scroll-smooth'>
                <CatIcon keypad={props.keypad} index={props.index} setKeypad={props.setKeypad} switch={props.switch}/>
            </div>
        </div>
    </>
  )
}

export default IconContainer
