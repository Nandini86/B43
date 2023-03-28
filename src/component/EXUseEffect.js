import React,{useState,useEffect}from 'react';
function EXUseEffect(){
    const[count ,setCount]=useState(0);//set state variable count to 0

    //similar to componentdidmount and componrntdidupdate
    useEffect(()=>{
        //update the document using browser api
        document.title=`youclicked${count } times` ;
        console.log(count);
    },[])

return(
    <div> 
        <p> you clicked{count}times</p>
        <button onClick={()=>setCount(count+1) }> count</button>
    </div>
)
}
export default EXUseEffect