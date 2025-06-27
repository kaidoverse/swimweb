import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './index.css';

import App from "./App";
import Contact from "./Routes/Contact/contact";
import InstructPage from "./Routes/InstructPage/InstructPage";
import OurTeam from "./Routes/OurTeam/OurTeam";
import OurPackages from "./Routes/OurPackages/OurPackages";
import BookingForm from "./Routes/OurPackages/BookingForm/BookingForm";
import BookingConfirmation from "./Routes/OurPackages/BookingConfirmation/BookingConfirmation";
import Payment from "./Routes/OurPackages/Payment/Payment";
import ClientSays from "./Routes/ClientSays/ClientSays";
import Breaststroke from "./Routes/Breaststroke/Breaststroke";
import Membership from "./Routes/Membership/Membership";

const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
};

const Root = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/OurPackages" element={<OurPackages />} />
                <Route path="/OurPackages/:packageName/booking" element={<BookingForm />} />
                <Route path="/OurPackages/:packageName/bookingconfirmation" element={<BookingConfirmation />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/OurTeam" element={<OurTeam />} />
                <Route path="/InstructPage" element={<InstructPage />} />
                <Route path="/ClientSays" element={<ClientSays />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/breaststroke" element={<Breaststroke />} />
                <Route path="/membership" element={<Membership />} />
            </Routes>
        </BrowserRouter>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
