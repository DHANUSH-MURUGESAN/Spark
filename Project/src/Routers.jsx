import { Route, Routes } from "react-router"
import Layout from "./Layout";
import Home from "./Home";
import How from "./How_it_Works";
import Security from "./Security";
import Demoreq from "./Demoreq";
import Disclosure from "./Disclosure";
import Servicers from "./Servicers";
import Subservicers from "./Subservicers";
import Lenders from "./Lenders";
import Loancare from "./Loancare";
import About from "./About"

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home/>}/>
                <Route path="/how-it-works" element={<How />} />
                <Route path="/security" element={<Security />} />
                <Route path="/demo-request" element={<Demoreq/>} />
                <Route path="/coordinated-disclosure-policy" element={<Disclosure/>} />
                <Route path="/for-servicers" element={<Servicers/>} />
                <Route path="/for-subservicers" element={<Subservicers/>} />
                <Route path="/for-lenders" element={<Lenders/>} />
                <Route path="/viploan" element={<Loancare/>} />
                <Route path="/about" element={<About/>} />
            </Route>
        </Routes>
    )
}

export default Routers;

//havenservicing.com