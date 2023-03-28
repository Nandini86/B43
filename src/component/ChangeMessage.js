import React,{Component}from 'react'
class ChangeMessage extends Component{
constructor(){
    super();
    this.state={// created a state object
        message:"join the session"
    }
console.log("message");
}

change(){
    this.setState({
        message:"Thankyou"
    })

}
    render(){
        return(
            <div> 
                <h1> {this.state.message}</h1>
                <button onClick={()=>this.change()}> Subscribe</button>
            </div>
        )
    }

}
export default ChangeMessage