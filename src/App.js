import './App.css';
import FeedBox from './FeedBox'
import ProfileBox from './ProfileBox'

import Layout from './Layout'
import {Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FeedBox/>} />
        <Route path="home" element={<FeedBox />} />
        
        <Route path="profile/:username" element={<ProfileBox />} />
         
        <Route path="*" element={<FeedBox />} />
      </Route>
    </Routes>
  );
}

export default App;
