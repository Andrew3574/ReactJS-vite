import { Button } from "./Button/Button"
import { textArray,testArray } from "../data"
import { Volume } from "./Volume"
import { useState } from "react"
import Header from "./Header"

export function MainBody(){
    
  let [content,setContent] = useState(1)
  
  function handleClick(type){
        console.log('btn clicked '+type)
        setContent(type)
    }

    return(
        <>
        <Header></Header>

        {textArray.map(elem=><Volume key={elem.title} {...elem}/>)}
        
        <Button 
        isActive={content=='111'}
         onClick={() => handleClick("111")}>
          111
         </Button>

        <Button 
        isActive={content=='222'}  
        onClick={() => handleClick("222")}>
          222
          </Button>

        <Button 
        isActive={content=='333'}
          onClick={() => handleClick("333")}>
            333
            </Button>
      
        <p>{testArray[content]}</p>
        </>

        
    );
}