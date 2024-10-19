import MyImage from './assets/leap.webp'; // This is used for the take an image from the folder
import Navb from './Navb';

export default function Contact(){
    function alrt(){ // Create the user defined function
        alert('Hello World')
    }
    return(
        <>
    <Navb></Navb>

        <h1>This is Contact page</h1>
        {/* <img src={MyImage} alt="" /> */}
        {/* <button onClick={alrt}>Click Me</button> */}

        </>
    )
}