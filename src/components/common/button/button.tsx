import './button.css';
import React from 'react';

export const Button: React.FC<{ text: string; action: (() => void) | (() => Promise<void>) }> = ({
    text,
    action,
}) => {
    const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        action();
    };
    return (
        <button onClick={onButtonClick} className="button">
            {text}
        </button>
    );
};
