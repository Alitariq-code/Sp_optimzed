import React from 'react';
import NavBar from './components/NavBar';
import MobileNavBar from './components/m_navbar';

import Footer from './components/footer';
function about() {
  return (
    <>
           <MobileNavBar />
      <NavBar />
      <div>About us</div>
      <Footer />
      
    </>
  );
}

export default about;
