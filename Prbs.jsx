import './App.css'
export default function Prbs(){
    const data='This is Paragraph';
     function test(){
        alert ("this is test");
        console.log("test is console function test")
     } 
     return(
        <>
            <button onClick={test}>Click Me</button>
            <h1>{data}</h1>
             <p>{data}</p>
        </>
     )
}