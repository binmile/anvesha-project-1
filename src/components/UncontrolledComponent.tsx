import React, { useRef } from 'react';

const UncontrolledComponent: React.FC = () => {
    const inputValue = useRef<HTMLInputElement | null>(null); // Use the correct HTMLInputElement type
    const handleClick = () => {
        if (inputValue.current) {
            console.log(inputValue.current.value);
        }
    };

    return (
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" ref={inputValue} />
            <button onClick={handleClick}>Submit</button>
        </div>
    );
};

export default UncontrolledComponent;
