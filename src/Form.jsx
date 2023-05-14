import React from "react";
export default class Form extends React.Component{
    state={
        title:'javascript',
        abouttext:'javascrip',
        library:'javascript',
    };
    handleChange=(e)=>{
        console.log(e.target.value)
        if(e.target.type==='text')
        {this.setState(
            {
                title:e.target.value,
            }
        )}
        else if(e.target.type==='textarea')
        {
            this.setState({
                abouttext :e.target.value,
            })
        }
        else if(e.target.type==='select-one')
           {
            this.setState({
                library:e.target.value,
            })
           }
    }
    render(){
        let {title,abouttext,library}=this.state;
        return (
            <div>
                <input name="title" type="text" placeholder="Enter title" value={title} onChange={this.handleChange}></input>
                <input type="text" value={null}></input>
                <textarea name="abouttext"value={abouttext} onChange={this.handleChange}></textarea>
                <select value={library} onChange={this.handleChange}>
                <option value="React">React</option>
                <option value="Angualr">Angular</option>

                </select>
            </div>
        )
    }
}