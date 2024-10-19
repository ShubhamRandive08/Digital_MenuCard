import { useState } from "react"
export default function Hooks(){
    const [nm,setNm] = useState('0')

    const handleNumber = (e) =>{
        setNm(e.target.value)
    }

    const viewData = (e) =>{
        alert(nm)
    }
    
    return(
        <>
        <input type="number" onChange={handleNumber} name="" id="" />
        <button onClick={viewData}>Click Me</button>
        </>
    )
}