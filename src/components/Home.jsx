import { useState } from "react"

const Home = () =>{

    const [inputValue,setInputValue] = useState(0)

    const input = {
        padding : "10px",

    }

    const button = {
        margin : "10px",
        padding : "10px"

    }

    const increment = () =>{
        setInputValue(inputValue+1)
    }
    
    const decrement =  () => {
        setInputValue(inputValue-1)
    }

    return(
        <div>
            <input 
            style={input}
            type="number"
            value={inputValue}
            />
            <button style={button} onClick={decrement}>- </button>
            <button style={button} onClick={increment}>+</button>
        </div>
    )
}

export default Home