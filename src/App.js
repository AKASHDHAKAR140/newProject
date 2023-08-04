//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
//import Industries from './Pages/Industries';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Portfolio from './Pages/Portfolio';
import Careers from './Pages/Careers';
import DiscoveryAgnito from './Pages/DiscoveryAgnito';
import Videos from './Pages/Videos';
import StartAproject from './Pages/StartAproject';
import Cricket from './Games/Cricket';

function App() {
  return (
    <div className="App">
   
     <BrowserRouter>
     <Navbar/>
     <Routes>
    <Route path= "/cricket" element={<Cricket/>} />
     <Route path= "/contact" element={<Contact/>}/>
     <Route path= "/blogs" element={<Blogs/>}/>
     <Route path= "/" element={<Portfolio/>}/>
     <Route path= "/careers" element={<Careers/>}/>
     <Route path= "/discover" element={<DiscoveryAgnito/>}/>
     <Route path= "/videos" element={<Videos/>}/>
     <Route path= "/startaproject" element={<StartAproject/>}/>
     </Routes>
     </BrowserRouter>
        </div>

  );
}

export default App;
