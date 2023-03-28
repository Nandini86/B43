import React,{Component}from 'react'// import component class from react
class Classcomp extends Component{
    render(){
        return<h1> welcome {this.props.name} is a{this.props.designation}</h1>
    }
}
export default Classcomp