import React from 'react';

type CircularProgressBarProps = {
    max: number;
    current: number;
    className?: string;
}

const CIRCUMFERENCE = 2 * 22 / 7 * 70;

const CircularProgressBar = ({ current, max, className = '' }: CircularProgressBarProps) => {
    const percent = Math.round((current * 100) / max);

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <svg className="transform -rotate-90 w-48 h-48">
                <circle cx="96" cy="96" r="70" stroke="currentColor" stroke-width="30" fill="transparent"
                        className="text-lime-50" />

                <circle cx="96" cy="96" r="70" stroke="currentColor" stroke-width="30" fill="transparent"
                        stroke-dasharray={CIRCUMFERENCE}
                        stroke-dashoffset={CIRCUMFERENCE - percent / 100 * CIRCUMFERENCE}
                        className="text-emerald-500" />
            </svg>
            <span className="absolute text-3xl">{`${percent}%`}</span>
        </div>
    );
};

export default CircularProgressBar;