import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import SeatLayout from "./pages/SeatLayout";
import MyBooking from "./pages/MyBooking";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import LayoutPages from "./pages/admin/LayoutPages";
import Dashboard from "./pages/admin/Dashboard";
import AddShows from "./pages/admin/AddShows";
import ListShows from "./pages/admin/ListShows";
import ListBooking from "./pages/admin/ListBooking";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Movies/:id" element={<MovieDetails />} />
        <Route path="/Movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBooking />} />
        <Route path="/Favorite" element={<Favorite />} />

        {/* Admin layout route */}
        <Route path="/admin" element={<LayoutPages />}>
          <Route index element={<Dashboard />} />
          <Route path="add-shows" element={<AddShows />} />
          <Route path="list-shows" element={<ListShows />} />
          <Route path="list-booking" element={<ListBooking />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
