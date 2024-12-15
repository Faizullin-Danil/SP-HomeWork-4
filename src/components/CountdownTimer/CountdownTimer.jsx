import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
    const [timer, setTimer] = useState(3); 

    useEffect(() => {
        if (timer === 0) return;

        const IntervalId = setInterval(() => {setTimer(timer - 1)}, 1000)

        return () => clearInterval(IntervalId)
    }, [timer])

    return (
        <div>
            {timer}
        </div>
    );
};

export default CountdownTimer;
