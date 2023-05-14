import React from "react";
import Boiled from "./Boiled";
import TemperatureInput from "./TemperatureInput";
import { converter, toCelcious, tofarenhite } from "./lib/converter";
export default class Calculator extends React.Component{
    state={
        temperature : '',
        scale : '',

    }
    onTemperaturechange=(e,scale)=>{
        this.setState({
            temperature :e.target.value,
            scale,
        })
    }
    render(){
        const {temperature,scale}=this.state;
        const farenhite=scale==='c'?converter(temperature,tofarenhite):temperature;
        const celcius=scale==='f'?converter(temperature,toCelcious):temperature;

        return(
          <>
              <TemperatureInput scale='c' temperature={celcius} handleChange={this.onTemperaturechange}/>
              <TemperatureInput scale='f' temperature={farenhite} handleChange={this.onTemperaturechange}/>
              <Boiled celcious={celcius}/>
          </>
          
        )
    }
}