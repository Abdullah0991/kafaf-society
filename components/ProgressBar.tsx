import React from 'react';
import { currFormatter } from "@/lib/helpers";

type ProgressBarProps = {
    max: number;
    current: number;
    label: string;
    className?: string;
}

const ProgressBar = ({ max, current, label, className = '' }: ProgressBarProps) => {
    return (
        <div className={`space-y-2 w-full ${className}`}>
            <div className="flex items-center">
                <h4
                    className="font-medium text-sm ml-auto text-gray-700 flex items-center"
                >
                    {label}
                    &nbsp;
                    ({`${max > 0 ? Math.round((current * 100) / max) : 0} %`})
                </h4>
                <span className="px-2 py-1 rounded-lg bg-lime-50 text-emerald-500 text-sm">
                    {currFormatter(current)} / <strong>{currFormatter(max)}</strong>
                </span>
            </div>
            <div className={`overflow-hidden bg-emerald-50 h-1.5 rounded-full w-full`}>
              <span
                  className="h-full bg-emerald-500 w-full block rounded-full"
                  style={{ "width": `${max > 0 ? Math.round((current * 100) / max) : 0}%` }}
              ></span>
            </div>
        </div>
    );
};

export default ProgressBar;
