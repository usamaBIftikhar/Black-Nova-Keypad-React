import React from 'react'
import ColorBoxContainer from './ColorBoxContainer'
import ColorPicker from "../../others/ColorPicker"
import { updateKeypadFrameColor } from '../../../utils/utils';

function IconTextColor(props) {

    const handleColorMaster = (frameNumber, e) => {
        props.setKeypad(updateKeypadFrameColor(props.keypad,frameNumber, e));
    }
  return (
   <>
    <div className='h-fit flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col'>
                    <div className='flex justify-around'>
                        {
                            props.keypad.frame.map( (frame, i) => {
                                const handleColor = (e) => {
                                    handleColorMaster(i, e);
                                }
                                return <>
                                        <div className="flex justify-center items-center space-x-4">
                                            <div className="h-fit w-fit flex justify-center items-center flex-col">
                                                <h1 className="h-fit w-fit">Master</h1>
                                                <ColorPicker value={frame.components[0].fill} handleChange={handleColor}/>
                                            </div>
                                            <div className='grid grid-cols-3 gap-3 max-w-[450px] border p-5'>
                                                {
                                                    <ColorBoxContainer index={i} frame={frame} keypad={props.keypad} setKeypad={props.setKeypad}/>
                                                }
                                            </div>
                                        </div>
                                       </>
                            })
                        }
                    </div>
            </div>
        </div>
   </>
  )
}

export default IconTextColor
