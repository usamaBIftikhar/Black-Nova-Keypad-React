const switchD = require("./switch.json");
const frame = require("./frame.json");
const keypad = require("./keypad.json")
const cats = require("./categories.json")
const fontSize = ["12px","16px"]
const iconSize = ["22px", "26px"]


export const getDefaultKeypad = () => {
    let defaultFrame = {...frame};
    const defaultKeypad = {...keypad};
    const defaultButton = {...switchD};
    defaultKeypad["frame"] = []
    defaultFrame["components"] = []

    let components = []
    for(let i = 0; i < 9 ; i++){
        components.push({...defaultButton, ...{"id":i}});
    }
    defaultFrame["components"] = components;
    defaultKeypad["frame"].push(defaultFrame);
    return defaultKeypad;
}

export const updateKeypadColor = (keypad, color) => {
    let newKeypad = {...keypad}
    newKeypad.background["backgroundColor"] = color
    newKeypad.background["backgroundImage"] = "none"
    return newKeypad
}

export const updateKeypadImage = (keypad, url) => {
    let newKeypad = {...keypad}
    newKeypad.background["backgroundImage"] = "url('"+url+"')";
    newKeypad.background["backgroundColor"] = "none"
    return newKeypad
}

export const updateKeypadFrameNumber = (keypad, num) => {
    if(keypad.frame.length === num)
        return keypad
    
    let newKeypad = {...keypad}
    let newFrame = []
        
    let i = 0;
    for(; i < num; i++){
        if (i < keypad.frame.length)
        {
            newFrame.push(keypad.frame[i])
            continue   
        }
        newFrame.push({ ...frame, ...{"components":[...getSwitches(3,3)]}})
    }
    newKeypad["frame"] = newFrame 
    return newKeypad
}

export const updateKeypadDesign = (keypad, keypadNumber, type) => {
    let newKeypad = {...keypad}
    let newFrame = []
        
    let i = 0;
    for(; i < keypad.frame.length ; i++){
        if(i == keypadNumber){
            if(type == "L9"){
                newFrame.push({"type":"L9", "components" : getSwitches(3,3)})
            }
            if(type == "L12"){
                newFrame.push({"type":"L12", "components" : getSwitches(4,3)})
            }
            if(type == "TT"){
                newFrame.push({"type":"TT", "components" : getSwitches(5,2)})
            }if(type == "L4"){
                newFrame.push({"type":"L4", "components" : getSwitches(2,2)})

            }
        }else{
            newFrame.push(newKeypad.frame[i])
        }
    }
    newKeypad["frame"] = newFrame 
    return newKeypad;
}

export const updateKeypadFontSize = (keypad, keypadNumber, iconFont, size) => {
    let newKeypad = {...keypad}
    let newFrame = []
        
    let i = 0;
    for(; i < keypad.frame.length ; i++){
        if(i == keypadNumber){
            if(iconFont == 1){
                newKeypad.frame[i]["fontStyle"] = {"font-size": fontSize[size]}
               newFrame.push(newKeypad.frame[i]);
            }
            if(iconFont == 0){
                newKeypad.frame[i]["iconStyle"] = {
                                                    "width": iconSize[size],
                                                    "height": iconSize[size],    
                                                    }
               newFrame.push(newKeypad.frame[i]);
            }
        }else{
            newFrame.push(newKeypad.frame[i])
        }
    }
    newKeypad["frame"] = newFrame 
    return newKeypad;
}

export const updateKeypadSwitchText = (keypad, keypadNumber, switchNumber, text) => {
    let newKeypad = {...keypad}
    let i = 0;
    for(; i < keypad.frame.length ; i++){
        if(i == keypadNumber){
            for(let j=0; j < keypad.frame[i].components.length ; j++){
                if(keypad.frame[i].components[j].id == switchNumber){
                    newKeypad.frame[i].components[j].text = text;
                }
            }
        }
    }
    return newKeypad;
}

export const updateKeypadSwitchColor = (keypad, keypadNumber, switchNumber, color) => {
    let newKeypad = {...keypad}
    let i = 0;
    for(; i < keypad.frame.length ; i++){
        if(i == keypadNumber){
            for(let j=0; j < keypad.frame[i].components.length ; j++){
                if(keypad.frame[i].components[j].id == switchNumber){
                    newKeypad.frame[i].components[j].fill = color;
                }
            }
        }
    }
    return newKeypad;
}

export const updateKeypadFrameColor = (keypad, keypadNumber, color) => {
    let newKeypad = {...keypad}
    let i = 0;
    for(; i < keypad.frame.length ; i++){
        if(i == keypadNumber){
            for(let j=0; j < keypad.frame[i].components.length ; j++){
                newKeypad.frame[i].components[j].fill = color;
            }
        }
    }
    return newKeypad;
}

export const updateKeypadProtocol = (keypad, protocol) => {
    let newKeypad = {...keypad}
    newKeypad["protocol"] = protocol
    return newKeypad;
}

export const updateKeypadArtworkName = (keypad, name) => {
    let newKeypad = {...keypad}
    newKeypad["artname"] = name
    return newKeypad;
}

export const updateKeypadFrameTextIcon = (keypad, keypadNumber, design) => {
    let newKeypad = {...keypad}
    let newFrame = []
        
    let i = 0;
    for(; i < keypad.frame.length ; i++){
        if(i == keypadNumber){
            for(let j=0; j<newKeypad.frame[i].components.length ; j++){
                newKeypad.frame[i].components[j].style = design;
            }
            newKeypad.frame[i]["iconStyle"] = {
                "width": iconSize[1],
                "height": iconSize[1]
            }
            newFrame.push(newKeypad.frame[i]);
        }else{
            newFrame.push(newKeypad.frame[i])
        }
    }
    newKeypad["frame"] = newFrame 
    return newKeypad;


}

export const getProductCode = (keypad) => {
    let productCode = "K R "
    for(let i = 0 ; i < keypad.frame.length ; i++ ){
        productCode += keypad.frame[i].type+" "
        if (i==0)        
            productCode +=  keypad.frame.length+"F " 
    }
    productCode += keypad.protocol[0]
    productCode += " G "
    return productCode;
}

export const updateKeypadSwitchIcon = (keypad, keypadNumber, switchNumber, imgUrl, custom = "none") => {
    let newKeypad = {...keypad}
    let i = 0;
    for(; i < keypad.frame.length ; i++){
        if(i == keypadNumber){
            for(let j=0; j < keypad.frame[i].components.length ; j++){
                if(keypad.frame[i].components[j].id == switchNumber){
                    newKeypad.frame[i].components[j].icon = imgUrl;
                    newKeypad.frame[i].components[j].iconType = custom;
                }
            }
        }
    }
    return newKeypad;
}

export const getDimension = (keypad) => {
    return "95x"+(keypad.frame.length*95)+"mm"
}

export const getIconCategories = () => {
    return cats.categories
}

export const getSwitches = (width=3, height=3, idG=-1)=>{
    let swicthArray = []
    let id = idG;
    for(let i=0; i<width; i++)
        for(let j=0; j<height; j++){
            swicthArray.push({...switchD,...{"id":++id}});
        }
    
    return swicthArray
};