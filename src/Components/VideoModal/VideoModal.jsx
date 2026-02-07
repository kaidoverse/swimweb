import React, { useRef } from 'react';
import './VideoModal.css';
import videov from '@assets/videov.mp4';

const Vidplayer = ({ open, onClose }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current && onClose) {
            onClose();
        }
    };

    return (
        <div
            className={`vid-player ${open ? '' : 'hide'}`}
            ref={player}
            onClick={closePlayer}
        >
            <video src={videov} autoPlay muted controls></video>
        </div>
    );
};

export default Vidplayer;
