import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientSays from "./Routes/ClientSays/ClientSays";
import ContactUs from "./Routes/ContactUs/ContactUs";
import InstructPage from "./Routes/InstructPage/InstructPage";
import OurTeam from "./Routes/OurTeam/OurTeam";
import OurPackages from "./Routes/OurPackages/OurPackages";
import BookingForm from "./Routes/OurPackages/BookingForm/BookingForm";
import Breaststroke from "./Routes/Breaststroke/Breaststroke";
import Membership from "./Routes/Membership/Membership";
import BookingConfirmation from "./Routes/OurPackages/BookingConfirmation/BookingConfirmation";
import Payment from "./Routes/OurPackages/Payment/Payment";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/OurPackages' element={<OurPackages />} />
            <Route path='/OurPackages/:packageName/booking' element={<BookingForm />} />
            <Route path='/OurPackages/:packageName/bookingconfirmation' element={<BookingConfirmation />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/OurTeam' element={<OurTeam />} />
            <Route path='/InstructPage' element={<InstructPage />} />
            <Route path='/ClientSays' element={<ClientSays />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/breaststroke' element={<Breaststroke />} />
            <Route path='/membership' element={<Membership />} />
        </Routes>
    </BrowserRouter>
);
