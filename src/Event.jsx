import React from "react";
import './App.css'
//event handling
//not write onClick={handleclick()} because then function was called;
//write onClick={handleClick} or onclick={()=>{alert('clicked')}} this means pass a function but not called;
//Reading props in eventhandler
function AlertButton({message,children})
{
    return(
        <>
            <button onClick={()=>alert(message)}>{children}</button>
        </>
    )
}
//passing event handler as a props
function Button({onClick,children}){
    return(
        <>
            <button onClick={onClick}>{children}</button>
        </>
    )
}
function Upload()
{
    return (<>
        <Button onClick={()=>alert('uploading')}>Upload</Button>
        </>
    )
}
function Event(){
    function handleClick(){
        alert("Clicked");
    }
    return (
        <>
            <button onClick={handleClick}>click me</button>
            <AlertButton message="playing!">play movie</AlertButton>
            <Upload/>
            
        </>
    )
}


export default Event;