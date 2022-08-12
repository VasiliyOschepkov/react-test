import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";



function App() {
  return (
      <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/dialog" element={<Dialogs/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                    </Routes>

                </div>
            </div>
      </BrowserRouter>
  );
}

export default App;
