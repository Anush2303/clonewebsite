import React from 'react';
import Navbar from './components/Navbar';
import SectionA from './components/SectionA';
import Section from './components/Section';
import SectionB from './components/SectionB';
import Slide from './components/Slide';
import SectionC from './components/SectionC';
import SectionD from './components/SectionD';
import SectionE from './components/SectionE';
import Quote from './components/Quote';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <SectionA/>
      <Section title="For friendly faces"
      content="Selections of cherished skin care—some for the novice with empty bathroom cabinets, others for the well-stocked expert."
      link="https://player.vimeo.com/external/638914554.hd.mp4?s=81b54b0804759c55f2fa55db7c39b7ea8cca0abc&profile_id=175"
      btntitle="Browse Skin Care Gifts"
      />
      <SectionB/>
      <Section title="Treasured tokens"
      content="A considered assortment of our most sought-after formulations—from signature hand washes to potent facial hydrators, to transportive aromas for the home."
      link="https://player.vimeo.com/external/638938995.hd.mp4?s=11da203a3eb6cefd91f8fbf6af2dacc20d102060&profile_id=175"
      btntitle="Browse favourite formulations"
      />
      <Slide/>
      <SectionC/>
      <SectionD/>
      <SectionE/>
      <Quote/>
      <Contact/>
    </div>
  )
}

export default App;

