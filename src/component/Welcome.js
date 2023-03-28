import React,{Component} from 'react'
class Welcome extends Component{// extend the component class
render(){//implement reander method
    return <h1> Class component  {this.props.name}{this.props.value}{this.props.place}</h1>
}
}
export default Welcome;