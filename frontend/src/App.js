import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ForSale from './components/forSale';
// import Wanted from './components/wanted';
import Home from './components/home.js';
import ForsaleBoardPost from './components/forsaleBoardPost.js';
import Messages from './components/messages.js'
import { useEffect } from 'react';
// import WantedBoardPost from './components/wantedBoardPost';

function App() {
  return (
    
      <BrowserRouter>
          
            <div className="App">
              <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/for-sale" element={<ForSale/>}></Route>
                {/* <Route path="/wanted" element={<Wanted/>}></Route> */}
                {/* <Route path="/login" element={<Login/>}></Route> */}
                <Route path="/fs-board-post" element={<ForsaleBoardPost/>}></Route>
                {/* <Route path="/wanted-board-post" element={<WantedBoardPost/>}></Route> */}
                <Route path="/messages" element={<Messages/>}></Route>
              </Routes>
            </div>

      
      </BrowserRouter>
      
    
  );
}

export default App;
