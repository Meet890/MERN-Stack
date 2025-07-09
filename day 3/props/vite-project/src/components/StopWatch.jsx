import React, { useRef, useState } from "react";

function StopWatch() {
    const [T, setT] = useState(0); // T in ms
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (intervalRef.current !== null) return; // Prevent multiple intervals
        intervalRef.current = setInterval(() => {
            setT((prev) => prev + 10); // increment by 10ms
        }, 10);
    };

    const stopTimer = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const resetTimer = () => {
        setT(0);
        stopTimer();
    };

    const hours = Math.floor(T / 3600000);
    const minutes = Math.floor((T % 3600000) / 60000);
    const seconds = Math.floor((T % 60000) / 1000);
    const milliseconds = Math.floor((T % 1000) / 10); // 2 digits

    const formattedHours = `00${hours}`.slice(-2);
    const formattedMinutes = `00${minutes}`.slice(-2);
    const formattedSeconds = `00${seconds}`.slice(-2);
    const formattedMilliseconds = `00${milliseconds}`.slice(-2);

    return (
        <div>
            <h2>StopWatch : {`${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`}</h2>
            <p className="text-gray-500 mt-8"></p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={startTimer}>
                Start
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded ml-2" onClick={stopTimer}>
                Stop
            </button>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded ml-2" onClick={resetTimer}>
                Reset
            </button>
        </div>
    );
}

export default StopWatch;