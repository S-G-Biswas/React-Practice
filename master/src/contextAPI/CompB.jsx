import React, { useContext } from 'react';
import CompC from './CompC';
import { Firstname, Lastname } from '../App';

const CompB = () =>{
    
    const fname = useContext(Firstname);
    const lname = useContext(Lastname);
      
    return(
        <h1>
            my name is {fname} {lname}.
        </h1>
    )
  
    // return <CompC />;
};

export default CompB;