import React, { useState } from 'react';

function FormData(){
    const [InputArr,setInputArr] = useState([])
    const [inputData,setInputData] = useState({
        name:"",
        rollno:""
    })

    function handleChange(e){
        setInputData({
            ...inputData,
            [e.target.name]:e.target.value
        })
    }

    let {name,rollno} = inputData;
    
    function handleInput(){
        setInputArr([...InputArr,{name,rollno}])
        setInputData({name:"",rollno:""})
    }


    return(
        <div>
            <input type="text" name='name' value={inputData.name} onChange={handleChange} />
            
            <input type="text" name='rollno' value={inputData.rollno} onChange={handleChange} />
            
            <button onClick={handleInput}>Submit</button>


           <table border={1} >
             <tbody>
              <tr>
                 <td>Name</td>
                 <td>Rollno</td>
              </tr>

                {InputArr.map((ele, index) => (
                    <tr key={index}>
                       <td>{ele.name}</td>
                       <td>{ele.rollno}</td>
                    </tr>
                  ))}

             </tbody> 

           </table>

        </div>


        

    )

}

export default FormData;

