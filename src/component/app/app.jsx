import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from "../header";
import Section1 from "../section_1";
import Section2 from "../section_2";
import Section3 from "../section_3";
import Section4 from "../section_4";
import Section5 from "../section_5";
import OurPartner from "../our-partner";
import Footer from "../footer";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <OurPartner/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
