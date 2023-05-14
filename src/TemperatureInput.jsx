import React from "react";
import  Calculator  from "./Calculator";
export default function TemperatureInput({temperature,scale,handleChange}){
    const scalenames={
        c :'celcius',
        f : 'farenhite',
    }
    return (
        <>
           <fieldset>
            <label>Enter temperature in {scalenames[scale]} </label>
            <input type="text" value={temperature} onChange={(e)=>handleChange(e,scale)}></input>
           </fieldset>
            
        </>
    )
}