import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

export default function Menu_Api_Test(){
    // Function for menu list
    function menuList(){
        axios.get('http://localhost:5000/menu')
        .then(response =>{
            console.log(response.data)
        })
    }

    //Function for menu by id
    const [mid,setMid] = useState(0)

    const handleMenuId = (e) =>{
        setMid(e.target.value)
    }

    function menuById(){
        axios({
            url:'http://localhost:5000/menuById',
            method: "GET",
            data:{"id" : mid }
        }).then(
            response =>{
                console.log(response.data);
                // const sts = response.data.status
                // if(sts == 200)
                //     alert('Menu Deleted Succussfully')
                // else
                //     alert('Menu Deleted Faild')
            })
    }

    

    //For add new menu intu the menu card
    const [mname,setMname] = useState("")
    const [mprice,setMprice] = useState(0)
    const [qid,setQid] = useState(0)
    const [gid,setGid] = useState(0)


    const handleMenuName = (e) =>{
        setMname(e.target.value)
    }


    const handleMenuPrice = (e) =>{
        setMprice(e.target.value)
    }


    const handleMenuQid = (e) =>{
        setQid(e.target.value)
    }

    const handleMenuFid = (e) =>{
        setGid(e.target.value)
    }

    const mData = {
        "menu_name" : mname,
        "menu_price" : mprice,
        "qid" : qid,
        "gid" : gid
    }

    function insertMenu(){
        axios.post('http://localhost:5000/insertmenu',mData)
        .then(response =>{
            console.log(response.data)

            const sts = response.data.status;

            if(sts == 200){
                alert('Menu Insert Successfully')
            }else{
                alert('Menu Insert Failed')
            }
        })
    }

    // Delete menu from the menu card
    
     function delMenu(){
    //     const delMenuData = {
    //         id : mid
    //     }
    //     axios.delete('http://localhost:5000/delmenu',delMenuData)
    //     .then(response =>{
    //         console.log(response.data)
    //     })
    // }

    axios({
        url:'http://localhost:5000/delmenu',
        method: "DELETE",
        data:{"id" : mid  }
    }).then(
        response =>{
            console.log(response.data);
            const sts = response.data.status

            if(sts == 200)
                alert('Menu Deleted Succussfully')
            else
                alert('Menu Deleted Faild')
        })
}

// code for the menu update from the menu card
const [nMn,setNmN] = useState('')
const [nMp,setnMp] = useState(0)
const [fGi,setfGi] = useState(0)
const [qId,setqId] = useState(0)
const [eMi,seteMi] = useState(0)

   const handleNMN = (e) =>{
    setNmN(e.target.value)
   }

   const handleNMP = (e) =>{
    setnMp(e.target.value)
   }

   const handleFGI = (e) =>{
    setfGi(e.target.value)
   }

   const handleQID = (e) =>{
    setqId(e.target.value)
   }

   const handleEMI = (e) =>{
    seteMi(e.target.value)
   }

   function uptMenu(){
    const uptMenuData = {
        
            "menu_name": nMn,
            "menu_price": nMp,
            "gid": fGi,
            "qid": qId,    
            "mid": eMi
        
    }

    axios.put('http://localhost:5000/menuUpt',uptMenuData)
    .then(response =>{
        console.log(response.data)

        const sts = response.data.status

        if(sts == 200)
            alert('Menu Update Successfully')
        else
            alert('Menu Update Failed')
    })
   }



    return(<>

    {/* All Menu List */}
    <button onClick={menuList}>Click For Menu List</button>

    {/* Menu By id */}
    <input type="number" onChange={handleMenuId} name="" id="" />
    <button onClick={menuById}>Menu By Id</button>

    {/* Insert menu into the menucard */}
    <br /><br /><br />
    <input onChange={handleMenuName} type="char" placeholder="Enter the menu name" name="" id="" required/>
    <input type="number" onChange={handleMenuPrice} name="" id="" placeholder="Enter the menu Price" required/>
    <input type="number" name="" id="" onChange={handleMenuQid} placeholder="Enter the Qid" required/>
    <input type="number" name="" id="" onChange={handleMenuFid} placeholder="Enter the food group id" required/>
    <button onClick={insertMenu}>INSERT MENU</button><br /><br /><br />

    {/* Delete menu from the menucard based on id*/}

    <input type="number" onChange={handleMenuId} placeholder="Enter the menu id " name="" id="" required />
    <button onClick={delMenu}>Delete Menu</button><br /><br /><br />

    {/* Menu update from the menu card */}

    <input type="text" placeholder="Enter the new menu name" onChange={handleNMN} name="" id="" />
    <input type="number" name="" id="" onChange={handleNMP} placeholder="Enter the new menu price" />
    <input type="number" name="" id="" onChange={handleFGI}  placeholder="Enter the new food group id"/>
    <input type="number" name="" id="" onChange={handleQID} placeholder="Enter the new qid"/>
    <input type="number" name="" id="" onChange={handleEMI} placeholder="Enter the existing menu id"/>
    <button onClick={uptMenu}>UPDATE MENU</button>


    
    </>)
}