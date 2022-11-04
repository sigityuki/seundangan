import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"

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