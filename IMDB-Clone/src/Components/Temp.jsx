import React, { useEffect, useState } from 'react'

const Temp = () => {
    const [count, setCount] = useState(0);
    const [text, settext] = useState();
  function inc (){
      setCount(count+1);
  }


  const handleInput = (e)=>{
    settext(e.target.value);
  }

  useEffect(()=>{
    console.log("Use Effect is Running...");
    document.title = `button.clicked for ${count} times.`
  },[])
  return (
    <div>

        <input type="text" name="" id="" onChange={handleInput}  value={text}/>
        <h3>{text}</h3>

        <br />
        <br />
        <h1>Count is : {count}</h1>
        <button onClick={()=>setCount(count-1)}>Dec - </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={inc}>Inc + </button>
    </div>
  )
}

export default Temp