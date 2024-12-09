import React, { useRef } from 'react';
import './Vidplayer.css';
import videov from '../../assets/videov.mp4';

const Vidplayer = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    };

    return (
        <div
            className={`vid-player ${playState ? '' : 'hide'}`}
            ref={player}
            onClick={closePlayer}
        >
            <video src={videov} autoPlay muted controls></video>
        </div>
    );
};

export default Vidplayer;
