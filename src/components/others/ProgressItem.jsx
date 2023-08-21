import React, {useState} from 'react'

const ProgressItem = (props) => {

  return (
    <>
        <div className='w-[16.8%] h-fit flex items-center'>
            <div style={{...props.borderColor, ...props.textColor}} className={'w-[45px] h-[40px] rounded-full bg-white flex justify-center items-center text-gray-200 text-[19px] border-[3px] border-gray-100 '}>{props.index}</div>
            <div className='h-fit pb-5'>
                <h1 style={props.textColor} className={'pl-2 text-lg'}>{props.text}</h1>
                <div className='bg-gray-200 h-[5px]'>
                    <div style={{...props.completed, ...props.animationClass}} className={'bg-slate-100 rounded-full'}></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProgressItem
