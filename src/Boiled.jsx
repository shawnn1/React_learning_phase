import React from 'react'
export default function Boiled({celcious=0})
{
    if(celcious>=100)
     return <h6>yes,water boiled</h6>
    else
    return <h6>no,water not boiled</h6> 

}