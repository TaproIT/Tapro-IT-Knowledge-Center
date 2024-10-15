import {} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from "./pages/SplashScreen.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {

    return (
       <Router>
           <Routes>
               <Route path="/" element={<SplashScreen/>} />
               <Route path="/home" element={<HomePage/>} />
               <Route path="/login" element={<LoginPage/>} />
           </Routes>
       </Router>
    )
}

export default App
