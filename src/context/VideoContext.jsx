import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const openVideo = () => setIsVideoOpen(true);
    const closeVideo = () => setIsVideoOpen(false);

    return (
        <VideoContext.Provider value={{ isVideoOpen, openVideo, closeVideo }}>
            {children}
        </VideoContext.Provider>
    );
};

export const useVideo = () => {
    const context = useContext(VideoContext);
    if (!context) {
        throw new Error('useVideo must be used within VideoProvider');
    }
    return context;
};
