import Navbar from "./components/Navbar.js"
import Home from "./pages/Home.js"
import AboutUs from "./pages/AboutUs.js"

export default function App(){
    return(
        <>
        <Navbar/>
        <div className="">    
            <Home/>
            <AboutUs/>
        </div>
        </>
    )
}