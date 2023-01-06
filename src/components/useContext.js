import React from "react";
import {userContext} from "./userContext";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../pages";
import About from "../pages/about";

// useContext
// Used to pass common props down the components hierarchy
// E.g. passing the value of the currently logged-in user to every page


function App() {
    return (
        <div>
            <userContext.Provider value="john">
                <Router>

                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about/'>About</Link></li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                    </Routes>
                </Router>
            </userContext.Provider>
        </div>
    )
}

export default App;
