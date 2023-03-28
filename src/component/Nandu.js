import React from 'react'
// function Nandu(){
//     return<h1> Functional Component</h1>

// }
const Nandu=(props)=>{
    return(
        <div>
          <h1> i am {props.name} is a {props.designation} </h1> 
          {props.children} 
        </div>

    )
}


export default Nandu;