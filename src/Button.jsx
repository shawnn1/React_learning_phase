import React from "react";
import {AlertButton,Button,Upload} from "./Event";
function Button1(){
    return(
        <>
            <button onClick={()=>alert('clicked me')}>click me</button>
            <AlertButton message="playing!">play movie</AlertButton>
            <Upload/>
            <div onClick={()=>{
                alert('You clicked on div');
            }}>
            <button onClick={e=>
                {
                    e.stopPropagation();
                    alert('Eating')
                }
            }>eat</button>
                <Button onClick={()=>alert('playing')}>play</Button>
            </div>
            
        </>
    )
}
export default Button1;