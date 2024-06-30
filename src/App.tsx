import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardPage from '@/pages/Card'
import AirBnb from '@/pages/AirBnb'
import NavBar from '@/components/NavBar'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<CardPage />} />
        <Route path='/airbnb' element={<AirBnb />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
