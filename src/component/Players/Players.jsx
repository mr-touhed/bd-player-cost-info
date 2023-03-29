import React, { useEffect, useState } from 'react';
import { addToLocal, getStoreData, removePlayer } from '../../utilities/storeCart';
import AddPlayer from '../AddPlayer/AddPlayer';
import Tost from '../Tost/Tost';
import Player from './Player';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Players = () => {

    const [players,setPlayers] = useState([])
    const [addPlayer,setAddplayer] = useState([])
    useEffect(()=>{
        fetch('fakeData/playersData.json').then(res=>res.json()).then(data => {
            setPlayers(data)
            const storeData = getStoreData();
           if(storeData){
            const storePlayers = [];
            for(const id of storeData){
                const storePlayer = data.find(playId => playId.id === id)
                storePlayers.push(storePlayer)
              }
              setAddplayer(storePlayers)
           }
        })
    },[])

    const addedPlayerWarn = () => {
        toast.warn('Player alrady exist', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    const removeWarning = () => {
        toast.success('Player Remove Successful', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };
    // added player  
    const handelAddPlayer =(id) =>{
        const player = players.find(player => player.id === id)
       const exsist = addPlayer.find(p=> p.id === id)
        if(!exsist){
            const playerId = player.id;
            setAddplayer([...addPlayer,player])
            addToLocal(playerId)
            
        }else{
           
            addedPlayerWarn()
        }
        
       
        
    }
    // remove players 
    const handelRemove =(id) =>{
        const presentPlayer = addPlayer.filter(player => player.id !== id)
        setAddplayer(presentPlayer)
        removePlayer(id)
        removeWarning()
    }
    // get players total Price 
    const TotalPrice = addPlayer.reduce((preVal,present)=> parseFloat(present.price.replace(',','')) + preVal,0)
    return (
        <>
        <section className='container row mx-auto pt-4'>

                <section className='col-md-8'>
                        <h2>Bangladesh Player </h2>
                        <div className='row row-cols-1'>
                            {
                                players.map((player) => <Player key={player.id} {...player} handelAddPlayer={handelAddPlayer}/>)
                            }

                        </div>
                </section>
                <section className='col-md-4'>
                <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th></th>
      <th scope="col">Price</th>
      
      <th scope="col">remove</th>
    </tr>
  </thead>
  <tbody>
   
                        {
                                addPlayer && addPlayer.map((playerInfo,index) => <AddPlayer key={playerInfo.id} {...playerInfo} index={index} handelRemove={handelRemove}/>)
                            }
    
  </tbody>
  {addPlayer.length >0 &&(<tfoot>
  <tr rowSpan="4">
      <th scope="col"></th>
      <th scope="col">total Price</th>
      <th scope="col">=</th>
      <th scope="col">${TotalPrice}</th>
    </tr>
  </tfoot>)}
</table>
                </section>
        </section>
        <ToastContainer >
        
        </ToastContainer>
        </>
    );
};

export default Players;