import React from 'react'
import Navbar from './components/Navbar'
import { Route , Routes , useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import MovieDetails from './pages/MovieDetails'
import Movies from './pages/Movies'
import SeatLayout from './pages/SeatLayout'
import MyBooking from './pages/MyBooking'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin') 

  return (
    <>
      <Toaster/>
      { !isAdminRoute && <Navbar/>}
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/Movies' element = {<Movies/>} />
        <Route path='/Movies/:id' element = {<MovieDetails/>} />
        <Route path='/Movies/:id/:date' element = {<SeatLayout/>} />
        <Route path='/my-Booking' element = {<MyBooking/>} />
        <Route path='/Favorite' element = {<Favorite/>} />
      </Routes>
       { !isAdminRoute && <Footer/>}
    </>
  )
}

export default App