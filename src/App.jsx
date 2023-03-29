import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './component/Header/Header';
import Players from './component/Players/Players';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Players/>
    
    </>
  )
}

export default App
