import { useState } from "react"

function About(){

    const [num,setNum] = useState(100)
    const decrease = ()=>{
        setNum(num-1)
    }

    return (
        <>
    <h1>{num}</h1>
    <button onClick={decrease}> -</button>
    </>
    )
}

export default About