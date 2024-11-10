import { useEffect,useState } from "react"
function UseEffect(){


    const [num,setNum] = useState(10)
    const inc = ()=>{
        setNum(num + 1)
    }

    useEffect(()=> {
        console.log("hello useEffect")
    },[num])

    return(
        <>
        <h1>useeffect </h1>
        <h2>{num}</h2>
        <button onClick={inc}>+</button>
        
        </>
    )
}

export default UseEffect