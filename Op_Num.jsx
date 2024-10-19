// Take an integer number from the user and perform basic operation on it such as add, sub, mult, div

import { useState, useEffect } from "react";
export default function Op_Num(){
    useEffect(() =>{
        alert('Test')
    },[])

    const [n1,setN1] = useState(0)
    const [n2,setN2] = useState(0)
    const [ans,setAns] = useState(0)

    const handleNumber1 = (e) =>{
        setN1(e.target.value)
    }
    
    const handleNumber2 = (e) =>{
        setN2(e.target.value)
    }
    
    const handleAns = (e) =>{
        setAns(e.target.value)
    }

    function add(){
        setAns(Number(n1) + Number(n2))
    }

    function sub(){
        setAns(Number(n1) - Number(n2))
    }
    
    function mult(){
        setAns(Number(n1) * Number(n2))
    }
    
    function div(){
        setAns(Number(n1) / Number(n2))
    }

    return(
        <>
        <input type="number" onChange={handleNumber1} name="" id="" /><br></br>
        <input type="number" onChange={handleNumber2} name="" id="" /><br></br>
        <button onClick={add}>ADD</button><br></br>
        <button onClick={sub}>SUB</button><br></br>
        <button onClick={mult}>MULT</button><br></br>
        <button onClick={div}>DIV</button><br></br>
        <h3>{ans}</h3>


        </>
    )

}