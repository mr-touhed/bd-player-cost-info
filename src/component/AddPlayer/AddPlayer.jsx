import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const AddPlayer = ({price,name,index,id,handelRemove}) => {
   
    return (
        <tr>
      <th scope="row">{index+1}</th>
      <td colSpan="2">{name}</td>
      <td>${price}</td>
    <td><button onClick={()=>handelRemove(id)} type="button" className="btn btn-outline-danger" style={{'--bs-btn-padding-y':" .25rem", '--bs-btn-padding-x': ".5rem", '--bs-btn-font-size': ".75rem"}}> <FontAwesomeIcon icon={faXmark} /></button></td>
    </tr>
    );
};

export default AddPlayer;