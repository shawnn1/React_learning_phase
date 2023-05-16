import React from "react";
import Hoc from "./Hoc";
const Button =(props) =>{
   const {count,increment}=props;
    
        return(
            <>
                <button type="button" onClick={increment}>click me {count} times</button>
            </>
        )
    }

export default Hoc(Button);