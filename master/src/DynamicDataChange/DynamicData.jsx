import React, { useState } from "react";

export default function Dynamic(){

   const [Text,setText] = useState("");

   const handleInput =(e)=>{
       setText(e.target.value);
   }



     return(
        <div>
            <p>{Text|| "Your Name"}</p>

            <input type="text" value={Text} onChange={handleInput}/>
        </div>

     )

}