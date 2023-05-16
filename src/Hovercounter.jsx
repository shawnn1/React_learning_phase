import React from "react";
import Hoc from "./Hoc";
  const  HoverCounter= (props)=>{

       const {count,increment}=props
        return(
            
            <>
                <h1  onMouseOver={increment}>Touch me {count} times</h1>
            </>
        )
    }
// eslint-disable-next-line react-refresh/only-export-components
export default Hoc(HoverCounter)
