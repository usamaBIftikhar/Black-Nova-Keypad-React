import React from 'react'
import { getIconCategories, updateKeypadSwitchIcon } from '../../../utils/utils'

const CatIcon = (props) => {
  return (
    <>
        {
            getIconCategories().map((cat, i) => {
                return <>
                            {
                                <div className='h-fit border p-3 my-2'>
                                    <h1 className='h-fit py-3 capitalize text-green-600'>{cat.name}</h1>
                                    {
                                        cat.icons.map( (imgUrl, i) => {
                                            return <>
                                                        <button className='h-fit w-fit' onClick={() =>  props.setKeypad(updateKeypadSwitchIcon(props.keypad, props.index, props.switch.id, imgUrl))}>
                                                            <img className='h-[70px] w-[70px] p-4 border mx-3 rounded-md' src={process.env.PUBLIC_URL+"/"+imgUrl} alt="logo" />
                                                        </button>
                                                    </>
                                        })
                                    }
                                </div>
                            }
                        </>
            })
        }
    </>
  )
}

export default CatIcon
