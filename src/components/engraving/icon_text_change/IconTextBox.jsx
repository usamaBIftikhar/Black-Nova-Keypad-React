import React,{useState} from 'react'
import { updateKeypadSwitchText, updateKeypadSwitchIcon } from '../../../utils/utils'
import IconContainer from './IconContainer';


function IconTextBox(props) {
  
  console.log(props.switch.icon);
  const handleCustomIcon = (e) => {
    // console.log(URL.createObjectURL(e.target.files[0]));  
    props.setKeypad(updateKeypadSwitchIcon(props.keypad, props.index, props.switch.id, URL.createObjectURL(e.target.files[0]), 'custom'))
  }

  const [visible, setvisible] = useState('hidden');
  return (
    <>
      <IconContainer index={props.index} visibile={visible} setvisible={setvisible} keypad={props.keypad} setKeypad={props.setKeypad} switch={props.switch}/>
      <div className='w-fit h-fit flex flex-col py-3 px-4 border space-y-2'>
        <div className='h-[100px] w-[100px] disabled:bg-gray-400 disabled:hidden border flex flex-col'>
          <button className='border' onClick={() => setvisible('visible')}>Icon</button>
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-[100px] h-[100px] border-2 border-gray-300 border-dashed cursor-pointer bg-gray-500 text-white">
            <input id="dropzone-file" type="file" className="hidden" onChange={(e) => handleCustomIcon(e)}/>
            Choose
          </label> 
        </div>
        <input disabled={props.switch.style == 'ICON'} value={props.switch.text} className='w-[100px] h-[30px] border rounded-md border-gray-600 disabled:hidden' type="text" name="" id="" onChange={(e) => props.setKeypad(updateKeypadSwitchText(props.keypad, props.index, props.switch.id, e.target.value)) }/>
      </div>
    </>
  )
}

export default IconTextBox
