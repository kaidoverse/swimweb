import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigationType } from 'react-router-dom';
import { Toaster } from 'sonner';

import App from './App';
import PageLoader from './Components/common/PageLoader';
import { VideoProvider } from './context/VideoContext';
import './index.css';

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
            return (
                <div className="min-h-screen bg-white flex items-start justify-center pt-28 px-6">
                    <div className="w-full max-w-2xl rounded-3xl border border-[#c9a24d]/40 bg-white p-8 text-center shadow-[0_18px_45px_rgba(1,59,89,0.12)]">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-[#c9a24d]">Something Went Wrong</p>
                        <h1 className="mt-4 text-2xl sm:text-3xl font-semibold text-[#013b59]">
                            We couldn’t load this page
                        </h1>
                        <div className="mx-auto mt-4 h-[2px] w-16 bg-[#c9a24d]" />
                        <p className="mt-4 text-sm sm:text-base text-[#4a4f63]">
                            Please refresh the page or return home. If the problem persists, contact our team.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="px-7 py-3 bg-black text-white text-xs uppercase tracking-[0.3em] hover:bg-[#111]"
                            >
                                Try Again
                            </button>
                            <a
                                href="/"
                                className="px-7 py-3 border border-gray-300 text-xs uppercase tracking-[0.3em] text-gray-700 hover:border-[#c9a24d]"
                            >
                                Go Home
                            </a>
                        </div>
                    </div>
                </div>
            );
        return this.props.children;
    }
}

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

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navigationType = useNavigationType();
    React.useEffect(() => {
        if (navigationType === 'POP') return;
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [pathname, navigationType]);
    return null;
};

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
