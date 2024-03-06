import { Routes, Route } from 'react-router-dom';
import BookingPage from './pages/bookingPage';
import HomePage from './pages/HomePage';
import Confirmed from './pages/confirmed';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/little-lemon-capstone/" element={<HomePage />} />
      <Route path="/little-lemon-capstone/booking" element={<BookingPage />} />
      <Route path="/little-lemon-capstone/confirmed" element={<Confirmed />} />
    </Routes>
  );
}