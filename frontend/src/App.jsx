import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/layout/navbar';
import Home from './components/Home/Home';
// import Courses from './components/courses/courses';
import Login from './components/Auth/Login'
// import Contact from './components/Contact/Contact';
// import Request from './components/Request/Request';
import About from './components/About/About';
// import Subscribe from './components/Payments/Subscribe';
// import PaymentSuccess from './components/Payments/PaymmentSuccess';
// import PaymentFail from './components/Payments/PaymentFail';
// import NotFound from './components/Layout/NotFound/NotFound';
// import CoursePage from './components/CoursePage/CoursePage';
// import Profile from './components/Profile/Profile';
// import ChangePassword from './components/Profile/ChangePassword';
// import UpdateProfile from './components/Profile/UpdateProfile';
import Footer from './components/layout/footer';
function App() {

  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  })
  return (
      <>
      <Navbar/>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/changepassword' element={<ChangePassword />} /> */}
        {/* <Route path='/contact' element={<Contact />} /> */}
        {/* <Route path='/courses' element={<Courses />} /> */}
        {/* <Route path='/course/:id' element={<CoursePage />} /> */}
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/paymentsuccess' element={<PaymentSuccess />} /> */}
        {/* <Route path='/paymentfail' element={<PaymentFail />} /> */}
        {/* <Route path='/profile' element={<Profile />} /> */}
        {/* <Route path='/request' element={<Request />} /> */}
        {/* <Route path='/subscribe' element={<Subscribe />} /> */}
        {/* <Route path='/updateprofile' element={<UpdateProfile />} /> */}
        {/* <Route path='*' element={<NotFound />} /> */}

      </Routes>
      <Footer/>
      </>
  );
}

export default App;