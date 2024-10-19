import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import './Upt_Food_Group.css'

export default function Upt_Food_Group(){
    useEffect(()=>{
        api()
    },[1])
    function api() {
        axios.get("http://localhost:3000/foodgroup")
            .then(responce => {
                //  console.log(responce.data);
                 const d = responce.data.foodgroup;
                //  console.log(d.length);

                 for(var i = 0 ; i < d.length; i++){
                    console.log(d[i]);

                    // var rowData = "<tr><td>" + d[i].gid + "</td>";
                    // rowData += "<td>" + d[i].gname + "</td>";
                    // // rowData += "<td>" + d[i].email + "</td>";
                    // // rowData += "<td>" + d[i].phone + "</td>";
                    // // rowData += "<td>" + l[i].class_id + "</td>";
                    // // rowData += "<td>" + l[i].username + "</td>";
                    // // rowData += "<td>" + l[i].pass + "</td>";
                    // rowData += "<td><input type='button' value='Delete' class='btn btn-danger' onclick=''></td>";
                    // rowData += "<td><input type='button' value='Update' class='btn btn-primary' onclick=''></td>";
                    // // rowData += "</tr>";
                    // rowData += "</tr>";

                    
                    
                    // $('#dt').append(rowData);
                 }
            })
        }
    return(
        <>
            <h2>Hotel Shivaray</h2><br/>
            <h3>Menu Card</h3>
            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Group Name</th>
                        
                    </tr>
                </thead>
            </table>
        </>
    )
}