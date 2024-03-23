import React from 'react';
import { Firstname, Lastname } from '../App';

const CompC = () =>{

    //Simple consumer creating callback hell if there are many values
  
    return(
        <>
            <Firstname.Consumer>
                {(fname)=>{
                   return(
                     <Lastname.Consumer>
                        {(lname)=>{
                          return <h1>My name is {fname} {lname}</h1>;
                        }}
                     </Lastname.Consumer>
                   )
                }} 
            </Firstname.Consumer>
        </>
    ) 

    //To  solve callbackhell we use useContext hook check CompB

    
};

export default CompC;