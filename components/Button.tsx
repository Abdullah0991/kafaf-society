import React from 'react';

type ButtonProps = {
    type?: 'button' | 'submit';
    label: string;
    className?: string;
}
const Button = ({ label, type = 'button', className }: ButtonProps) => {
    return (
        <button type={type} className={`flex justify-center gap-3 rounded-full border ${className ?? ''}`}>
            <label className='font-bold whitespace-nowrap'>{label}</label>
        </button>
    );
};

export default Button;