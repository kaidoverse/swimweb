import { useEffect, useRef, useState } from "react";

export default function useAutoCarousel(length, interval = 8000) {
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);

    const start = () => {
        if (timerRef.current) clearInterval(timerRef.current);

        timerRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % length);
        }, interval);
    };

    useEffect(() => {
        const handleVisibility = () => {
            if (document.hidden) {
                if (timerRef.current) clearInterval(timerRef.current);
            } else {
                start();
            }
        };

        start();
        document.addEventListener("visibilitychange", handleVisibility);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, [length, interval]);

    const goTo = (i) => {
        setIndex(i);
        start();
    };

    return { index, goTo };
}
