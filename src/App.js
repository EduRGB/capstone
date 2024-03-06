import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';


const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <Main />
      <BookingForm />
        <p>test text</p>
      <Footer />
    </div>
  );
}

export default App;