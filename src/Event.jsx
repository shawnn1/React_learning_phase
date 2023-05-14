import React from "react";
import './App.css'
import Button1 from "./Button";
//event handling
//not write onClick={handleclick()} because then function was called;
//write onClick={handleClick} or onclick={()=>{alert('clicked')}} this means pass a function but not called;
//Reading props in eventhandler
export function AlertButton({message,children})
{
    return(
        <>
            <button onClick={()=>alert(message)}>{children}</button>
        </>
    )
}
//passing event handler as a props
export function Button({onClick,children}){
    return(
        <>
            <button onClick={e=>{
                e.stopPropagation();
                onClick();
            }}>{children}</button>
        </>
    )
}
export function Upload()
{
    return (<>
        <Button onClick={()=>alert('uploading')}>Upload</Button>
        </>
    )
}
//stop propagation of event handler:{e.stopPropagation();}
//stop default behaviour of browser :{e.preventDefault();}
 export function Event(){
    
    
    function handleClick(){
        alert("Clicked");
    }
    
    return (
        <Button1/>
        
        
    )
}

 