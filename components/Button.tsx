import React from 'react';

type ButtonProps = {
    type?: 'button' | 'submit';
    label: string;
    className?: string;
    onClick?: () => void;
}
const Button = ({ label, type = 'button', className, onClick }: ButtonProps) => {
    return (
        <button
            type={type}
            className={`flex justify-center items-center gap-3 rounded-full border ${className ?? ''}`}
            onClick={onClick}
        >
            <label className='font-bold whitespace-nowrap cursor-pointer'>{label}</label>
        </button>
    );
};

export default Button;