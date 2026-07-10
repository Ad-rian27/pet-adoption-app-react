import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPet from './components/AddPet'
import SearchPet from './components/SearchPet'
import DeletePet from './components/DeletePet'
import ViewPets from './components/ViewPets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
      <Routes>

<Route path='/' element={<AddPet/>} />
<Route path='/search' element={<SearchPet/>} />
<Route path='/delete' element={<DeletePet/>} />
<Route path='/view' element={<ViewPets/>} />

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
