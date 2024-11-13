import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientSays from "./Routes/ClientSays/ClientSays";
import ContactUs from "./Routes/ContactUs/ContactUs";
import InstructPage from "./Routes/InstructPage/InstructPage";
import OurTeam from "./Routes/OurTeam/OurTeam";
import OurPackages from "./Routes/OurPackages/OurPackages";
import BookingForm from "./Routes/OurPackages/BookingForm/BookingForm";


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/OurPackages' element={<OurPackages />} />
            <Route path='/ourpackages/:packageName/booking' element={<BookingForm />} />            <Route path='/OurTeam' element={<OurTeam />} />
            <Route path='/InstructPage' element={<InstructPage />} />
            <Route path='/ClientSays' element={<ClientSays />} />
            <Route path='/ContactUs' element={<ContactUs />} />
        </Routes>
    </BrowserRouter>,
)