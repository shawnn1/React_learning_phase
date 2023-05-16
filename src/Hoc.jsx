import React from 'react'

const Hoc = (OriginalComponent) => {
    class NewComponent extends React.Component{
        state={
            count :0,
        }
        increment=()=>{
            this.setState((prevstate)=>({count : prevstate.count+1}))
        }
        render(){
            let {count}=this.state
            return(
              <OriginalComponent count={count} increment={this.increment}/>
            )
        }
    }
    return NewComponent;
}

export default Hoc
