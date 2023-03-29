import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons'

const Player = ({id,name,role,price,image,handelAddPlayer}) => {
    return (
        <div className="card mb-3 w-full" >
  <div className="row g-0 px-5">
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Role: {role}</p>
        <p className="card-text">Price: ${price}</p>
        <button type="button" className="btn btn-info" onClick={()=>handelAddPlayer(id)}>Add Player <FontAwesomeIcon icon={faPersonCirclePlus}  className='ms-1'/></button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Player;