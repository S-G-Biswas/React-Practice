//Component 2

import React, { useContext } from 'react';
import CompC from './CompC';
import { Firstname, Lastname } from '../App';

const CompB = ({name}) =>{      
     
     return <CompC name={name} />;
};

export default CompB;