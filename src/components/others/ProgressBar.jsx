import React from 'react'
import ProgressItem from './ProgressItem'

const ProgressBar = (props) => {
    let animationClass = {
        animation: "move-lr 1.0s linear 1"
    }
    let textColor = {
        color: 'rgb(0,200, 0)'
    }
    let borderColor = {
        borderColor: 'rgb(0,200, 0)'
    }

    let widthCSS = {
        width: '100%',
        backgroundColor: 'rgb(0,200,0)'
    }

    let totalSteps = ['Material','Format','Product','Style','Engraving','Create']


  return (
    <div className='max-h-[80px] min-h-[80px] bg-white flex items-center border px-5'>
        { 
            totalSteps.map((text, index) => {
                return <ProgressItem key={index} text={text} index={index+1} textColor={props.currentStep >= index+1 ? textColor: {}} borderColor={props.currentStep > index ? borderColor: {} } completed={props.currentStep > index ? widthCSS : {}} animationClass={props.currentStep == index+1 ? animationClass : ''}/>
            })
        }
    </div>
  )
}

export default ProgressBar
