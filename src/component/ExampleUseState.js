import React,{useState} from 'react';
function ExampleUseState(){
    const[count,setcount]=useState(20);// declare a new state variable "count"
    return(
        <div>
            <p> you clicked {count}</p>
            <button onClick={()=>setcount(count+1)}> clickme </button>
             </div>
    );
}
export default ExampleUseState;