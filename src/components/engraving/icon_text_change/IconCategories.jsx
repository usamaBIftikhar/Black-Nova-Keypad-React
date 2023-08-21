import React from 'react'
import { getIconCategories } from '../../../utils/utils'

const IconCategories = (props) => {
    

  return (
    <>
    {
        getIconCategories().map( (cat, i) => {
           return  <button className='w-[100px] h-[100px] bg-white border shadow-black rounded-md flex justify-center items-center m-3' onClick={props.setcats(i)}>
                        <h1 className='h-fit text-center capitalize'>{cat.name}</h1>
                    </button>

        })
    }
    </>
  )
}

export default IconCategories
