import React, { useEffect, useState } from 'react'

const Home = () => {

    const [count,setCount] = useState(0)
    useEffect(()=>{
        return console.log(count)
    })

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        {count}
        <button onClick={()=>setCount(count-1)}>Decrease</button>
      
    </div>
  )
}

export default Home
