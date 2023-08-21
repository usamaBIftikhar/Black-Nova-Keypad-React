import React, {useState} from 'react'
import IconTextSize from './icon_text_size/IconTextSize';
import IconTextColor from './color/IconTextColor';
import IconText from './icon_text_change/IconText';
import KeypadDetail from './details/KeypadDetail';

function Engraving(props) {

    const [designBox, setDesignBox] = useState(0);

    const getContainer = () => {
        if(designBox === 0)
            return <IconTextSize frameSide={props.frameSide} keypad={props.keypad} setKeypad={props.setKeypad}/>
        if(designBox === 1)
            return <IconText frameSide={props.frameSide} keypad={props.keypad} setKeypad={props.setKeypad}/>
        if(designBox === 2) 
            return <IconTextColor frameSide={props.frameSide} keypad={props.keypad} setKeypad={props.setKeypad}/>
        if(designBox === 3)
            return <KeypadDetail keypad={props.keypad} setKeypad={props.setKeypad}/>
        return <></>
    }

  return (
    <>
        <div className='h-fit flex flex-col'>
            <div className='h-fit flex justify-center items-center'>
                <button className='w-fit h-fit py-2 px-4 border hover:shadow-md' onClick={()=> setDesignBox(0)}>Icon And Text</button>
                <button className='w-fit h-fit py-2 px-4 border hover:shadow-md' onClick={()=> setDesignBox(1)}>Buttons</button>
                <button className='w-fit h-fit py-2 px-4 border hover:shadow-md' onClick={()=> setDesignBox(2)}>Icon Color</button>
                <button className='w-fit h-fit py-2 px-4 border hover:shadow-md' onClick={()=> setDesignBox(3)}>Details</button>
            </div>
            { 
                getContainer()
            }
        </div>
    </>
  )
}

export default Engraving
