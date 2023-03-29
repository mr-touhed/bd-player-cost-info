const addToLocal = (id) =>{

let player =[]

// const newPlayer = {id,price};
const storeCart = localStorage.getItem('player');
if(storeCart){
    const exist  = JSON.parse(storeCart)
    
    player =[...exist,id]
    
}else{
    player =  [...player,id]
    
}
localStorage.setItem('player',JSON.stringify(player))


}


const getStoreData = () =>{
const getStore = localStorage.getItem('player')
if(getStore){
    return JSON.parse(getStore)
}else{
    return []
}
}

 const removePlayer = (id) =>{
    const getStore = JSON.parse(localStorage.getItem('player'));
    console.log(getStore.length)
    if(getStore.length == 1){
            console.log('empty')
        localStorage.clear()
    }else{
        const presentPlayer = getStore.filter(playerId => playerId !==id)
        localStorage.setItem('player',JSON.stringify(presentPlayer))
    }
    

 }
export {addToLocal,getStoreData,removePlayer}