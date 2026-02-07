import React from 'react';
import swamLogo from '../../assets/swam-logo.png';

const PageLoader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <style>{`
                @keyframes logoFade {
                    0% { opacity: 0.25; }
                    50% { opacity: 1; }
                    100% { opacity: 0.25; }
                }
            `}</style>
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-white/20">
                    <img
                        src={swamLogo}
                        alt="SWA"
                        className="w-12 h-12 object-contain"
                        style={{ animation: 'logoFade 1.6s ease-in-out infinite' }}
                    />
                </div>
                <p className="mt-4 text-white/80 text-xs uppercase tracking-[0.3em]">Loading</p>
            </div>
        </div>
    );
};

export default PageLoader;
