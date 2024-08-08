
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'


function App() {
  

  return (
    <>
      <Routes>
     <Route path='/marketing-association.nz' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
