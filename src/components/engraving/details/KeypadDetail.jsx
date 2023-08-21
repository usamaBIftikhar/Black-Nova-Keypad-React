import React from 'react'
import { updateKeypadProtocol, updateKeypadArtworkName } from '../../../utils/utils'

function KeypadDetail(props) {

  const handleProtocol = (e) => {
    props.setKeypad(updateKeypadProtocol(props.keypad, e))
  }

  const handleArtworkName = (e) => {
    props.setKeypad(updateKeypadArtworkName(props.keypad, e))
  }

  


  return (
    <>
      <div className='h-fit py-5 flex justify-center items-center space-x-16'>
          <div className='w-fit flex flex-col space-y-4 justify-center items-center'>
              <h1 className='text-center'>Communication Protocol</h1>
              <select className='rounded-none h-[50px] w-[400px] border' name="" id="" onChange={(e) => handleProtocol(e.target.value)}>
                  <option value="KNX">KNX</option>
                  <option value="WIFI">WIFI</option>
              </select>
          </div>
          <div className='w-fit flex flex-col space-y-4 justify-center items-center'>
              <h1 className='text-center'>Artwork Name</h1>
              <input className='w-[400px] h-[50px] border outline-green-500 px-4' placeholder='AN VIARA ARTWORK' type="text" name="" id="" onChange={(e) => handleArtworkName(e.target.value) }/>
          </div>
      </div>
    </>
  )
}

export default KeypadDetail
