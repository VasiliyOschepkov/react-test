import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {

  return (
      <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/dialogs/*" element={
                            <Dialogs
                                state={props.state.dialogPage}
                            />}/>
                        <Route path='/profile' element={
                            <Profile
                            state={props.state.profilePage}
                            addPost={props.addPost}
                            updateValuePost={props.updateValuePost}
                            />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
      </BrowserRouter>
  );
}

export default App;
