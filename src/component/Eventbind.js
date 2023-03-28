import React, { Component } from 'react';

class Eventbind extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"hello"
        }
        //  this.Clickhandler=this.Clickhandler.bind(this)
    }
Clickhandler(){
    // this.setState({
    //     message:"goodbye"
        
    // })
console.log(this)
}
    
    render() {
        return (
            
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.Clickhandler}> Click</button>
               {/* <button onClick={this.Clickhandler.bind(this)}>click</button>  */}
               {/* <button onClick={()=>this.Clickhandler()}>click</button>  */}
               {/* <button onClick={this.Clickhandler()}>click</button> */}
            </div>
        );
    }
}

export default Eventbind;