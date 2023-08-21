import React from 'react'
import KeypadContainer from '../keypad/KeypadContainer';
import { getDimension, getProductCode } from '../../utils/utils';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

function ArtworkPreview(props) {

   const componentRef = useRef(null)

   const handleToPrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "JK Artwork",
    onAfterPrint:  () => alert("🖨️ Printing Success 🖨️"),
    pageStyle: `@media print {
        @page {
          size: 300mm 400mm;
          margin: 0;
        }
      }`
   })

  return (  
    <>
        <div className='flex flex-col justify-center items-center mx-32'>
            <div className='p-24 flex flex-col' id='preview' ref={componentRef} >
                <h1 className='h-fit mb-10 '>ARTWORK PREVIEW</h1>
                <table className='border flex flex-col'>
                    <tr className='h-fit flex justify-center items-center border py-5'>
                        <div className='h-[400px] flex justify-center items-center'>
                            <KeypadContainer switchCollection={props.switchCollection} color={props.color} keypad={props.keypad} setKeypad={props.setKeypad}/>
                        </div>
                    </tr>
                    <tr className='flex flex-col items-center'>
                        <tr className='flex justify-start items-center h-fit py-3 px-3'>
                            Product Information
                        </tr>
                        <tr className='h-fit grid grid-cols-2'>
                            <td className='py-3 px-3 border text-lg'>Art Name</td>
                            <td className='py-3 px-3 border'>{props.keypad.artname}</td>
                        </tr>
                        <tr className='h-fit border grid grid-cols-2'>
                            <td className='py-3 px-3 border text-lg'>Product Code</td>
                            <td className='py-3 px-3 border'>{getProductCode(props.keypad)}</td>
                        </tr>
                        <tr className='h-fit grid grid-cols-2'>
                            <td className=' py-3 px-3 border text-lg'>Physical Interface</td>
                            <td className='py-3 px-3 border'>{props.keypad.protocol}</td>
                        </tr>
                        <tr className='h-fit grid grid-cols-2'>
                            <td className='py-3 px-3 border text-lg'>Dimension</td>
                            <td className='py-3 px-3 border'>{getDimension(props.keypad)}</td>
                        </tr>
                        <tr className='h-fit grid grid-cols-2'>
                            <td className='py-3 px-3 border text-lg'>Display Color</td>
                            <td className='py-3 px-3 border'>{props.keypad.background.backgroundColor}</td>
                        </tr>
                    </tr>
                </table>
                
            </div>
            <div className='flex h-fit w-fit justify-center items-center '>
                    <button className='h-[50px] w-[200px] border m-4 rounded-md border-blue-600 hover:text-white hover:bg-blue-600' onClick={() => handleToPrint()}>Download</button>
            </div>
        </div>
    </>
  )
}

export default ArtworkPreview;