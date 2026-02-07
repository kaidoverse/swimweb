import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';

import App from './App';
import PageLoader from './Components/common/PageLoader';
import { VideoProvider } from './context/VideoContext';
import './index.css';

// --- Error Boundary for lazy-loaded pages ---
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError)
            return <div className="text-center mt-20 text-red-600">Oops, something went wrong!</div>;
        return this.props.children;
    }
}

// --- Lazy-loaded pages ---
const HomePage = React.lazy(() => import('./pages/Home/HomePage'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const InstructPage = React.lazy(() => import('./pages/InstructPage/InstructPage'));
const OurTeam = React.lazy(() => import('./pages/OurTeam/OurTeam'));
const OurPackages = React.lazy(() => import('./pages/OurPackages/OurPackages'));
const BookingForm = React.lazy(() => import('./pages/OurPackages/BookingForm/BookingForm'));
const BookingConfirmation = React.lazy(() => import('./pages/OurPackages/BookingConfirmation/BookingConfirmation'));
const BookingSuccess = React.lazy(() => import('./pages/OurPackages/BookingSuccess/BookingSuccess'));
const Payment = React.lazy(() => import('./pages/OurPackages/Payment/Payment'));
const ClientSays = React.lazy(() => import('./pages/ClientSays/ClientSays'));
const Breaststroke = React.lazy(() => import('./Routes/Breaststroke/Breaststroke'));
const Membership = React.lazy(() => import('./pages/Membership/Membership'));

// --- ScrollToTop Component ---
const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [pathname]);
    return null;
};

// --- Root Component ---
const Root = () => (
    <VideoProvider>
        <BrowserRouter>
            <ScrollToTop />
            <Toaster position="top-right" richColors />
            <ErrorBoundary>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        {/* App Layout */}
                        <Route element={<App />}>
                            <Route index element={<HomePage />} />

                            {/* Packages */}
                            <Route path="packages" element={<OurPackages />} />
                            <Route path="packages/:packageName/booking" element={<BookingForm />} />
                            <Route path="packages/:packageName/confirmation" element={<BookingConfirmation />} />
                            <Route path="packages/success" element={<BookingSuccess />} />
                            <Route path="payment" element={<Payment />} />

                            {/* Team & Instructors */}
                            <Route path="team" element={<OurTeam />} />
                            <Route path="instructors" element={<InstructPage />} />

                            {/* Other Pages */}
                            <Route path="testimonials" element={<ClientSays />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="breaststroke" element={<Breaststroke />} />
                            <Route path="membership" element={<Membership />} />

                            {/* Fallback */}
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Route>
                    </Routes>
                </Suspense>
            </ErrorBoundary>
        </BrowserRouter>
    </VideoProvider>
);

// --- Render ---
ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
