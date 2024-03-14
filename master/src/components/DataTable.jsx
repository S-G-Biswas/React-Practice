import React, { useState } from "react";

export default function Table(){
     
    const [data, setData] = useState([]);

    const FetchData = async() =>{
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await res.json();
        setData(data);
        console.log(data);
    }

    React.useEffect(()=>{
        FetchData();
    },[])


    return(
        <div>
            <h1>User Data</h1>
            <table border={"2"}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
                {data.map((item) => {
                   return <tr> 
                             <td>{item.id} </td>
                             <td>{item.name} </td>
                             <td>{item.username} </td>
                             <td>{item.email}</td>
                             <td>{item.phone}</td>
                             <td>{item.website}</td>
                          </tr>
                     
                })}
            </table>
        </div>
    )
}