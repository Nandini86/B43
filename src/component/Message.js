import React,{Component} from 'react'
class Message extends Component{// extend the component class

    constructor(){
        super()
        this.state={
            message:'welcome visitor'// create the state object
        }
    }
    changemessage(){
        this.setState({
            message:"thank you for subscribe"
        })
    }

render(){//implement reander method
   return(
    <div>
        <h1> {this.state.message}</h1>
        <button onClick={()=>this.changemessage()}>subscribe</button>
    </div>
   )
}
}
export default Message;